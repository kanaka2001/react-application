import vpcIcon from "./assets/services/vpc.svg";
import iamIcon from "./assets/services/iam.svg";
import s3Icon from "./assets/services/s3.svg";
import ec2Icon from "./assets/services/ec2.svg";
import awsIcon from "./assets/services/aws.svg";

export const NAV = [
  ["What is AWS", "aws"],
  ["Services", "services"],
  ["Schedule", "schedule"],
  ["FAQs", "faq"],
  ["Contact", "contact"],
];

export const HERO = {
  banner: "AWS Student Builder Group DBIT in association with PESCE Mandya Organisers",
  badge: "LIVE ON AWS • REGION: AP-SOUTH-1 (MUMBAI)",
  sub: "An interactive technical workshop bridging cloud fundamentals, virtual networking, identity security, and live application hosting—built and deployed in real time by student builders.",
  actions: [
    ["Explore AWS Services", "#services"],
    ["View Event Schedule", "#schedule"],
    ["Connect with Organizers", "#contact"],
  ],
};

export const OVERVIEW = {
  title: "What is Amazon Web Services (AWS)?",
  copy: "Amazon Web Services (AWS) is the world’s most comprehensive and widely adopted cloud platform, offering over 200 fully featured services from global data centers. Instead of buying, owning, and maintaining physical servers and data centers, developers and organizations can access compute power, storage, databases, networking, and AI on demand with pay-as-you-go pricing.",
  compareTitle: "Why Cloud Computing Matters (Before vs. After AWS)",
  before: {
    label: "Before the Cloud (On-Premises)",
    text: "High upfront capital expenditure, weeks of hardware provisioning, manual scaling, and heavy maintenance overhead.",
  },
  after: {
    label: "After the Cloud (AWS)",
    text: "Instant resource provisioning in seconds, elastic auto-scaling, global reach across Availability Zones, and built-in enterprise security.",
  },
  modelsTitle: "Cloud Service & Deployment Models Covered",
  core: ["Infrastructure as a Service (IaaS)", "Platform as a Service (PaaS)", "Software as a Service (SaaS)"],
  emerging: [
    "Function as a Service (FaaS)",
    "Containers as a Service (CaaS)",
    "Database as a Service (DBaaS)",
    "Desktop as a Service (DaaS)",
  ],
};

export const SERVICES_HEAD = {
  title: "AWS Services Powering Today’s Workshop",
  sub: "Each service below represents a core building block configured during our console walkthroughs and live React deployment labs.",
};

export const SERVICES = [
  {
    code: "VPC",
    icon: vpcIcon,
    color: "#8C4FFF",
    name: "Amazon VPC (Virtual Private Cloud)",
    category: "Networking & Content Delivery",
    concepts: ["Public vs. Private Subnets", "Route Tables", "Internet Gateways (IGW)", "Load Balancers"],
    text: "Amazon VPC lets you launch AWS resources into a logically isolated virtual network that you define. You get complete control over your virtual networking environment, including IP address ranges, subnet segmentation, route table configuration, and internet gateways.",
  },
  {
    code: "IAM",
    icon: iamIcon,
    color: "#DD344C",
    name: "AWS IAM (Identity and Access Management)",
    category: "Security, Identity & Compliance",
    concepts: ["Authentication", "Authorization", "Role-Based Access Control (RBAC)", "Principle of Least Privilege"],
    text: "AWS IAM enables you to manage access to AWS services and resources securely. Using IAM users, groups, roles, and granular JSON permission policies, you enforce who is authenticated (signed in) and authorized (has permissions) to use specific cloud resources.",
  },
  {
    code: "S3",
    icon: s3Icon,
    color: "#3F8624",
    name: "Amazon S3 (Simple Storage Service)",
    category: "Cloud Object Storage",
    concepts: ["Buckets", "Objects", "Bucket Policies", "Access Controls", "Static Website Hosting"],
    text: "Amazon S3 is an object storage service offering industry-leading scalability, data availability, security, and performance (99.999999999% durability). Developers use S3 to store static assets, backups, and host compiled frontend React applications directly over HTTP/HTTPS.",
  },
  {
    code: "EC2",
    icon: ec2Icon,
    color: "#ED7100",
    name: "Amazon EC2 (Elastic Compute Cloud)",
    category: "Scalable Virtual Compute",
    concepts: ["Virtualization (The Engine of Cloud)", "Security Groups", "Network ACLs (NACLs)", "Web Server Hosting"],
    text: "Amazon EC2 provides resizable virtual server capacity in the cloud. During our lab, EC2 serves as the compute engine hosting our live web server, protected at the instance level by stateful Security Groups and at the subnet level by stateless Network ACLs.",
  },
  {
    code: "WA",
    icon: awsIcon,
    color: "#FF9900",
    name: "AWS Well-Architected Framework & Builder Center",
    category: "Cloud Best Practices & Developer Community",
    concepts: ["Operational Excellence", "Security", "Reliability", "Performance Efficiency", "Cost Optimization", "Sustainability"],
    text: "The AWS Well-Architected Framework helps cloud architects build secure, high-performing, resilient, and efficient infrastructure across six core pillars, supported by hands-on learning tools inside AWS Builder Center and AWS Academy.",
  },
];

export const EVENT = {
  title: "Workshop Event Details",
  summary: [
    ["Event Date", "16 November 2026"],
    ["Event Name", "Hands-On AWS Cloud & Live React Deployment Workshop"],
    ["Organized By", "AWS Student Builder Group DBIT in association with PESCE Mandya Organisers"],
    ["Host Venue", "PESCE (PES College of Engineering), Mandya"],
    ["Session Duration", "3 Hours (10:30 AM – 01:30 PM)"],
    ["Workshop Track", "Cloud Foundations • Networking & Security • Hands-On React Deployment"],
    ["Primary Lab Region", "Asia Pacific (Mumbai) — ap-south-1"],
  ],
  agendaTitle: "Minute-by-Minute Agenda",
};

// [start, end, minutes, type, title, focus, speakerLabel, speakers]
export const AGENDA = [
  ["10:30 AM", "10:45 AM", 15, "", "Welcome & Opening Remarks", "Official welcome by host coordinators, event overview, and team introduction.", "Speaker", "PESCE Mandya Team"],
  ["10:45 AM", "11:00 AM", 15, "Theory", "Cloud Computing: Before & After the Cloud", "Evolution from on-premises servers to cloud agility, scalability, and business impact.", "Speaker", "Saicharan"],
  ["11:00 AM", "11:20 AM", 20, "Theory", "AWS Essentials, Global Infrastructure & Service Models", "Cloud characteristics, Regions & Availability Zones, IaaS, PaaS, SaaS, FaaS, CaaS, DBaaS, and DaaS.", "Speakers", "Ankitha & Hephzi"],
  ["11:20 AM", "11:50 AM", 30, "Theory + Demo", "Amazon VPC & Cloud Networking", "Public vs. Private Subnets, Route Tables, Internet Gateways, Load Balancers, and live AWS Console walkthrough.", "Speakers", "Komal & Navya"],
  ["11:50 AM", "12:00 PM", 10, "Buffer", "Q&A & Hands-On Lab Readiness Check", "Verifying Wi-Fi connectivity, Zero-Spend Budget alerts, and ap-south-1 console logins.", "Facilitators", "All AWS SBG DBIT Volunteers"],
  ["12:00 PM", "12:15 PM", 15, "Hands-On", "AWS Identity and Access Management (IAM)", "Authentication, authorization, Role-Based Access Control (RBAC), and Principle of Least Privilege.", "Speaker", "Lohith G Gowda"],
  ["12:15 PM", "12:30 PM", 15, "Hands-On", "Amazon S3 & Static Asset Hosting", "Bucket creation, object management, access policies, and hosting compiled frontend files.", "Speaker", "Akhil"],
  ["12:30 PM", "01:05 PM", 35, "Hands-On", "Amazon EC2, Security Groups, NACLs & Live App Deployment", "Virtualization fundamentals, launching EC2 instances, configuring Security Groups & NACLs, and deploying the React app live.", "Speaker", "Madhu"],
  ["01:05 PM", "01:20 PM", 15, "Theory", "AWS Builder Center & Well-Architected Framework", "Designing across the 6 Well-Architected pillars and navigating AWS Builder Center resources.", "Speakers", "Madhu & Priyanka"],
  ["01:20 PM", "01:30 PM", 10, "Theory", "AWS Academy & AWS Student Builder Group Pathways", "Student learning roadmaps, community programs, next steps, and closing remarks.", "Speaker", "Champa Ma’am"],
];

export const FAQ_HEAD = {
  title: "Everything You Need to Know",
  sub: "Common questions on learning AWS, building real projects, and progressing from beginner labs to intermediate cloud engineering.",
};

export const FAQS = [
  [
    "Is learning AWS difficult if I only know basic programming or web development?",
    [
      "No—learning AWS is very approachable when you break it down into core building blocks rather than trying to memorize all 200+ services at once. If you understand basic networking (IP addresses, HTTP/HTTPS, ports) and how a web app runs locally, you already have the foundation needed to master VPC, IAM, S3, and EC2 within a few weeks of hands-on practice.",
    ],
  ],
  [
    "How do I get started with learning AWS, and what is the ideal step-by-step learning path?",
    [
      "Follow a structured 4-stage roadmap:",
      "Stage 1 (Foundations): Master core services—IAM, VPC, EC2, S3, and RDS—using free digital courses on AWS Skill Builder and AWS Educate.",
      "Stage 2 (Gamified Practice): Build real architectural muscle memory through AWS Cloud Quest (Cloud Practitioner role) and AWS Builder Labs.",
      "Stage 3 (Intermediate Architecture & Automation): Move beyond manual console clicks to AWS CLI, Infrastructure as Code (Terraform / AWS CloudFormation), serverless (AWS Lambda + API Gateway), and container orchestration (Amazon ECS / EKS).",
      "Stage 4 (Validation): Earn the AWS Certified Cloud Practitioner credential first, then advance to AWS Certified Solutions Architect – Associate.",
    ],
  ],
  [
    "How can I practice AWS hands-on without risking unexpected cloud bills?",
    [
      "Always select the AWS Free Plan during signup, enable Multi-Factor Authentication (MFA) on your root account, and set up a Zero-Spend Budget Alert in AWS Billing and Cost Management. Additionally, develop the habit of terminating EC2 instances, deleting unattached EBS volumes, and emptying S3 buckets immediately after finishing your lab sessions.",
    ],
  ],
  [
    "What is the difference between deploying a React app on Amazon S3 versus Amazon EC2?",
    [
      "Since a compiled React app (npm run build) consists of static HTML, CSS, and JavaScript files, Amazon S3 (often paired with Amazon CloudFront) is the most cost-effective, serverless, and infinitely scalable hosting choice. Deploying on Amazon EC2 gives you full operating-system control (via Nginx or Apache), which becomes essential when you also run custom backend APIs, WebSockets, or server-side middleware alongside your frontend.",
    ],
  ],
  [
    "When should I transition from using the AWS Management Console to AWS CLI or Terraform?",
    [
      "The AWS Management Console is ideal for learning how services connect visually. Once you start building multi-tier projects or working in teams, transition to the AWS CLI for repeatable scripting and Terraform or AWS CloudFormation (Infrastructure as Code) so you can spin up—and tear down—entire VPC, IAM, S3, and EC2 environments with a single command.",
    ],
  ],
  [
    "How can students stay involved with AWS communities and build a standout cloud portfolio?",
    [
      "Create a free AWS Builder ID to publish architecture write-ups on AWS Builder Center, participate in AWS Student Builder Groups and campus hackathons, document every lab architecture diagram on GitHub and LinkedIn, and contribute to open-source cloud or DevOps repositories.",
    ],
  ],
];

export const CONTACT = {
  title: "Get in Touch with Organizers",
  sub: "Have questions about today’s labs, AWS account setup, or upcoming cloud sessions? Reach out to the organizing teams directly.",
  cards: [
    {
      tag: "Host Institution Organisers — PESCE Mandya",
      rows: [
        ["Organizing Body", "PESCE (PES College of Engineering), Mandya — Student & Faculty Coordinators"],
        ["Venue Location", "Seminar Hall, PESCE Mandya"],
      ],
    },
    {
      tag: "Technical Community Partner — AWS Student Builder Group DBIT",
      rows: [
        ["Organizing Body", "AWS Student Builder Group — Don Bosco Institute of Technology (DBIT), Bengaluru"],
        ["Email", "aws.sbg@dbit.co.in"],
      ],
    },
  ],
};

export const FOOTER = {
  aboutTitle: "AWS Student Builder Group DBIT",
  about:
    "An official student-led cloud community at Don Bosco Institute of Technology (DBIT), Bengaluru, empowering aspiring engineers to learn, build, and innovate on Amazon Web Services through hands-on workshops, architecture jams, peer mentorship, and real-world cloud deployments.",
  nav: [
    ["What is AWS", "aws"],
    ["Core Services (VPC • IAM • S3 • EC2)", "services"],
    ["Workshop Schedule", "schedule"],
    ["Everything You Need to Know (FAQs)", "faq"],
    ["Contact Organizers", "contact"],
  ],
  social: [
    ["Website", "https://awsevents.dbit.edu.in/"],
    ["LinkedIn", "https://www.linkedin.com/company/aws-sbg-dbit/"],
    ["Instagram", "https://www.instagram.com/awssbg_dbit/"],
    ["X (Twitter)", "https://x.com/awssbg_dbit"],
    ["WhatsApp Channel", "https://whatsapp.com/channel/0029Vb76rEYATRSlFR1mOg2X"],
    ["Meetup", "https://www.meetup.com/aws-sbg-at-don-bosco-institute-of-technology-bangalore/"],
    ["AWS Builder Center", "https://builder.aws.com"],
  ],

  copyright:
    "© 2026 AWS Student Builder Group DBIT in association with PESCE Mandya Organisers. Built & Deployed Live on Amazon Web Services (ap-south-1).",
};
