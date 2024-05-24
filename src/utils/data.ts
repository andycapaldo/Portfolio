import frontend from '../assets/frontend.png';
import backend from '../assets/backend.png';
import tools from '../assets/tools.png';
import softSkills from '../assets/soft-skills.png';

export const SKILLS = [
    {
        title: 'Frontend',
        icon: frontend,
        skills: [
            { skill: "HTML5", percentage: "80%" },
            { skill: "CSS3 (Sass/SCSS)", percentage: "90%" },
            { skill: "JavaScript", percentage: "90%" },
            { skill: "React.js", percentage: "80%" },
        ],
    },
    {
        title: "Backend",
        icon: backend,
        skills: [
            { skill: "Node.js", percentage: "70%" },
            { skill: "Express.js", percentage: "65%" },
            { skill: "Python", percentage: "90%" },
        ],
    },
    {
        title: "Tools",
        icon: tools,
        skills: [
            { skill: "Git & Github", percentage: "85%" },
            { skill: "Visual Studio Code", percentage: "75%" },
            { skill: "Webpack", percentage: "60%" },
            { skill: "Postman", percentage: "70%" },
        ],
    },
    {
        title: "Soft Skills",
        icon: softSkills,
        skills: [
            { skill: "Problem-solving", percentage: "80%" },
            { skill: "Collaboration", percentage: "85%" },
            { skill: "Attention to Detail", percentage: "75%" },
        ],
    },
]