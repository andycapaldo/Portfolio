import frontend from '../assets/frontend.png';
import backend from '../assets/backend.png';
import tools from '../assets/tools.png';
import softSkills from '../assets/soft-skills.png';
import zengenda_one from '../assets/Zengenda/Zengenda_1.png';
import zengenda_two from '../assets/Zengenda/Zengenda_2.png';
import zengenda_three from '../assets/Zengenda/Zengenda_3.png';
import zengenda_four from '../assets/Zengenda/Zengenda_4.png';
import zengenda_five from '../assets/Zengenda/Zengenda_5.png';
import cocktail_one from '../assets/CocktailLounge/CocktailLounge_1.png';
import cocktail_two from '../assets/CocktailLounge/CocktailLounge_2.png';
import cocktail_three from '../assets/CocktailLounge/CocktailLounge_3.png';

export const SKILLS = [
    {
        title: 'Frontend',
        icon: frontend,
        skills: [
            { skill: "HTML5", percentage: "95%" },
            { skill: "CSS3 (Sass/SCSS)", percentage: "75%" },
            { skill: "JavaScript", percentage: "90%" },
            { skill: "React.js", percentage: "90%" },
        ],
    },
    {
        title: "Backend",
        icon: backend,
        skills: [
            { skill: "Node.js", percentage: "85%" },
            { skill: "Express.js", percentage: "70%" },
            { skill: "Python", percentage: "90%" },
        ],
    },
    {
        title: "Tools",
        icon: tools,
        skills: [
            { skill: "Git & Github", percentage: "95%" },
            { skill: "Airtable", percentage: "95%"},
            { skill: "Visual Studio Code", percentage: "85%" },
            { skill: "AWS", percentage: "80%" },
            { skill: "Postman", percentage: "85%" },
        ],
    },
    {
        title: "Soft Skills",
        icon: softSkills,
        skills: [
            { skill: "Problem-solving", percentage: "100%" },
            { skill: "Collaboration", percentage: "100%" },
            { skill: "Attention to Detail", percentage: "100%" },
            { skill: "Adaptability", percentage: "100%" },
        ],
    },
];

export const WORK_EXPERIENCE = [
    {
        title: "Integrations Specialist at Payward",
        date: "May 2024 - PRESENT",
        responsibilities: [
            "Led, developed and implemented solutions for various projects to map data points from our system to clients' systems, ensuring seamless integration and data transfer",
            "Utilized various data formats including JSON, XML, SQL database, and CSV file types to meet client requirements.",
            "Developed and maintained scalable Airtable relational databases using JavaScript to support a department of 800+ people",
            "Automated dozens of processes by writing JavaScript scripts, saving hundreds of hours of time",
            "Integrated multiple web services and external systems into Airtable, Slack, and Google Sheets, consolidating data sources into a single database",
            "Collaborated with cross-functional teams to design and deliver new features and functionality",
            "Design sleek and intuitive Airtable interfaces to increase user adoption and enhance the end-user experience",
        ]
    },
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

export const PROJECTS = [
    {
        title: "Zengenda",
        description: "An ultimate life organizer and motivational coach. An app that not only streamlines your tasks, but also fuels your drive to conquer them. This app redefines overwhelming lists as a sequence of empowering steps, placing equal emphasis on mental wellness and productivity.",
        techStack: ["React Native", "TypeScript", "Node.js", "Expo", "Firebase"],
        images: [
            zengenda_one, 
            zengenda_two, 
            zengenda_three, 
            zengenda_four, 
            zengenda_five
        ],
        liveProject: "https://expo.dev/preview/update?message=Updated%20packages&updateRuntimeVersion=1.0.0&createdAt=2024-06-04T00%3A10%3A30.657Z&slug=exp&projectId=02fa799b-28f7-470e-be36-6c0ef7e0f360&group=7b300713-8b3b-4339-8c53-8da07f0a9c71",
        gitHub: "https://github.com/andycapaldo/Zengenda",
    },
    {
        title: "The Cocktail Lounge",
        description: "A forum platform for cocktail enthusiasts. Explore over 600+ cocktail creations from the CocktailDB's database, check out our user's own cocktail creations, and create your own cocktail recipes.",
        techStack: ["React", "TypeScript", "Node.js", "Flask", "Python", "SQLAlchemy"],
        images: [
            cocktail_one, 
            cocktail_two, 
            cocktail_three,
        ],
        liveProject: "https://vermillion-pudding-29bfed.netlify.app/",
        gitHub: "https://github.com/andycapaldo/The-Cocktail-Lounge-React",
    },
];