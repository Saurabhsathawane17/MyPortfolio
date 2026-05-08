//skills section logos
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import colabLogo from './assets/tech_logo/colab-logo.png';
import jupyterLogo from './assets/tech_logo/jupyter-logo.png';

//education section logos
import sunflagLogo from './assets/education_logo/sunflag_img.jpg';
import springDaleLogo from './assets/education_logo/spring_dale_logo.jpg';
import ghrceLogo from './assets/education_logo/ghrce_logo.png';

//projects section logos
import movierecLogo from './assets/work_logo/movie_recommendation.jpg';
import cropPredLogo from './assets/work_logo/crop_prediction.jpg';
import CodeSenseLogo from './assets/work_logo/CodeSense.png';
import ScoreSightLogo from './assets/work_logo/ScoreSight.jpg';
import InvoiceRiskLogo from './assets/work_logo/InvoiceRiskAnalyzer.png';
import MultiAgentLogo from './assets/work_logo/MultiAgentResearch.png';
import PatientRiskLogo from './assets/work_logo/PatientRiskAssessment.png';
import ECommerceLogo from './assets/work_logo/E-Commerce.png'

//experience logos
import kshitijFoundLogo from './assets/work_logo/kshitij_foundation.jpg';
import Infosys_SpringboardLogo from './assets/work_logo/Infosys_Springboard.png';
import InternpeLogo from './assets/work_logo/Internpe.jpg';
import Low_LatencyLogo from './assets/work_logo/Low-Latency.jpg';

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Python', logo: pythonLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'colab', logo: colabLogo },
      { name: 'jupyter', logo: jupyterLogo }
    ],
  },
];


export const experiences = [
  {
    id: 0,
    img:Low_LatencyLogo,
    role: "AI Engineer Trainee",
    company: "Low-Latency Technologies Pvt. Ltd. Pune, Maharashtra",
    date: "1st Dec, 2025 - 15th May 2026",
    desc: "Worked as an AI Engineer Trainee on an end-to-end healthcare solution using Agentic AI and Machine Learning for Patient Risk Assessment and clinical decision support. Designed intelligent models using parameters like BMI, blood pressure, and lifestyle data, and integreated LLMs to generate clear, explainable insights. Built the complete pipeline from data preprocessing to real-time inference, developed Flask-based APIs, and created an interactive dashboard for visualizing risk scores and recommendations. Gained hands-on experience in building scalable, explainable, and user-centric AI systems.",
    skills: [
      "Python Programming",
      "Machine Learning",
      "Data Analytics",
      "Data Preprocessing",
      "Model Training & Evaluation",
      "Web Development",
      "Team Collaboration",
      "Problem-Solving",
      "Communication Skills",
      "Time Management",
      "Agentic AI",
      "LLM Integration & Prompt Engineering",
      "Explainable AI",
    ],
  },
  {
    id: 1,
    img:Infosys_SpringboardLogo,
    role: "AI ML Intern",
    company: "Infosys",
    date: "18th Sept, 2025 - 18th Oct 2025",
    desc: "Successfully completed the Infosys Springboard 6.0 internship with hands-on training in Python, Machine Learning, and data analytics. As part of the internship, developed an end-to-end EPL Football Analytics application – ScoreSight- Predicting EPL Points Tally, Top Scorer, and Assist Provider using Machine Learning techniques. The project included features such as live match updates, team stats, player performance analysis, standings, and an AI-powered chatbot powered by Gemini for football insights. Gained practical experience in data preprocessing, model training, and evaluation while working on real-world datasets. Collaborated with a team of interns to enhance the application's features and improve prediction accuracy. Presented the project to mentors and received positive feedback for innovation and technical skills demonstrated during the internship.",
    skills: [
      "Python Programming",
      "Machine Learning",
      "Data Analytics",
      "Data Preprocessing",
      "Model Training & Evaluation",
      "Web Development",
      "Team Collaboration",
      "Problem-Solving",
      "Communication Skills",
      "Time Management",
    ],
  },
  {
    id: 2,
    img:kshitijFoundLogo,
    role: "Marathi content Writer & Batch Team Leader",
    company: "Kshitij Foundation (NGO)",
    date: "10th Feb, 2025 - 28th May 2025",
    desc: "Kshitij Foundation is a non-profit organization dedicated to uplifting underprivileged communities through impactful initiatives in education, healthcare, skill development, and social awareness.In my dual role as a Marathi Content Writer and Team Leader, I am responsible for planning, coordinating, and implementing content-driven and community-focused activities. I create culturally relevant and impactful Marathi content to raise awareness and engage local communities effectively. As a Team Leader, I oversee and guide a batch of volunteers, ensuring smooth execution of initiatives on the ground and fostering collaboration to achieve the Foundation’s mission of real, positive social impact.",
    skills: [
      "Marathi Content Writing",
      "Creative Writing",
      "Team Leadership",
      "Community Engagement",
      "Activity Planning",
      "Volunteer Coordination",
      "Communication Skills",
      "Empathy & Social Awareness",
      "MS Office",
      "Time Management",
    ],
  },
  {
    id: 3,
    img:InternpeLogo,
    role: "AI ML Intern",
    company: "Internpe",
    date: "15th May, 2024 - 15th June, 2024",
    desc: "Completed a 4-week remote internship focused on AI and Machine Learning. Worked on 4 task-based ML projects, gaining hands-on experience in data preprocessing, model development, evaluation, and visualization using Python and popular ML libraries.",
    skills: [
      "Python Programming",
      "Data Preprocessing",
      "Data Visualization",
      "Data Analysis",
    ],
  },
];

//projects section
export const projects = [
  {
    id: 0,
    title: "Movie Recommendation System using Machine Learning",
    description:
    "Developed a personalized movie recommendation system that suggests relevant films based on user preferences and movie features. The system uses both content-based filtering and collaborative filtering to improve recommendation accuracy and user engagement.",
    image: movierecLogo,
    tags: ["Python","Flask","JupyterNotebook","Pycharm","Machine Learning"],
    github: "https://github.com/Saurabhsathawane17/Movie-Recommendation-System-using-Machine-Learning.git",
    webapp: "",
  },
  {
    id: 1,
    title: "Crop Prediction System using Machine Learning",
    description:
    "Built a machine learning-based system to predict the most suitable crop for cultivation based on soil nutrients (NPK), pH, rainfall, temperature, and humidity. Trained and tested multiple algorithms to identify the most accurate model, aiding farmers in decision-making for optimized yield.",
    image: cropPredLogo,
    tags: ["HTML","CSS","Python","Machine Learning","Flask"],
    github: "https://github.com/Saurabhsathawane17/crop-prediction-system.git",
    webapp: "",
  },
  {
    id: 2,
    title: "CODESENSE – AI-Powered Code Reviewer",
    description: "CODESENSE is an AI-powered code review system built with the MERN stack and integrated with Google Generative AI (Gemini API). The application allows users to submit their code for review. The AI analyzes it, identifies errors, and suggests improvements. It also provides syntax highlighting, Markdown formatting, and real-time feedback to enhance the developer experience.",
    image: CodeSenseLogo,
    tags: ["MERN Stack","Node.js","Express.js","React.js","MongoDB","Google Generative AI"],
    github: "https://github.com/Saurabhsathawane17/CODESENSE-AI-Powered-Code-Reviewer.git",
    webapp: "",
  },
  {
    id: 3,
    title: "ScoreSight - Predicting EPL Points Tally & Top Scorer using Machine Learning",
    description: "ScoreSight is an advanced football analytics platform designed to provide real-time match insights, team statistics, fixtures, standings, player information, and AI-powered analysis. The platform integrates various free football APIs and incorporates AI/ML components for enhanced user experience.",
    image: ScoreSightLogo,
    tags: ["Python","Flask","Machine Learning","APIs","AI Chatbot"],
    github: "https://github.com/Saurabhsathawane17/ScoreSight-Predicting-EPL-Points-Tally-Top-Scorer.git",
    webapp: "",
  },
  {
    id: 4,
    title: "Vendor Invoice Intelligent System using Machine Learning",
    description: "Developed an AI-powered invoice intelligence platform for freight cost prediction and invoice risk analysis using Machine Learning algorithms. Integrated SHAP-based Explainable AI (XAI) for transparent predictions and built an interactive Streamlit dashboard for real-time analytics, anomaly detection, and business insights.",
    image: InvoiceRiskLogo,
    tags: ["Python","Flask","Machine Learning","Streamlit","SHAP","Explainable AI","Data Visualization","Data Analytics"],
    github: "https://github.com/Saurabhsathawane17/vendor-invoice-intelligence-system.git",
    webapp: "",
  },
  {
    id: 5,
    title: "Multi-Agent Research System",
    description: "Built an AI-powered multi-agent research system capable of autonomous web research, information retrieval, intelligent summarization, and task orchestration using Large Language Models (LLMs) and agent-based workflows. Designed the platform to automate complex research tasks, generate contextual insights, and improve decision-making efficiency through collaborative AI agents.",
    image: MultiAgentLogo,
    tags: ["Python","Flask","Machine Learning","Streamlit","SHAP","Explainable AI","Data Visualization","Data Analytics"],
    github: "https://github.com/Saurabhsathawane17/multi-agent-research-system.git",
    webapp: "",
  },
  {
    id: 6,
    title: "Patient AI Risk Prediction & Assessment using Agentic AI",
    description: "Developed an intelligent healthcare risk prediction platform leveraging Agentic AI, Machine Learning, and autonomous AI agents for patient health assessment and predictive analysis. Integrated Explainable AI techniques to generate transparent clinical insights, risk evaluations, and data-driven recommendations through an interactive analytics dashboard.",
    image: PatientRiskLogo,
    tags: ["Python","Agentic AI","GenAI","LLM's","API","Machine Learning","Explainable AI","Data Visualization","Data Analytics","Healthcare Analytics"],
    github: "https://github.com/Saurabhsathawane17/Patient-risk-assessment-agentic-ai.git",
    webapp: "",
  },
  {
    id: 7,
    title: "E-Commerce BI Project",
    description: "Developed a data-driven Business Intelligence platform for e-commerce analytics, enabling sales forecasting, customer behavior analysis, revenue tracking, and business performance visualization. Built interactive dashboards and analytical models to transform raw business data into actionable insights for strategic decision-making.",
    image: ECommerceLogo,
    tags: ["Business Intelligence","Data Analytics","Data Visualization","SQL","Power BI","Sales Forecasting","Customer Analytics","Dashboard Development"],
    github: "https://github.com/Saurabhsathawane17/E-commerce_BI_Project.git",
    webapp: "",
  },

];

//education section

export const education = [
  {
    id: 0,
    img: ghrceLogo,
    school: "G. H. Raisoni College of Engineering, Nagpur Maharashtra",
    date: "Nov 2022 - June 2026",
    grade:"7th Semester- 9.01 CGPA",
    desc: "Currently I'm pursuing my Bachelor of Technology with specialization in Artificial Intelligence from GHRCE, Nagpur.",
    degree:"Bachelor of Technology - B.Tech (Artificial Intelligence)",
  },
  {
    id:1,
    img:springDaleLogo,
    school: "Sunny's Spring Dale School, Bhandara Maharashtra",
    date: "June 2020 - May 2022",
    grade: "70.33%",
    desc: "I completed my class 12th education from Sunny's Spring Dale School, Bhandara, under the State Board, where I studied Physics, Chemistry, Mathematics, and Biology (PCMB) with Information Technology.",
    degree: "HSC (XII) - PCMB with Information Technology", 
  },
  {
    id:2,
    img:sunflagLogo,
    school:"Sunflag School, Bhandara Road, Warthi Maharashtra",
    date: "April 2017 - June 2020",
    grade: "80.4%",
    desc: "I completed my class 10th education from Sunflag School, Bhandara Road, Warthi Maharashtra, under the CBSE board, where I studied Science with Computer Science.",
    degree: "CBSE(X), Science with Computer Science",
  },
]

// certifications section
export const certifications = [
  {
    id: 0,
    title: "Machine Learning Specialization",
    issuer: "Stanford University & DeepLearning.AI",
    date: "August 2024",
    desc: "Learned supervised and unsupervised learning, neural networks, and advanced machine learning techniques.",
    link: "#", // Add your verification link here
    img: "", // Add a logo for the issuer if you want
  },
  {
    id: 1,
    title: "Data Analytics Foundation",
    issuer: "Google",
    date: "January 2024",
    desc: "Completed foundational training in data preparation, cleaning, and visualization.",
    link: "#",
    img: "", 
  }
];

// metrics/stats section
export const metrics = [
  { id: 0, title: "Projects Completed", value: "10+" },
  { id: 1, title: "Hackathons Participated", value: "3" },
  { id: 2, title: "Models Created/Deployed", value: "5" },
  { id: 3, title: "CGPA", value: "9.01" },
];