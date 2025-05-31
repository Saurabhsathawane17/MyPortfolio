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

//experience logo's
import kshitijFoundLogo from './assets/work_logo/kshitij_foundation.jpg';

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
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
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
    //github:,
    //webapp:,
  },
  {
    id: 1,
    title: "Crop Prediction System using Machine Learning",
    description:
    "Built a machine learning-based system to predict the most suitable crop for cultivation based on soil nutrients (NPK), pH, rainfall, temperature, and humidity. Trained and tested multiple algorithms to identify the most accurate model, aiding farmers in decision-making for optimized yield.",
    image: cropPredLogo,
    tags: ["HTML","CSS","Python","Machine Learning","Flask"],
    //github: "",
    //webapp: "",
  }
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