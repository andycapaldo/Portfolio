import frontend from '../assets/frontend.png';
import backend from '../assets/backend.png';
import tools from '../assets/tools.png';
import softSkills from '../assets/soft-skills.png';

export const SKILLS = [
    {
        title: 'Frontend',
        icon: frontend,
        skills: [
            { skill: "HTML5", percentage: "85%" },
            { skill: "CSS3 (Sass/SCSS)", percentage: "75%" },
            { skill: "JavaScript", percentage: "90%" },
            { skill: "React.js", percentage: "85%" },
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

export const WORK_EXPERIENCE = [
    {
        title: "Software Engineer at Co.Lab",
        date: "February 2024 - April 2024",
        responsibilities: [
            "Developed, tested, and deployed a full-stack mobile application using TypeScript React-Native, Firebase, and Expo.",
            "Collaborated with a Product Manager, UX Designer, and a Software Developer to conduct user research, create user stories, establish a product vision, a product backlog, and a product portfolio to create an MVP in an 8-week sprint.",
            "Created backend cloud storage infrastructure using Firebase, fixed dozens of bugs and merge conflicts via Git and Github, resolved bug reports via Jira.",
            "Utilized CI/CD to continuously integrate and deploy new updates to the product as user/manual testing provided the team with new insights and ideas for innovation.",
            "Tested and developed mobile application for both iOS and Android platforms",
        ],
    },
    {
        title: "Software Engineer Trainee at Coding Temple",
        date: "September 2023 - December 2023",
        responsibilities: [
            "Developed a lifestyle forum platform using TypeScript React, Flask, and PostgreSQL.",
            "Completed 10 unique and challenging projects using Python and JavaScript while implementing varied and disparate programming concepts.",
            "Utilized automation testing libraries like PyTest to ensure reliability and performance, tested apps across several different browsers and platforms.",
            "Improved a CLI-based Blackjack card game built in Python by utlizing OOP principles.",
            "Utilized Git and Github as a source control system, contributed to group projects by creating and merging pull requests.",
            "Created a trivia app in React by integrating a 3rd-party API and styled components.",
        ],
    },
];