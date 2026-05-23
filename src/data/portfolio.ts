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
  { name: "SQL", level: 80, icon: "postgresql", category: "languages" },
  { name: "JavaScript", level: 78, icon: "javascript", category: "languages" },
  // Frameworks & Libraries
  { name: "LangChain", level: 92, icon: "langchain", category: "frameworks" },
  { name: "LangGraph", level: 88, icon: "langgraph", category: "frameworks" },
  { name: "PyTorch", level: 88, icon: "pytorch", category: "frameworks" },
  { name: "FastAPI", level: 85, icon: "fastapi", category: "frameworks" },
  { name: "Next.js", level: 80, icon: "nextdotjs", category: "frameworks" },
  // AI & Machine Learning
  { name: "RAG Systems", level: 92, icon: "brain", category: "ml" },
  { name: "Agentic AI", level: 88, icon: "brain", category: "ml" },
  { name: "Deep Learning", level: 86, icon: "pytorch", category: "ml" },
  { name: "Computer Vision", level: 82, icon: "opencv", category: "ml" },
  // DevOps & Tools
  { name: "AWS", level: 80, icon: "aws", category: "tools" },
  { name: "Kubernetes", level: 72, icon: "kubernetes", category: "tools" },
  { name: "Langfuse", level: 85, icon: "langfuse", category: "tools" },
  { name: "Git", level: 90, icon: "git", category: "tools" },
];

export const projects: Project[] = [
  {
    id: "1",
    title: "SmartHire – AI Hiring & Interview Automation",
    description:
      "LangGraph multi-agent platform orchestrating 6 specialized LLM agents for JD generation, Q&A, coding questions, shortlisting, interview evaluation, and report generation. Uses AWS Bedrock Guardrails and Langfuse for observability.",
    image: "/project1.png",
    tags: ["LangGraph", "LangChain", "AWS Bedrock", "Langfuse", "Python"],
    featured: true,
  },
  {
    id: "2",
    title: "ACORD Document Extraction Pipeline",
    description:
      "Multi-stage LOB identification and extraction pipeline using PageIndex retrieval and regex pattern matching. Integrates Gemini Vision API and GPT-4o with PyMuPDF and Camelot, deployed on Kubernetes for US-based insurance brokers.",
    image: "/project1.png",
    tags: ["PageIndex", "Gemini Vision", "GPT-4o", "Kubernetes", "Python"],
    featured: true,
  },
  {
    id: "3",
    title: "Artist Portfolio & Booking Platform",
    description:
      "Full-stack portfolio and booking platform with real-time booking workflows, custom admin dashboard enabling 80+ booking interactions, and a GenAI chatbot built with LangChain, RAG, and vector databases.",
    image: "/project1.png",
    tags: ["Next.js", "TailwindCSS", "Supabase", "LangChain", "RAG"],
    live: "https://1klick2digiworld.com/",
    featured: false,
  },
  {
    id: "4",
    title: "Movie Story Generator",
    description:
      "AI-powered React app that transforms a single user-provided plot into a complete movie storyline, suggests ideal cast members, and generates a custom movie poster using AI.",
    image: "/project1.png",
    tags: ["React", "JavaScript", "AI", "Generative AI"],
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
    title: "1st Place – Shark Tank 2.0 Business Competition",
    organization: "MGIT",
    date: "2023",
    description:
      "Secured first place in the Shark Tank 2.0 Business Idea Competition for presenting an innovative and viable startup model.",
    icon: "award",
  },
  {
    id: "3",
    title: "Co-Student Convenor – MGIT Coding Club",
    organization: "Mahatma Gandhi Institute of Technology",
    date: "2023",
    description:
      "Served as Co-Student Convenor of the MGIT Coding Club, organizing multiple campus-wide coding events and fostering a developer community.",
    icon: "star",
  },
  {
    id: "4",
    title: "Tech Expo Organizer – 300+ Participants",
    organization: "MGIT",
    date: "2023",
    description:
      "Successfully planned and executed the \"Tech Expo\" Technical event, attracting 300+ participants and coordinating end-to-end event logistics.",
    icon: "medal",
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
    role: "AI Engineer – Team Lead",
    company: "krtrimaIQ Cognitive Solutions",
    type: "full-time",
    startDate: "Nov 2025",
    endDate: "Mar 2026",
    description:
      "Led AI engineering across two production platforms: an end-to-end ACORD document extraction pipeline for a US insurance broker (Client: Exdion), and SmartHire — a LangGraph multi-agent hiring automation platform.",
    highlights: [
      "Led team to build a multi-stage LOB identification pipeline using PageIndex retrieval and regex matching; integrated Gemini Vision API and GPT-4o with PyMuPDF and Camelot to extract structured fields from dense ACORD forms",
      "Deployed the multi-LLM pipeline on Kubernetes, orchestrating Gemini and GPT-4o microservices for structured ACORD extraction delivered to a downstream AI chatbot",
      "Architected SmartHire with 6 specialized LangGraph agents — JD Generation, Q&A, Coding Questions, Shortlisting, Interview Evaluation, and Report Generation — automating the end-to-end hiring pipeline",
      "Implemented AWS Bedrock Guardrails and Bedrock Prompt Manager for safety, relevance, and version-controlled prompt delivery across all agents",
      "Integrated Langfuse for end-to-end observability and prompt-level monitoring across the agentic pipeline",
    ],
    techStack: ["Python", "LangGraph", "LangChain", "PageIndex", "AWS Bedrock", "Langfuse", "Kubernetes", "Gemini", "GPT-4o"],
  },
  {
    id: "2",
    role: "Freelance AI/ML Engineer",
    company: "Private Client",
    type: "freelance",
    startDate: "Dec 2024",
    endDate: "Present",
    description:
      "Designing and delivering full-stack AI-powered applications for private clients, combining Next.js frontends with GenAI backends.",
    highlights: [
      "Designed and developed a full-stack portfolio and booking platform for an artist using Next.js, TailwindCSS, and Supabase — enabling 80+ booking interactions with real-time updates and a custom admin dashboard",
      "Developing a GenAI chatbot with LangChain leveraging LLMs, RAG, and vector databases for natural language queries over structured and unstructured data",
    ],
    techStack: ["Next.js", "TailwindCSS", "Supabase", "LangChain", "RAG", "Python"],
  },
  {
    id: "3",
    role: "Research Intern – Nanoindentation AI/ML",
    company: "Academic Collaboration",
    type: "internship",
    startDate: "Mar 2023",
    endDate: "Nov 2023",
    description:
      "Applied machine learning to predict mechanical behavior from 80,000+ nanoindentation tests on laser-treated materials, bridging materials science and AI.",
    highlights: [
      "Designed and implemented robust data pipelines for cleaning, feature extraction, and model training using Python/PyTorch",
      "Achieved >85% R² score in regression tasks on unseen experimental data",
      "Strengthened interdisciplinary research across 3+ laser processing configurations through predictive modeling and data-driven analysis",
    ],
    techStack: ["Python", "PyTorch", "Pandas", "NumPy", "Scikit-learn"],
  },
];

export const skillCategories: Record<string, string> = {
  languages: "Languages",
  frameworks: "Frameworks & Libraries",
  ml: "AI & Machine Learning",
  tools: "DevOps & Tools",
};
