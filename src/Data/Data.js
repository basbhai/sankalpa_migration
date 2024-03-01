const navLiElement = [
  {
    id: 1,
    name: "About Us",
    href: "#About",
  },
  {
    id: 2,
    name: "Practice Area",
    href: "#OurPracticeArea",
  },
  {
    id: 3,
    name: "Contact Us",
    href: "#contactUs",
  },
  {
    id: 4,
    name: "Docs",
    href: "#Docs",
  },
];

const AboutData = {
  title:
    "Rights and Justice Advocates: Empowering Individuals with a Thoughtful Strategy.",
  desc: "With a proven track record in managing countless civil, commercial, and Public Interest Litigation suits, our firm has honed its proficiency in evaluating case facts and implementing optimal decisions and actions to safeguard our clients' interests and fulfill their objectives.",

  quotes: "The only way to ensure justice is to commit oneself to seeking it.",
};

const InitativesData = [
  {
    title: "Free Legal Consultation",
    src: "/photo.avif",
    desc: "Connect with our attorney for free legal consultation",
    alt: "hello",
    tags: ["Justice", "Law", "Equality"], // Added justice, law, and equality tags
  },
  {
    title: "Pro bono Services",
    src: "/photo.avif",
    desc: "We provide pro bono services on a regular basis.",
    alt: "hello",
    tags: ["Justice", "Law", "Equality"], // Added justice, law, and equality tags
  },
  {
    title: "Low Cost legal services",
    src: "/photo.avif",
    desc: "We provide quality service at low cost. Just leave your legal hassle to us",
    alt: "hello",
    tags: ["Justice", "Law", "Equality"], // Added justice, law, and equality tags
  },
];

const PracticeAreaData = [
  {
    id: 1,
    title: "Banking And Finance",
    src: "/photo.avif",
    tag: "Connect with our attorney for free legal consultation",
    alt: "hello",
    services: {
      "Regulatory Compliance":
        "Sankalpa Team assists banks and financial institutions in Nepal in maintaining adherence to the country’s regulatory framework. This includes providing guidance on banking laws, regulations, and compliance with the Nepal Rastra Bank (NRB) guidelines.",
      "Licensing and Registration":
        "Sankalpa Team helps clients navigate the process of acquiring the requisite licenses and registrations necessary to operate as a financial institution in Nepal.",
      "Contract Drafting and Review":
        "Sankalpa Team drafts and reviews various contracts, including loan agreements, mortgage agreements, and other financial instruments to ensure legal validity and protection of the institution’s interests.",
      "Due Diligence":
        "Conducting thorough due diligence on borrowers, customers, and potential business partners to mitigate risks associated with lending and financial transactions is a service provided by Sankalpa Team.",
      "Debt Recovery":
        "Sankalpa Team assists financial institutions in their efforts to recover debts, which may involve litigation or alternative dispute resolution methods like negotiation and mediation.",
      "Mergers and Acquisitions":
        "Sankalpa Team provides advice on mergers, acquisitions, and restructuring activities within the banking and financial sector, including obtaining regulatory approvals and ensuring compliance.",
      "Dispute Resolution":
        "Representing banks and financial institutions in legal disputes, whether they involve customers, shareholders, or regulatory authorities, is a key service offered by Sankalpa Team.",
      "Data Protection and Privacy":
        "Ensuring compliance with data protection and privacy laws when handling customer data and sensitive financial information is a priority for Sankalpa Team.",
      "Employment and Labor Law":
        "Sankalpa Team offers legal counsel on employment matters, including employment contracts, labor disputes, and compliance with labor laws and regulations.",
      "Corporate Governance":
        "Assisting with corporate governance issues, including board of directors’ responsibilities, shareholder rights, and regulatory compliance, is part of the services provided by Sankalpa Team.",
      "Bankruptcy and Insolvency":
        "Sankalpa Team represents financial institutions in bankruptcy and insolvency proceedings, including protecting creditor rights and facilitating debt recovery in such cases.",
      "Anti-Money Laundering (AML) and Counter-Terrorism Financing (CTF)":
        "Assisting in the development and implementation of AML and CTF policies and procedures to prevent financial crimes is a specialized service offered by Sankalpa Team.",
      Taxation:
        "Providing guidance on tax matters related to financial transactions, investment structures, and compliance with tax laws is one of the areas of expertise of Sankalpa Team.",
      "Financial Regulatory Advice":
        "Sankalpa Team offers ongoing advice and updates on changes in financial regulations that may impact the operations of banks and financial institutions.",
      "International Transactions":
        "Sankalpa Team assists in cross-border transactions, international financing, and compliance with international laws and agreements.",
      "Alternative Dispute Resolution (ADR)":
        "Facilitating negotiations and settlements through ADR mechanisms like arbitration and mediation to resolve disputes efficiently is a service provided by Sankalpa Team.",
      "Legal Training and Workshops":
        "Sankalpa Team conducts training sessions and workshops for bank and financial institution staff to enhance their understanding of legal issues and compliance requirements.",
    },
  },
  {
    id: 2,
    title: "Commercial Law",
    src: "/photo.avif",
    tag: "We provide pro bono services in regular basis.",
    alt: "hello",
    services: {
      "Business Formation":
        "Assisting clients in selecting the appropriate legal structure for their business, such as partnerships, corporations, or limited liability companies, and aiding in registration and incorporation.",
      "Contract Drafting and Review":
        "Drafting, reviewing, and negotiating various commercial contracts and agreements, including sales contracts, distribution agreements, and licensing agreements.",
      "International Trade Compliance":
        "Advising on import and export regulations, customs compliance, trade agreements, and trade dispute resolution.",
      "Customs and Tariffs":
        "Providing guidance on customs duties, tariffs, and import/export documentation requirements for international trade.",
      "Trade Finance":
        "Assisting with trade finance arrangements, including letters of credit, trade credit insurance, and export financing.",
      "Intellectual Property":
        "Advising on intellectual property rights protection, including trademark, patent, and copyright registration, as well as enforcing IP rights and defending against infringement claims.",
      "Antitrust and Competition Law":
        "Advising on competition law matters, including merger control, anti-competitive behavior, and compliance with competition regulations.",
      "Consumer Protection":
        "Ensuring compliance with consumer protection laws and representing clients in disputes with consumers or regulatory authorities.",
      "E-commerce and Technology Transactions":
        "Assisting with legal aspects of e-commerce, online business, and technology-related transactions.",
      "Franchise Law":
        "Advising on franchise agreements, disclosure requirements, and franchisee-franchisor relationships.",
      "International Contracts":
        "Advising on international commercial contracts, including choice of law, jurisdiction, and dispute resolution clauses.",
      "Commercial Litigation":
        "Representing clients in commercial disputes, including breach of contract, non-performance, or contractual interpretation issues.",
      "Trade Secrets and Confidentiality":
        "Advising on protection of trade secrets and confidentiality agreements.",
      "Cross-Border Transactions":
        "Providing legal counsel on cross-border transactions, mergers, acquisitions, and joint ventures with international partners.",
      Taxation:
        "Offering tax planning and compliance services for businesses engaged in cross-border trade and commerce.",
      "Corporate Governance":
        "Advising on corporate governance matters, including compliance with company law, corporate bylaws, and director’s duties and responsibilities.",
      "Environmental Compliance":
        "Assisting businesses in compliance with environmental regulations, particularly in industries with environmental impact.",
      "Data Protection and Privacy":
        "Ensuring compliance with data protection and privacy laws when handling customer data and sensitive commercial information.",
      "Commercial Arbitration":
        "Representing clients in commercial arbitration proceedings to resolve disputes efficiently.",
      "Trade Remedy Actions":
        "Assisting in trade remedy actions such as anti-dumping and countervailing duty investigations.",
    },
  },
  {
    id: 3,
    title: "Corporate Law",
    src: "/photo.avif",
    tag: "We provide quality service at low cost",
    alt: "hello",
    services: {
      "Business Formation":
        "Assisting clients in selecting the appropriate legal structure for their business, such as partnerships, corporations, or limited liability companies, and helping with registration and incorporation.",
      "Contract Drafting and Review":
        "Drafting, reviewing, and negotiating various commercial contracts and agreements, including sales contracts, distribution agreements, and licensing agreements.",
      "International Trade Compliance":
        "Advising on import and export regulations, customs compliance, trade agreements, and trade dispute resolution.",
      "Customs and Tariffs":
        "Providing guidance on customs duties, tariffs, and import/export documentation requirements for international trade.",
      "Trade Finance":
        "Assisting with trade finance arrangements, including letters of credit, trade credit insurance, and export financing.",
      "Intellectual Property":
        "Advising on intellectual property rights protection, including trademark, patent, and copyright registration, as well as enforcing IP rights and defending against infringement claims.",
      "Antitrust and Competition Law":
        "Advising on competition law matters, including merger control, anti-competitive behavior, and compliance with competition regulations.",
      "Consumer Protection":
        "Ensuring compliance with consumer protection laws and representing clients in disputes with consumers or regulatory authorities.",
      "E-commerce and Technology Transactions":
        "Assisting with legal aspects of e-commerce, online business, and technology-related transactions.",
      "Franchise Law":
        "Advising on franchise agreements, disclosure requirements, and franchisee-franchisor relationships.",
      "International Contracts":
        "Advising on international commercial contracts, including choice of law, jurisdiction, and dispute resolution clauses.",
      "Commercial Litigation":
        "Representing clients in commercial disputes, including breach of contract, non-performance, or contractual interpretation issues.",
      "Trade Secrets and Confidentiality":
        "Advising on protection of trade secrets and confidentiality agreements.",
      "Cross-Border Transactions":
        "Providing legal counsel on cross-border transactions, mergers, acquisitions, and joint ventures with international partners.",
      Taxation:
        "Offering tax planning and compliance services for businesses engaged in cross-border trade and commerce.",
      "Corporate Governance":
        "Advising on corporate governance matters, including compliance with company law, corporate bylaws, and director’s duties and responsibilities.",
      "Environmental Compliance":
        "Assisting businesses in compliance with environmental regulations, particularly in industries with environmental impact.",
      "Data Protection and Privacy":
        "Ensuring compliance with data protection and privacy laws when handling customer data and sensitive commercial information.",
      "Commercial Arbitration":
        "Representing clients in commercial arbitration proceedings to resolve disputes efficiently.",
      "Trade Remedy Actions":
        "Assisting in trade remedy actions such as anti-dumping and countervailing duty investigations.",
    },
  },
];

const ContactDetails = {
  contactNo: "98xxxxxxxxx",
  EMail: "sankalpaLegal@gmail.com",
  Address: "lorem Ipsum Dolrem",
};

const cardVariants = {
  initial: {
    opacity: 0,
    y: -100,
  },
  whileInView: (index) => ({
    opacity: 1,

    y: 0,
    transition: {
      delay: 1 * index,
      type: "spring",
      duration: 3,
    },
  }),
};

export const rightcomVariant = {
  initial: {
    opacity: 0,
    x: -10,
  },
  whileInView: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",

      duration: 3,
    },
  },
};
export const leftComVariant = {
  initial: {
    opacity: 0,
    x: 10,
  },
  whileInView: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      duration: 4,
    },
  },
};
export {
  navLiElement,
  AboutData,
  InitativesData,
  PracticeAreaData,
  ContactDetails,
  cardVariants,
};
