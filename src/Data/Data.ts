interface navList {
  id: number;
  name: string;
  href: string;
}

const navLiElement: navList[] = [
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

interface initiatives {
  id: number;
  title: string;
  src: string;
  alt: string;
  desc: string;
  tags: string[];
}

const InitativesData: initiatives[] = [
  {
    id: 1,
    title: "Free Legal Consultation",
    src: "/photo.avif",
    desc: "Connect with our attorney for free legal consultation",
    alt: "hello",
    tags: ["Justice", "Law", "Equality"], // Added justice, law, and equality tags
  },
  {
    id: 2,
    title: "Pro bono Services",
    src: "/photo.avif",
    desc: "We provide pro bono services on a regular basis.",
    alt: "hello",
    tags: ["Justice", "Law", "Equality"], // Added justice, law, and equality tags
  },
  {
    id: 3,
    title: "Low Cost legal services",
    src: "/photo.avif",
    desc: "We provide quality service at low cost. Just leave your legal hassle to us",
    alt: "hello",
    tags: ["Justice", "Law", "Equality"], // Added justice, law, and equality tags
  },
];

interface BankingAndFinance {
  id: number;
  title: string;
  src: string;
  desc: string;
  alt: string;
  services: {
    [key: string]: string;
  };
}
const PracticeAreaData: BankingAndFinance[] = [
  {
    id: 1,
    title: "Banking And Finance",
    src: "/photo.avif",
    desc: "Regulatory Compliance: Sankalpa Team assists banks and financial institutions in Nepal in maintaining adherence to the country’s regulatory framework. This includes providing guidance on banking laws, regulations, and compliance with the Nepal Rastra Bank (NRB) guidelines.",
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
    desc: "Business Formation: Assisting clients in selecting the appropriate legal structure for their business, such as partnerships, corporations, or limited liability companies, ",
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
    desc: "Business Formation: Assisting clients in selecting the appropriate legal structure for their business, such as partnerships, corporations, or",
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
  {
    id: 4,
    title: "Foreign Direct Investment",
    src: "/photo.avif",
    desc: "Investment Structure: Advising foreign investors on the appropriate investment structure, such as forming a wholly-owned subsidiary, joint venture, or branch office.",
    alt: "hello",
    services: {
      "Investment Structure":
        "Advising foreign investors on the appropriate investment structure, such as forming a wholly-owned subsidiary, joint venture, or branch office.",
      "Legal Due Diligence":
        "Conducting due diligence on potential investment opportunities, including assessing regulatory compliance, legal risks, and market conditions.",
      "Investment Approval":
        "Assisting with obtaining necessary approvals and permits from the Nepal Investment Board (NIB) or other relevant government agencies.",
      "Regulatory Compliance":
        "Ensuring compliance with FDI regulations, sector-specific guidelines, and foreign exchange regulations.",
      "Entry Strategies":
        "Developing entry strategies that align with the investor’s objectives and the legal and regulatory framework in Nepal.",
      "Company Registration":
        "Assisting with the registration and incorporation of the foreign-owned entity in Nepal, including obtaining a company registration certificate.",
      "License and Permit Procurement":
        "Facilitating the procurement of industry-specific licenses and permits, including environmental clearances and sectoral approvals.",
      "Tax Planning":
        "Advising on tax planning and compliance, including understanding tax incentives and exemptions available to foreign investors.",
      "Contract Negotiation":
        "Negotiating contracts and agreements with local partners, suppliers, and customers, ensuring legal protections for foreign investors.",
      "Shareholder Agreements":
        "Drafting shareholder agreements that outline the rights and responsibilities of shareholders and govern the internal affairs of the company.",
      "Corporate Governance":
        "Advising on corporate governance practices, including compliance with company laws and regulations, board meetings, and reporting requirements.",
      "Employment and Labor Law":
        "Providing guidance on employment matters, including labor contracts, employment disputes, and compliance with labor laws.",
      "Banking and Finance":
        "Assisting with banking arrangements, foreign currency transactions, and compliance with foreign exchange regulations.",
      "Repatriation of Profits":
        "Advising on the repatriation of profits, dividends, and capital gains to foreign investors.",
      "Regulatory Reporting":
        "Assisting with the preparation and submission of regulatory reports and compliance documentation to government authorities.",
      "Environmental Compliance":
        "Ensuring compliance with environmental regulations and obtaining necessary clearances and approvals.",
      "Dispute Resolution":
        "Representing foreign investors in legal disputes, including commercial litigation and arbitration.",
      "Exit Planning":
        "Advising on exit strategies, including the sale of investments, mergers, or liquidation of entities.",
      "Liquidation and Repatriation":
        "Assisting with the proper liquidation of investments and repatriation of remaining assets and funds.",
    },
  },
  {
    id: 5,
    title: "Criminal Law",
    desc: "Legal Consultation: Offering initial legal advice to individuals facing criminal charges, elucidating their rights, and exploring available legal options.",
    src: "/photo.avif",
    alt: "hello",
    services: {
      "Legal Consultation":
        "Offering initial legal advice to individuals facing criminal charges, elucidating their rights, and exploring available legal options.",
      "Criminal Defense":
        "Representing clients entangled in criminal cases, including defending against charges linked to various criminal offenses.",
      "Bail Proceedings":
        "Assisting clients in obtaining bail or securing release from detention while awaiting trial.",
      "Trial Representation":
        "Providing robust legal representation during criminal trials, encompassing the formulation of a strategic defense.",
      "Plea Bargaining":
        "Negotiating with prosecutors to reach plea agreements that could potentially mitigate charges or penalties.",
      Appeals:
        "Handling appeals in higher courts for clients seeking to challenge previous convictions.",
      "Extradition Matters":
        "Aiding clients confronting extradition to or from Nepal, navigating through intricate legal procedures involved.",
      "Post-Conviction Relief":
        "Pursuing legal remedies for individuals wrongfully convicted, striving for exoneration or reduced sentences.",
      "Juvenile Offenses":
        "Defending juveniles in criminal cases, ensuring their rights are safeguarded in accordance with Nepal’s laws.",
      "Domestic Violence Cases":
        "Advocating for victims or defendants in domestic violence cases, obtaining protective orders or defending against false accusations.",
      "Cybercrime Defense":
        "Handling cases pertaining to cybercrimes, including hacking, online fraud, and data breaches.",
      "Drug Offenses":
        "Defending clients accused of drug-related charges such as possession, trafficking, and distribution.",
      "White-Collar Crimes":
        "Representing individuals or entities involved in white-collar criminal cases like embezzlement, fraud, and corporate crimes.",
      "Property Crimes":
        "Addressing cases related to property crimes, such as burglary, robbery, and vandalism.",
      "Assault and Homicide":
        "Providing legal guidance and defense representation for clients facing charges related to assault or homicide.",
      "Traffic Violations":
        "Assisting clients charged with traffic-related criminal offenses, including DUI and reckless driving.",
      "Witness Representation":
        "Advising and representing witnesses in criminal cases, ensuring their rights and safety are protected.",
      "Victim Representation":
        "Advocating for the rights and interests of crime victims, including seeking compensation and restitution.",
      "Legal Research and Analysis":
        "Conducting thorough legal research and analysis to construct compelling legal arguments.",
      "Pre-trial Negotiations":
        "Engaging in negotiations with the prosecution to explore settlement options and alternatives to trial.",
      "Expert Witnesses":
        "Identifying and collaborating with expert witnesses to bolster clients' defense strategies.",
      "Legal Education":
        "Offering clients comprehensive information about the Nepalese criminal justice system and their legal rights.",
    },
  },
  {
    id: 6,
    title: "Immigration and Visa",
    desc: "Visa Application Assistance: We assist individuals in preparing and submitting visa applications for various purposes, including tourist, student, work, and dependent visas.",
    src: "/photo.avif",
    alt: "hello",
    services: {
      "Visa Application Assistance":
        "We assist individuals in preparing and submitting visa applications for various purposes, including tourist, student, work, and dependent visas.",
      "Immigration Consultation":
        "We provide expert advice on immigration options, eligibility criteria, and help clients choose the most suitable visa category.",
      "Document Verification":
        "We verify and assist in preparing necessary documents such as educational certificates, employment letters, and financial statements.",
      "Visa Renewals and Extensions":
        "We help individuals with the renewal and extension of visas to ensure they maintain legal status in Nepal.",
      "Permanent Residency":
        "We advise on eligibility and assist in the application process for permanent residency status in Nepal, if available.",
      "Investor Visas":
        "We assist foreign investors in obtaining the necessary visas and permits to start or invest in businesses in Nepal.",
      "Work Permits":
        "We help businesses obtain work permits and employment visas for foreign employees.",
      "Intra-Company Transfers":
        "We assist with visas for intra-company transfers of employees to Nepal.",
      "Citizenship Applications":
        "We assist eligible foreign individuals in applying for Nepali citizenship through naturalization.",
      "Visa Denial Appeals":
        "We represent clients in appealing visa denials and advocate for their immigration rights.",
      "Immigration Compliance":
        "We advise individuals and businesses on compliance with immigration laws and regulations.",
      "Updates on Immigration Laws":
        "We keep clients informed about changes in immigration laws and policies that may affect their status or applications.",
      "Humanitarian Visas":
        "We assist individuals in humanitarian cases, such as medical visas for critical healthcare needs.",
      "International Adoption":
        "We provide legal support and guidance for international adoption processes, including immigration-related matters.",
      "Deportation Defense":
        "We represent individuals facing deportation or removal proceedings and advocate for their rights.",
    },
  },
];

interface contact {
  contactNo: string;
  EMail: string;
  Address: String;
}

const ContactDetails: contact = {
  contactNo: "98xxxxxxxxx",
  EMail: "sankalpaLegal@gmail.com",
  Address: "lorem Ipsum Dolrem",
};

const cardVariants = {
  initial: {
    opacity: 0,
    y: -10,
  },
  whileInView: (index: number) => ({
    opacity: 1,

    y: 0,
    transition: {
      delay: 0.15 * index,
      type: "spring",
      duration: 3,
    },
  }),
};

export const keyVarients = {
  initial: {
    opacity: 0,
    x: -10,
  },
  whileInView: (index: number) => ({
    opacity: 1,

    x: 0,
    transition: {
      delay: 0.1 * index,
      type: "spring",
      stiffness: 1000,
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
