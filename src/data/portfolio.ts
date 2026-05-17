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
  name: "Harsha vardhan",
  title: "AI Engineer & Freelancer",
  tagline: "Building intelligent systems that push the boundaries of what's possible",
  bio: [
    "I'm an AI developer who loves what I do - exploring AI and ML, building intelligent agents, RAG-based bots, and automation systems that actually make a difference. With a solid foundation in mathematics and computer science, I have a published paper in deep learning, and freelancing is something I truly enjoy, I focus on creating solutions that are both innovative and practical. working closely with startups and enterprises to bring their AI ideas to life.",
    // "My research has been published in top-tier conferences, and I actively contribute to the open-source AI community. As a freelancer, I help startups and enterprises leverage AI to transform their products and workflows.",
  ],
  email: "harshachinnu129@gmail.com",
  location: "Banglore, India",
  avatar: "https://easydrawingguides.com/wp-content/uploads/2019/03/how-to-draw-katsuki-bakugou-from-my-hero-academia-featured-image-1200-735x1026.png",
  resume: "file:///C:/Users/Dell/Downloads/Harshavardhan_SDE_Resume.pdf",
  stats: [
    { label: "Years Experience", value: 2, suffix: "+" },
    { label: "Projects Completed", value: 30, suffix: "+" },
    { label: "Happy Clients", value: 20, suffix: "+" },
    { label: "Research Papers", value: 1, suffix: "" },
  ],
  socials: [
    { platform: "GitHub", url: "https://github.com/harsha-chichu", icon: "github" },
    { platform: "LinkedIn", url: "https://www.linkedin.com/in/harsha-vardhan12/", icon: "linkedin" },
    // { platform: "Instagram", url: "https://instagram.com", icon: "instagram" },
    // { platform: "Google Scholar", url: "https://scholar.google.com", icon: "scholar" },
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
  { name: "TypeScript", level: 85, icon: "typescript", category: "languages" },
  { name: "C++", level: 70, icon: "cplusplus", category: "languages" },
  { name: "SQL", level: 80, icon: "postgresql", category: "languages" },
  // Frameworks
  { name: "PyTorch", level: 92, icon: "pytorch", category: "frameworks" },
  { name: "LangGraph", level: 85, icon: "langgraph", category: "frameworks" },
  { name: "Next.js", level: 80, icon: "nextdotjs", category: "frameworks" },
  { name: "FastAPI", level: 88, icon: "fastapi", category: "frameworks" },
  // ML/AI
  { name: "Deep Learning", level: 93, icon: "brain", category: "ml" },
  { name: "Computer Vision", level: 90, icon: "opencv", category: "ml" },
  { name: "NLP", level: 85, icon: "huggingface", category: "ml" },
  { name: "Reinforcement Learning", level: 75, icon: "rl", category: "ml" },
  // Tools
  { name: "Docker", level: 82, icon: "docker", category: "tools" },
  { name: "AWS", level: 78, icon: "aws", category: "tools" },
  { name: "Git", level: 90, icon: "git", category: "tools" },
  { name: "MLflow", level: 80, icon: "mlflow", category: "tools" },
];

export const projects: Project[] = [
  {
    id: "1",
    title: "Neural Style Transfer Engine",
    description:
      "A real-time neural style transfer application using deep convolutional neural networks. Supports multiple artistic styles with GPU-accelerated inference.",
    image: "https://easydrawingguides.com/wp-content/uploads/2019/03/how-to-draw-katsuki-bakugou-from-my-hero-academia-featured-image-1200-735x1026.png",
    tags: ["PyTorch", "CUDA", "FastAPI", "React"],
    // github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
  {
    id: "2",
    title: "AI-Powered Document Analyzer",
    description:
      "An intelligent document processing pipeline using transformer models for extraction, classification, and summarization of complex documents.",
    image: "public/project1.png",
    tags: ["Transformers", "spaCy", "Python", "AWS"],
    // github: "https://github.com",
    live: "https://1klick2digiworld.com/",
    featured: true,
  },
  {
    id: "3",
    title: "Autonomous Drone Navigation",
    description:
      "Reinforcement learning system for autonomous drone navigation in complex 3D environments with obstacle avoidance and path optimization.",
    image: "/images/projects/project-3.png",
    tags: ["RL", "PyTorch", "ROS", "C++"],
    // github: "https://github.com",
    live: "https://vedantagranite.com/",
    featured: false,
  },
  {
    id: "4",
    title: "Sentiment Analysis Dashboard",
    description:
      "Real-time social media sentiment analysis platform with interactive visualizations and trend detection powered by fine-tuned BERT models.",
    image: "/images/projects/project-4.png",
    tags: ["BERT", "Next.js", "D3.js", "PostgreSQL"],
    // github: "https://github.com",
    live: "https://vedantaexport.com/",
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
    title: "Grand Finale Winner - CODE-FOR-INDIA Hackathon",
    organization: "CODE-FOR-INDIA",
    date: "2023",
    description:
      "Led a team of 5 members in the 2023 CODE-FOR-INDIA 48-Hour Hackathon, winning the Grand Finale.",
    icon: "trophy",
  },
  {
    id: "2",
    title: "Google AI Research Grant",
    organization: "Google Research",
    date: "2023",
    description:
      "Awarded a $50,000 research grant to further develop efficient deep learning architectures for edge computing.",
    icon: "award",
  },
  {
    id: "3",
    title: "Kaggle Grandmaster",
    organization: "Kaggle",
    date: "2023",
    description:
      "Achieved Grandmaster status on Kaggle with multiple gold medals in computer vision and NLP competitions.",
    icon: "medal",
  },
  {
    id: "4",
    title: "Open Source Contributor Award",
    organization: "PyTorch Foundation",
    date: "2022",
    description:
      "Recognized for significant contributions to the PyTorch ecosystem, including optimized training utilities and model architectures.",
    icon: "star",
  },
];

export const services: Service[] = [
  {
    id: "1",
    title: "AI/ML Consulting",
    description:
      "Strategic guidance on integrating AI into your business processes. From feasibility analysis to architecture design and implementation roadmaps.",
    icon: "brain",
    features: [
      "AI feasibility assessment",
      "Architecture design",
      "Technology stack selection",
      "ROI analysis & reporting",
    ],
  },
  {
    id: "2",
    title: "Custom Model Development",
    description:
      "End-to-end development of custom machine learning models tailored to your specific use case, from data preparation to deployment.",
    icon: "code",
    features: [
      "Data pipeline development",
      "Model training & optimization",
      "Performance benchmarking",
      "Production deployment",
    ],
  },
  {
    id: "3",
    title: "Full-Stack AI Applications",
    description:
      "Building complete AI-powered web applications with modern tech stacks, from responsive frontends to scalable ML backends.",
    icon: "layers",
    features: [
      "Next.js / React frontends",
      "FastAPI / Node.js backends",
      "Cloud infrastructure (AWS/GCP)",
      "CI/CD & monitoring",
    ],
  },
];

export const experience: Experience[] = [
  {
    id: "1",
    role: "AI Engineer",
    company: "KrtrimaIQ",
    type: "full-time",
    startDate: "Jan 2025",
    endDate: "Present",
    description:
      "Working as a full-time AI Engineer building production-grade machine learning systems and deploying scalable AI solutions.",
    highlights: [
      "Designed and deployed end-to-end ML pipelines serving 1M+ daily predictions",
      "Led the development of a real-time NLP system for customer support automation",
      "Optimized model inference latency by 40% through quantization and caching strategies",
    ],
    techStack: ["PyTorch", "AWS", "FastAPI", "Docker", "Kubernetes"],
  },
  {
    id: "2",
    role: "Machine Learning Intern",
    company: "DataVision Labs",
    type: "internship",
    startDate: "Jun 2023",
    endDate: "Dec 2023",
    description:
      "Interned with the computer vision team, contributing to object detection and image segmentation projects for autonomous systems.",
    highlights: [
      "Built a custom object detection model achieving 92% mAP on proprietary dataset",
      "Developed data augmentation pipelines that improved model robustness by 25%",
      "Co-authored internal research paper on efficient attention mechanisms",
    ],
    techStack: ["PyTorch", "OpenCV", "Python", "TensorFlow", "GCP"],
  },
  {
    id: "3",
    role: "Research Intern",
    company: "University AI Lab",
    type: "internship",
    startDate: "Jan 2023",
    endDate: "May 2023",
    description:
      "Conducted research on self-supervised learning methods for visual representation learning under faculty supervision.",
    highlights: [
      "Implemented contrastive learning frameworks and benchmarked against baselines",
      "Published findings at CVPR 2023 as second author",
      "Presented research at two internal symposiums",
    ],
    techStack: ["PyTorch", "Weights & Biases", "Python", "LaTeX"],
  },
];

export const skillCategories: Record<string, string> = {
  languages: "Languages",
  frameworks: "Frameworks & Libraries",
  ml: "AI & Machine Learning",
  tools: "DevOps & Tools",
};
