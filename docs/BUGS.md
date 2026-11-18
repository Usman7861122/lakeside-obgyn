# Bug log

Format: ID, date, status, what we see, what we know, what we tried, next step.

## BUG-001: GitHub deploy to S3 fails at "Could not assume role with OIDC"
- **Opened:** 2026-11-17
- **Status:** OPEN
- **Where:** GitHub Actions, workflow "Deploy to S3" (`.github/workflows/deploy.yml`), first run after commit 7111213 on `main`.
- **What we see:** step `aws-actions/configure-aws-credentials@v4` fails after about 2 minutes (it retries 12 times). Error: `Could not assume role with OIDC: Not authorized to perform sts:AssumeRoleWithWebIdentity`. The steps after it (3 uploads) are skipped.
- **What works:** checkout, setup-node, `npm ci` and `npm run build` all pass (about 4 seconds each).
- **What we checked:**
  - Role `arn:aws:iam::408421298613:role/github-lakeside-deploy` exists. Region `us-east-1`. Bucket `lakeside-obgyn-website`.
  - Trust policy (screenshot 2026-11-17): Principal is the provider `arn:aws:iam::408421298613:oidc-provider/token.actions.githubusercontent.com`. Condition `aud` = `sts.amazonaws.com`. Condition `sub` (StringLike) = `repo:Usman7861122/lakeside-obgyn:ref:refs/heads/main` (listed twice).
  - All of this looked correct, so the problem is probably one of the ideas below.
- **Ideas, most likely first:**
  1. The IAM identity provider `token.actions.githubusercontent.com` was created earlier with a different **Audience** (not `sts.amazonaws.com`). Check IAM > Identity providers > the provider > Audiences.
  2. The `sub` GitHub sends is not what the policy expects (repo name or owner in a different letter case, or a custom subject setting on the repo or organization). Fix: print the token's `sub` in the run and compare.
  3. The provider ARN in the trust policy points to a provider that was deleted and recreated, or the role is in another AWS account than the provider.
  4. The repo was renamed or moved after the policy was written.
- **Update 2026-11-17:** provider Audience is `sts.amazonaws.com` (checked in IAM). Idea 1 is ruled out.
- **Cause found 2026-11-17:** the debug step printed `sub = repo:Usman7861122@168510874/lakeside-obgyn@1453866473:ref:refs/heads/main`. GitHub sends the owner and repo IDs inside the subject (a custom subject setting), but the trust policy expects `repo:Usman7861122/lakeside-obgyn:ref:refs/heads/main`. They never match, so AWS refuses the role. `aud`, `iss`, repository and ref were all correct.
- **Fix (to do in AWS):** edit the role's trust policy and set the `sub` condition to exactly `repo:Usman7861122@168510874/lakeside-obgyn@1453866473:ref:refs/heads/main`. Then re-run the workflow and remove the debug step.
- **Old next step (done):** a temporary "Debug OIDC claims" step was added to the workflow. After the next run, compare the printed `sub` and `aud` with the trust policy. Remove the debug step once fixed.
- **Fix applied:** none yet.
