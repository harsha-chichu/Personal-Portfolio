// ── Type Definitions ──

export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  bio: string[];
  email: string;
  location: string;
  avatar: string;
  resume: string;
  stats: { label: string; value: number; suffix: string }[];
  socials: SocialLink[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface Skill {
  name: string;
  level: number;
  icon: string;
  category: "languages" | "frameworks" | "ml" | "tools";
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  live?: string;
  featured: boolean;
}

export interface Publication {
  id: string;
  title: string;
  authors: string[];
  conference: string;
  year: number;
  abstract: string;
  doi?: string;
  pdf?: string;
  citations?: number;
}

export interface Achievement {
  id: string;
  title: string;
  organization: string;
  date: string;
  description: string;
  icon: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  type: "full-time" | "internship" | "freelance";
  startDate: string;
  endDate: string | "Present";
  description: string;
  highlights: string[];
  techStack: string[];
}

export interface NavLink {
  label: string;
  href: string;
}

// ── Data ──

export const personalInfo: PersonalInfo = {
  name: "Harshavardhan Sunnam",
  title: "AI Engineer & Freelancer",
  tagline: "Building intelligent systems that push the boundaries of what's possible",
  bio: [
    "AI/ML Engineer with 1+ year of hands-on experience building, deploying, and evaluating machine learning and LLM-based systems. Currently developing LangGraph-based agentic AI systems and RAG applications using LangChain and vector databases. I've worked on end-to-end ML pipelines, published research in healthcare AI, and genuinely enjoy freelancing — building solutions that are both innovative and practical for startups and enterprises.",
  ],
  email: "harshachinnu129@gmail.com",
  location: "Bangalore, India",
  avatar: "https://easydrawingguides.com/wp-content/uploads/2019/03/how-to-draw-katsuki-bakugou-from-my-hero-academia-featured-image-1200-735x1026.png",
  resume: "file:///C:/Users/Dell/Downloads/Harshavardhan_SDE_Resume.pdf",
  stats: [
    { label: "Years Experience", value: 1, suffix: "+" },
    { label: "Projects Completed", value: 10, suffix: "+" },
    { label: "Happy Clients", value: 5, suffix: "+" },
    { label: "Research Papers", value: 1, suffix: "" },
  ],
  socials: [
    { platform: "GitHub", url: "https://github.com/harsha-chichu", icon: "github" },
    { platform: "LinkedIn", url: "https://www.linkedin.com/in/harsha-vardhan12/", icon: "linkedin" },
  ],
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Research", href: "#research" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Services", href: "#services" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "#contact" },
];

export const skills: Skill[] = [
  // Languages
  { name: "Python", level: 95, icon: "python", category: "languages" },
  { name: "JavaScript", level: 80, icon: "javascript", category: "languages" },
  { name: "C++", level: 70, icon: "cplusplus", category: "languages" },
  { name: "SQL", level: 78, icon: "postgresql", category: "languages" },
  // Frameworks & Libraries
  { name: "PyTorch", level: 88, icon: "pytorch", category: "frameworks" },
  { name: "LangChain", level: 90, icon: "langchain", category: "frameworks" },
  { name: "LangGraph", level: 87, icon: "langgraph", category: "frameworks" },
  { name: "FastAPI", level: 85, icon: "fastapi", category: "frameworks" },
  { name: "Next.js", level: 80, icon: "nextdotjs", category: "frameworks" },
  // AI & Machine Learning
  { name: "RAG Systems", level: 90, icon: "brain", category: "ml" },
  { name: "Deep Learning", level: 88, icon: "pytorch", category: "ml" },
  { name: "Computer Vision", level: 85, icon: "opencv", category: "ml" },
  { name: "Agentic AI", level: 87, icon: "brain", category: "ml" },
  // DevOps & Tools
  { name: "Git & GitHub", level: 88, icon: "git", category: "tools" },
  { name: "Docker", level: 75, icon: "docker", category: "tools" },
  { name: "AWS", level: 72, icon: "aws", category: "tools" },
  { name: "N8N", level: 70, icon: "n8n", category: "tools" },
];

export const projects: Project[] = [
  {
    id: "1",
    title: "SmartHire – AI Hiring & Interview Automation",
    description:
      "LangGraph-based multi-agent system to automate job description generation and post-interview candidate reports. Features structured planning, execution, validation stages, and end-to-end observability with Langfuse.",
    image: "/project1.png",
    tags: ["LangGraph", "LangChain", "Langfuse", "DeepAgents", "AWS", "Python"],
    featured: true,
  },
  {
    id: "2",
    title: "Artist Portfolio & Booking Platform",
    description:
      "Full-stack portfolio and booking platform with real-time booking workflows, custom admin dashboard, and a GenAI-powered chatbot using LangChain with RAG pipelines and vector databases.",
    image: "/project1.png",
    tags: ["Next.js", "TailwindCSS", "Supabase", "LangChain", "RAG"],
    live: "https://1klick2digiworld.com/",
    featured: true,
  },
  {
    id: "3",
    title: "Accused Detection System",
    description:
      "Real-time accused detection system using OpenCV on live video feeds, enabling instant identification and alerting. Reduced manual search effort by ~80% and improved situational responsiveness.",
    image: "/project1.png",
    tags: ["OpenCV", "YOLO", "Python", "Computer Vision"],
    featured: false,
  },
  {
    id: "4",
    title: "Employee Burnout Prediction",
    description:
      "Machine learning model to predict employee burn rate achieving 93% accuracy on validation data. Processed 10,000+ HR records with feature engineering and hyperparameter-tuned scikit-learn models.",
    image: "/project1.png",
    tags: ["Python", "Scikit-learn", "Pandas", "NumPy"],
    featured: false,
  },
];

export const publications: Publication[] = [
  {
    id: "1",
    title: "Automated White Blood Cell Subtype Classification",
    authors: ["Harsha Vardhan Sunnam", "P. Govinda Krishna Gauranga", "Manognya Lokesh Reddy", "P. N. V. Vinoothna", "Nallakukala Dilli Babu", "Ayush Singh", "Pranav Sankar V P", "Shivika Singh", "Samanthu Abhay Reddy"],
    conference: "International Journal of All Research Education and Scientific Methods (IJARESM)",
    year: 2025,
    abstract:
      "We propose an automated deep learning framework for WBC subtype classification that eliminates manual microscopic examination bottlenecks. Our approach leverages morphological feature extraction across four major subtypes, achieving high-throughput, pathologist-level identification from peripheral blood smear images.",
    doi: "https://www.ijaresm.com/automated-white-blood-cell-subtype-classification-a-robust-deep-learning-approach-for-precision-diagnostics",
    pdf: "https://www.ijaresm.com/uploaded_files/document_file/Sunnam_Harsha_VardhanNptp.pdf",
    // citations: 45,
  },
  // {
  //   id: "2",
  //   title: "Self-Supervised Visual Representation Learning with Contrastive Predictive Coding",
  //   authors: ["Alex Johnson", "Maria Garcia"],
  //   conference: "IEEE Conference on Computer Vision and Pattern Recognition (CVPR)",
  //   year: 2023,
  //   abstract:
  //     "This paper presents a self-supervised framework for learning visual representations without labeled data. By combining contrastive predictive coding with data augmentation strategies, we achieve state-of-the-art performance on downstream tasks including image classification and object detection.",
  //   doi: "https://doi.org/10.xxxx/xxxxx",
  //   citations: 78,
  // },
];

export const achievements: Achievement[] = [
  {
    id: "1",
    title: "Grand Finale Winner – CODE-FOR-INDIA Hackathon",
    organization: "CODE-FOR-INDIA",
    date: "2023",
    description:
      "Led a team of 5 members in the 2023 CODE-FOR-INDIA 48-Hour Hackathon, winning the Grand Finale.",
    icon: "trophy",
  },
  {
    id: "2",
    title: "Published Research in Healthcare AI",
    organization: "IJARESM",
    date: "2025",
    description:
      "Published research on Automated White Blood Cell Subtype Classification using deep learning, achieving pathologist-level accuracy on peripheral blood smear images.",
    icon: "award",
  },
  {
    id: "3",
    title: "25+ Security Vulnerabilities Discovered",
    organization: "Supraja Technologies",
    date: "2023",
    description:
      "Discovered and validated 25+ vulnerabilities across 6 applications including XSS, IDOR, SQL injection, and CSRF during web application penetration testing, reducing risk exposure by ~60%.",
    icon: "medal",
  },
  {
    id: "4",
    title: "93% Accuracy – Employee Burnout Prediction",
    organization: "Edunet Foundation (IBM SkillsBuild)",
    date: "2023",
    description:
      "Built an ML model achieving 93% accuracy on 10,000+ HR records for predicting employee burnout, supporting data-driven HR decision-making.",
    icon: "star",
  },
];

export const services: Service[] = [
  {
    id: "1",
    title: "Agentic AI & LLM Systems",
    description:
      "Building production-grade agentic AI systems using LangGraph and LangChain — from multi-agent orchestration to RAG-powered chatbots and document Q&A pipelines.",
    icon: "brain",
    features: [
      "LangGraph multi-agent workflows",
      "RAG pipelines with vector databases",
      "LLM evaluation & observability (Langfuse)",
      "AWS Bedrock deployment",
    ],
  },
  {
    id: "2",
    title: "ML Model Development",
    description:
      "End-to-end machine learning pipelines — data preprocessing, feature engineering, model training, hyperparameter tuning, and evaluation for real-world problems.",
    icon: "code",
    features: [
      "Data pipeline & feature engineering",
      "Model training & optimization",
      "Computer vision (YOLO, OpenCV)",
      "Performance benchmarking",
    ],
  },
  {
    id: "3",
    title: "Full-Stack AI Applications",
    description:
      "Complete AI-powered web applications with Next.js frontends, FastAPI backends, and integrated GenAI features — delivered production-ready.",
    icon: "layers",
    features: [
      "Next.js / React frontends",
      "FastAPI backend services",
      "GenAI chatbot integration",
      "Supabase / PostgreSQL databases",
    ],
  },
];

export const experience: Experience[] = [
  {
    id: "1",
    role: "AI Engineer",
    company: "krtrimaIQ Cognitive Solutions",
    type: "full-time",
    startDate: "Nov 2025",
    endDate: "Present",
    description:
      "Developing and deploying LangGraph-based agentic AI systems for the SmartHire platform — an AI hiring and interview automation product. Progressed from AI Intern (Nov 2025) to AI Engineer (Jan 2026).",
    highlights: [
      "Designed multiple LLM-based agents to automate job description generation and post-interview candidate report creation",
      "Orchestrated agent workflows using LangGraph with structured planning, execution, and validation stages",
      "Implemented end-to-end tracing and observability using Langfuse for prompt-level debugging and performance analysis",
      "Integrated a dedicated evaluation agent to assess response quality, consistency, and relevance across interview outcomes",
    ],
    techStack: ["Python", "LangChain", "LangGraph", "Langfuse", "DeepAgents", "AWS"],
  },
  {
    id: "2",
    role: "GenAI & Full-Stack Freelancer",
    company: "Freelance",
    type: "freelance",
    startDate: "Dec 2024",
    endDate: "Sep 2025",
    description:
      "Designed and delivered a full-stack portfolio and booking platform for an artist, including a GenAI-powered chatbot with RAG pipelines and vector databases.",
    highlights: [
      "Built real-time booking workflows with a custom admin dashboard enabling 80+ successful booking interactions",
      "Architected a GenAI-powered chatbot using LangChain for natural language interactions",
      "Integrated LLMs, RAG pipelines, and vector databases for accurate, context-aware query handling",
    ],
    techStack: ["Next.js", "TailwindCSS", "Supabase", "LangChain", "RAG"],
  },
  {
    id: "3",
    role: "Research Intern – Nanoindentation AI/ML",
    company: "Academic Collaboration",
    type: "internship",
    startDate: "Mar 2023",
    endDate: "Nov 2023",
    description:
      "Applied machine learning to model and predict mechanical behavior from nanoindentation tests on laser-treated materials, bridging materials science and AI.",
    highlights: [
      "Built end-to-end data pipelines for preprocessing and feature engineering on 80,000+ nanoindentation tests",
      "Trained regression models achieving >85% R² on unseen experimental data",
      "Enabled cross-comparison and insight generation across 3+ laser processing configurations",
    ],
    techStack: ["Python", "PyTorch", "Pandas", "NumPy", "Scikit-learn"],
  },
  {
    id: "4",
    role: "AI/ML Intern",
    company: "Edunet Foundation (IBM SkillsBuild)",
    type: "internship",
    startDate: "Jun 2023",
    endDate: "Jul 2023",
    description:
      "Developed a machine learning model to predict employee burnout rate, processing and analyzing HR records with feature engineering and model tuning.",
    highlights: [
      "Achieved 93% accuracy on validation data for employee burnout prediction",
      "Processed and analyzed 10,000+ HR records handling missing values, outliers, and categorical encoding",
      "Engineered domain-relevant features (workload, tenure, performance indicators) to improve model signal quality",
    ],
    techStack: ["Python", "Pandas", "NumPy", "Scikit-learn"],
  },
  {
    id: "5",
    role: "Web Developer Intern",
    company: "PHN Technologies",
    type: "internship",
    startDate: "Apr 2023",
    endDate: "Jun 2023",
    description:
      "Developed and maintained responsive web applications, translating client requirements into reusable UI components and implementing SEO optimizations.",
    highlights: [
      "Built responsive web applications ensuring cross-browser and cross-device compatibility",
      "Implemented SEO and page-load optimizations contributing to better discoverability and user engagement",
    ],
    techStack: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    id: "6",
    role: "Cybersecurity Intern",
    company: "Supraja Technologies",
    type: "internship",
    startDate: "Feb 2023",
    endDate: "Jun 2023",
    description:
      "Conducted web application penetration testing using Burp Suite and OWASP Top 10–aligned risk assessment, working directly with developers to verify and patch vulnerabilities.",
    highlights: [
      "Discovered and validated 25+ vulnerabilities across 6 applications including XSS, IDOR, SQL injection, and CSRF",
      "Reduced application risk exposure by ~60% through exploit reproduction, fix verification, and retesting",
      "Delivered secure coding training covering input validation, authentication hardening, and session management",
    ],
    techStack: ["Burp Suite", "Postman", "Python"],
  },
];

export const skillCategories: Record<string, string> = {
  languages: "Languages",
  frameworks: "Frameworks & Libraries",
  ml: "AI & Machine Learning",
  tools: "DevOps & Tools",
};
