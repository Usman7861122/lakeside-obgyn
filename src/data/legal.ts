// Legal pages copied word for word from the old site (lakesideobgyn.org, fetched 2026-11-12).
// Do not edit the wording here. Changes must come from the client (see docs/OPEN-QUESTIONS.md, "Legal pages").
export type LegalBlock = { h: string } | { p: string } | { ul: string[] };
export type LegalPage = { slug: string; title: string; description: string; source: string; blocks: LegalBlock[]; todo?: string };

export const privacy: LegalPage = {
  slug: 'your-privacy',
  title: 'Privacy Policy',
  description: 'Privacy Policy for the Lakeside Obstetrics, Gynecology & Fertility website: what we collect, how we use it, cookies, security and text messaging.',
  source: 'https://www.lakesideobgyn.org/your-privacy',
  blocks: [
    { h: 'PRIVACY STATEMENT' },
    { p: `We are committed to protecting your privacy and providing a safe online experience. This Privacy Statement applies to our Practice's website and governs our data collection and usage practices. By using this website, you consent to the data practices described in this Privacy Statement.` },
    { h: 'Collection of your Personal Information' },
    { p: `This Practice collects personally identifiable information provided by you, such as your e-mail address, name, home or work address or telephone number. This Practice also collects anonymous demographic information, which is not unique to you, such as your ZIP code, age, gender, preferences, interests and favorites. There is also information about your computer hardware and software that is automatically collected by this website. This information can include: your IP address, browser type, domain names, access times and referring website addresses. This information is used for the operation of the service, to maintain quality of the service, and to provide general statistics regarding use of this website. Please keep in mind that if you directly disclose personally identifiable information or personally sensitive data through public message boards, this information may be collected and used by others. This Practice encourages you to review the privacy statements of websites you choose to link to from the website so that you can understand how those websites collect, use and share your information. This Practice is not responsible for the privacy statements or other content on any other websites.` },
    { h: 'Use of your Personal Information' },
    { p: `This Practice collects and uses your personal information to operate the website and deliver the services you have requested. This Practice also uses your personally identifiable information to inform you of other products or services available from this Practice and its affiliates. This Practice may also contact you via surveys to conduct research about your opinion of current services or of potential new services that may be offered. This Practice does not sell, rent or lease its customer lists to third parties. This Practice may share data with trusted partners to help us perform statistical analysis, send you email or postal mail, provide customer support, or arrange for deliveries. All such third parties are prohibited from using your personal information except to provide these services and they are required to maintain the confidentiality of your information. This Practice does not use or disclose sensitive personal information, such as race, religion, or political affiliations, without your explicit consent. This Practice will disclose your personal information, without notice, only if required to do so by law.` },
    { h: 'Use of Cookies' },
    { p: `The website uses "cookies" to help this Practice personalize your online experience. A cookie is a text file that is placed on your hard disk by a webpage server. Cookies cannot be used to run programs or deliver viruses to your computer. Cookies are uniquely assigned to you, and can only be read by a web server in the domain that issued the cookie to you.` },
    { h: 'Security of your Personal Information' },
    { p: `This Practice secures your personal information from unauthorized access, use or disclosure. This Practice secures the personally identifiable information you provide on computer servers in a controlled, secure environment, protected from unauthorized access, use or disclosure. When personal information (such as a credit card number) is transmitted to other websites, it is protected through the use of encryption, such as the Secure Socket Layer (SSL) protocol.` },
    { h: 'SMS/Text Messaging Privacy' },
    { p: `When you opt in to receive text messages from us, we collect your mobile phone number. This information is used exclusively to send you the messages you have requested.` },
    { p: `Your phone number and any information collected through our messaging program will not be shared with or sold to third parties for their marketing or promotional purposes. Message and data rates may apply. You may opt out at any time by replying STOP.` },
    { h: 'Changes to this Statement' },
    { p: `This Practice will occasionally update this Privacy Statement to reflect company and customer feedback. We encourage you to periodically review this Privacy Statement to be informed of how this Practice is protecting your information.` },
    { h: 'Contact Information' },
    { p: `Please contact us by phone at 415-741-1000 or by mail at 402 8th Avenue, Suite 201, San Francisco, CA 94118.` },
  ],
};

export const terms: LegalPage = {
  slug: 'our-terms',
  title: 'Terms & Conditions',
  description: 'Terms & Conditions for using the Lakeside Obstetrics, Gynecology & Fertility website.',
  source: 'https://www.lakesideobgyn.org/our-terms',
  todo: 'The "Copyright and trademark notices" section names Tebra Technologies, Inc. (the old website vendor). It is copied exactly. Ask the client and their lawyer what it should say on the new site.',
  blocks: [
    { p: `Lakeside Obstetrics, Gynecology & Fertility (“we,” “us,” or “our”) provides this website (“Site”) to you conditioned on your acceptance without modification of the terms, conditions, and notices contained herein. Your use of this Site constitutes your agreement to all such terms, conditions, and notices.` },
    { h: 'MODIFICATION OF THESE TERMS OF USE' },
    { p: `We reserve the right to change the terms, conditions, and notices under which this Site is offered, including but not limited to the charges associated with the use of this Site.` },
    { h: 'LINKS TO THIRD PARTY SITES' },
    { p: `This Site may contain links to other websites ("Linked Sites"). The Linked Sites are not under our control and we are not responsible for the contents of any Linked Site, including without limitation any link contained in a Linked Site, or any changes or updates to a Linked Site. We are not responsible for webcasting or any other form of transmission received from any Linked Site. We are providing these links to you only as a convenience, and the inclusion of any link does not imply endorsement by us of the site or any association with its operators.` },
    { h: 'NO UNLAWFUL OR PROHIBITED USE' },
    { p: `As a condition of your use of this Site, you warrant to us that you will not use this Site for any purpose that is unlawful or prohibited by these terms, conditions, and notices. You may not use this Site in any manner which could damage, disable, overburden, or impair this Site or interfere with any other party's use and enjoyment of this Site. You may not obtain or attempt to obtain any materials or information through any means not intentionally made available or provided for through this Site.` },
    { h: 'CONTENT YOU SUBMIT' },
    { p: `When using this Site, you may have the opportunity to submit reviews or feedback regarding your experiences with us, and to participate in bulletin boards, chat areas, news groups, forums, communities, personal web pages, calendars, and/or other message or communication features designed to enable you to communicate with the public at large or with a group (collectively, "Communication Services"). You agree to use the Communication Services only to post, send, and receive messages and material that are proper and related to the particular Communication Service.` },
    { p: `By way of example, and not as a limitation, you agree that when using a Communication Service, you will not post content that contains:` },
    { ul: [
      `Personal and confidential information, including phone numbers, addresses, and health information;`,
      `Vulgar content, including offensive, derogatory, obscene, profane, or inflammatory language or content;`,
      `Threats or personal attacks on others;`,
      `Discriminatory content or hate speech, including content that advocates against groups of people based on their race, ethnic origin, religion, disability, gender, gender identity, sexual orientation, age, or veteran status;`,
      `Misrepresentations, including content submitted fraudulently on behalf of others or that misrepresents the your identity or connection with us or our practice;`,
      `Non-applicable content, including posts that are not specific to us or our practice;`,
      `Advertising or solicitations;`,
      `Illegal content; or`,
      `References to or information about ongoing legal matters or proceedings.`,
    ] },
    { p: `You further agree that you will not:` },
    { ul: [
      `Upload files that contain software or other material protected by intellectual property laws (or by rights of privacy of publicity) unless you own or control the rights thereto or have received all necessary consents.`,
      `Upload files that contain viruses, corrupted files, or any other similar software or programs that may damage the operation of another's computer.`,
      `Conduct or forward surveys, contests, pyramid schemes or chain letters.`,
      `Download any file posted by another user of a Communication Service that you know, or reasonably should know, cannot be legally distributed in such manner.`,
      `Falsify or delete any legal or other proper notices or proprietary designations or labels of the origin or source of software or other material contained in a file that is uploaded.`,
      `Restrict or inhibit any other user from using and enjoying the Communication Services.`,
      `Violate any code of conduct or other guidelines which may be applicable for any particular Communication Service.`,
      `Harvest or otherwise collect information about others, including e-mail addresses, without their consent.`,
    ] },
    { p: `We have no obligation to monitor the Communication Services. However, we reserve the right to review materials posted to a Communication Service and to remove any content that does not comply with these terms or any publicly posted content that includes personal and confidential information. We reserve the right to terminate your access to any or all of the Communication Services at any time without notice for any reason whatsoever. Content uploaded to a Communication Service may be subject to posted limitations on usage, reproduction, and/or dissemination. You are responsible for adhering to such limitations if you download the content. If you would like to remove your own review from this Site, please contact us.` },
    { h: 'LIABILITY DISCLAIMER' },
    { p: `THE INFORMATION, SOFTWARE, PRODUCTS, AND SERVICES INCLUDED IN OR AVAILABLE THROUGH THIS SITE MAY INCLUDE INACCURACIES OR TYPOGRAPHICAL ERRORS. CHANGES ARE PERIODICALLY ADDED TO THE INFORMATION HEREIN. WE AND/OR OUR SUPPLIERS MAY MAKE IMPROVEMENTS AND/OR CHANGES IN THIS SITE AT ANY TIME. ADVICE RECEIVED VIA THIS SITE SHOULD NOT BE RELIED UPON FOR PERSONAL, MEDICAL, LEGAL OR FINANCIAL DECISIONS AND YOU SHOULD CONSULT AN APPROPRIATE PROFESSIONAL FOR SPECIFIC ADVICE TAILORED TO YOUR SITUATION. WE AND/OR OUR SUPPLIERS MAKE NO REPRESENTATIONS ABOUT THE SUITABILITY, RELIABILITY, AVAILABILITY, TIMELINESS, AND ACCURACY OF THE INFORMATION, SOFTWARE, PRODUCTS, SERVICES AND RELATED GRAPHICS CONTAINED ON THIS SITE FOR ANY PURPOSE. TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, ALL SUCH INFORMATION, SOFTWARE, PRODUCTS, SERVICES AND RELATED GRAPHICS ARE PROVIDED "AS IS" WITHOUT WARRANTY OR CONDITION OF ANY KIND. WE AND/OR OUR SUPPLIERS HEREBY DISCLAIM ALL WARRANTIES AND CONDITIONS WITH REGARD TO THIS INFORMATION, SOFTWARE, PRODUCTS, SERVICES AND RELATED GRAPHICS, INCLUDING ALL IMPLIED WARRANTIES OR CONDITIONS OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE AND NON-INFRINGEMENT.TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL WE AND/OR OUR SUPPLIERS BE LIABLE FOR ANY DIRECT, INDIRECT, PUNITIVE, INCIDENTAL, SPECIAL, CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER INCLUDING, WITHOUT LIMITATION, DAMAGES FOR LOSS OF USE, DATA OR PROFITS, ARISING OUT OF OR IN ANY WAY CONNECTED WITH THE USE OR PERFORMANCE OF THIS SITE, WITH THE DELAY OR INABILITY TO USE THIS SITE OR RELATED SERVICES, THE PROVISION OF OR FAILURE TO PROVIDE SERVICES, OR FOR ANY INFORMATION, SOFTWARE, PRODUCTS, SERVICES AND RELATED GRAPHICS OBTAINED THROUGH THIS SITE, OR OTHERWISE ARISING OUT OF THE USE OF THIS SITE, WHETHER BASED ON CONTRACT, TORT, NEGLIGENCE, STRICT LIABILITY OR OTHERWISE, EVEN IF WE OR ANY OF OUR SUPPLIERS HAS BEEN ADVISED OF THE POSSIBILITY OF DAMAGES. BECAUSE SOME STATES/JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION OF LIABILITY FOR CONSEQUENTIAL OR INCIDENTAL DAMAGES, THE ABOVE LIMITATION MAY NOT APPLY TO YOU. IF YOU ARE DISSATISFIED WITH ANY PORTION OF THIS SITE, OR WITH ANY OF THESE TERMS OF USE, YOUR SOLE AND EXCLUSIVE REMEDY IS TO DISCONTINUE USING THIS SITE.` },
    { h: 'COPYRIGHT AND TRADEMARK NOTICES' },
    { p: `All contents of this website are Copyright © 2023 Tebra Technologies, Inc. All Rights Reserved. All logos are trademarks and service marks of Tebra Technologies, Inc. All other trademarks, service marks and logos used in this Site are the property of their respective owners.` },
    { h: 'TRADEMARKS' },
    { p: `The names of actual companies and products mentioned herein may be the trademarks of their respective owners. The example companies, organizations, products, people and events depicted herein are fictitious. No association with any real company, organization, product, person, or event is intended or should be inferred. Any rights not expressly granted herein are reserved.` },
    { h: 'NOTICES' },
    { p: `Please contact us by phone at 415-741-1000 or by mail at 402 8th Avenue, Suite 201, San Francisco, CA 94118.` },
  ],
};

export const openPayments: LegalPage = {
  slug: 'open-payments',
  title: 'Open Payments Database Notice',
  description: 'Notice to patients about the federal Open Payments database, as required by California Assembly Bill (AB) 1278.',
  source: 'https://practice.patientpop.com/contents/assemblybill?url=lakesideobgyn.org',
  blocks: [
    { h: 'Federal Law Requires Notice to Patients About Open Payments Database' },
    { p: `Pursuant to Assembly Bill (AB) 1278, physicians are required to provide a notice to patients regarding the Open Payments database (Database), which is managed by the U.S. Centers for Medicare & Medicaid Services, or CMS.` },
    { p: `“For informational purposes only, a link to the federal Centers for Medicare and Medicaid Services (CMS) Open Payments web page is provided here at https://openpaymentsdata.cms.gov.  The federal Physician Payments Sunshine Act requires that detailed information about payment and other payments of value worth over ten dollars ($10) from manufacturers of drugs, medical devices, and biologics to physicians and teaching hospitals be made available to the public."` },
  ],
};

export const accessibility: LegalPage = {
  slug: 'accessibility-statement',
  title: 'Accessibility Statement',
  description: 'Accessibility Statement for the Lakeside Obstetrics, Gynecology & Fertility website.',
  source: 'https://www.lakesideobgyn.org/accessibility-statement',
  todo: 'The old site page has a title, the office location and hours, and a phone number, but no accessibility statement text. Nothing was invented. Ask the client for the statement (for example from Tebra or their lawyer).',
  blocks: [],
};

export const legalPages = [privacy, terms, accessibility, openPayments];
