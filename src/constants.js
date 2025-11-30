//skills section logo's
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

//education section logo
import sunflagLogo from './assets/education_logo/sunflag_img.jpg';
import springDaleLogo from './assets/education_logo/spring_dale_logo.jpg';
import ghrceLogo from './assets/education_logo/ghrce_logo.png';

//projects section logo's
import movierecLogo from './assets/work_logo/movie_recommendation.jpg';
import cropPredLogo from './assets/work_logo/crop_prediction.jpg';
import CodeSenseLogo from './assets/work_logo/CodeSense.png';
import ScoreSightLogo from './assets/work_logo/ScoreSight.jpg';

//experience logo's
import kshitijFoundLogo from './assets/work_logo/kshitij_foundation.jpg';
import Infosys_SpringboardLogo from './assets/work_logo/Infosys_Springboard.png';
import InternpeLogo from './assets/work_logo/Internpe.jpg';

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
      //{ name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      //{ name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'colab', logo: colabLogo },
      { name: 'jupyter',logo: jupyterLogo}
    ],
  },
];


export const experiences = [
  {
    id: 0,
    img:Infosys_SpringboardLogo,
    role: "AI ML Intern",
    company: "Infosys",
    date: "18th Sept,2025 - 18th Oct 2025",
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
    id: 1,
    img:kshitijFoundLogo,
    role: "Marathi content Writer & Batch Team Leader",
    company: "Kshitij Foundation (NGO)",
    date: "10th Feb,2025 - 28th May 2025",
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
    id: 2,
    img:InternpeLogo,
    role: "AI ML Intern",
    company: "Internpe",
    date: "15th May,2024 - 15th June,2024",
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
    //webapp:,
  },
  {
    id: 1,
    title: "Crop Prediction System using Machine Learning",
    description:
    "Built a machine learning-based system to predict the most suitable crop for cultivation based on soil nutrients (NPK), pH, rainfall, temperature, and humidity. Trained and tested multiple algorithms to identify the most accurate model, aiding farmers in decision-making for optimized yield.",
    image: cropPredLogo,
    tags: ["HTML","CSS","Python","Machine Learning","Flask"],
    github: "https://github.com/Saurabhsathawane17/crop-prediction-system.git",
    //webapp: "",
  },
  {
    id: 2,
    title: "CODESENSE – AI-Powered Code Reviewer",
    description: "CODESENSE is an AI-powered code review system built with the MERN stack and integrated with Google Generative AI (Gemini API). The application allows users to submit their code for review. The AI analyzes it, identifies errors, and suggests improvements. It also provides syntax highlighting, Markdown formatting, and real-time feedback to enhance the developer experience.",
    image: CodeSenseLogo,
    tags: ["MERN Stack","Node.js","Express.js","React.js","MongoDB","Google Generative AI"],
    github: "https://github.com/Saurabhsathawane17/CODESENSE-AI-Powered-Code-Reviewer.git",
    //webapp: "",
  },
  {
    id: 3,
    title: "ScoreSight - Predicting EPL Points Tally & Top Scorer using Machine Learning",
    description: "ScoreSight is an advanced football analytics platform designed to provide real-time match insights, team statistics, fixtures, standings, player information, and AI-powered analysis. The platform integrates various free football APIs and incorporates AI/ML components for enhanced user experience.",
    image: ScoreSightLogo,
    tags: ["Python","Flask","Machine Learning","APIs","AI Chatbot"],
    github: "https://github.com/Saurabhsathawane17/ScoreSight-Predicting-EPL-Points-Tally-Top-Scorer.git",
    //webapp: "",
  },

];

//education section

export const education = [
  {
    id: 0,
    img: ghrceLogo,
    school: "G. H. Raisoni College of Engineering, Nagpur Maharashtra",
    date: "Nov 2022 - June 2026",
    grade:"5th Semester- 9.06 CGPA",
    desc: "Currently I'm pursuing my Bachelor of Technology with specialization in Artificial Intelligence from GHRCE, Nagpur.",
    degree:"Bachelor of Technology - B.Tech (Artificial Intelligence)",
  },
  {
    id:1,
    img:springDaleLogo,
    school: "Sunny's Spring Dale School, Bhandara Maharashtra",
    date: "June 2020 - May 2022",
    grade: "70.33%",
    desc: "I completed my class 12th education from Sunny's Spring Dale School, Bhandara, under the State Board, where I studied Physics, Chemistry, Mathematics, and Biology (PCMB) with Information Technology",
    degree: "HSC (XII) - PCMB with Information Technology", 
  },
  {
    id:2,
    img:sunflagLogo,
    school:"Sunflag School, Bhandara Road, Warthi Maharashtra",
    date: "April 2017 - June 2020",
    grade: "80.04%",
    desc: "I completed my class 10th education from Sunflag School, Bhandara Road, Warthi Maharastra, under the CBSE board, where I studied Science with Computer Science",
    degree: "CBSE(X), Science with Computer Science",
  },
]