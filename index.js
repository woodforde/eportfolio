// template_y03hkqt template_ap4f6rp
// service_7buibm5 service_ub5bcid
// vj12xtnfVPvphFNBm

// Global Variables
let modalIsOpen = false;
let darkModeIsOn = false;

// On Click and Submission Functions
function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList += " modal__overlay--visible";

    emailjs
        .sendForm(
            'service_ub5bcid',
            'template_ap4f6rp',
            event.target,
            'vj12xtnfVPvphFNBm'
        ).then(() => {
            loading.classList.remove("modal__overlay--visible");
            success.classList += " modal__overlay--visible";
        }).catch(() => {
            loading.classList.remove("modal__overlay--visible");
            alert(`The email service is temporarily unavailable. 
                Please contact me through bmwoodforde@gmail.com`)
        })
}

function toggleModal() {
    if (modalIsOpen) {
        document.body.classList.remove("modal--open");
    } else {
        document.body.classList += (" modal--open");
    }
    modalIsOpen = !modalIsOpen;
}

function toggleContrast() {
    if (darkModeIsOn) {
        document.body.classList.remove("dark-mode");
    } else {
        document.body.classList += (" dark-mode");
    }
    darkModeIsOn = !darkModeIsOn;
}

function moveMailButton(event) {
    // Can move according to the mouse position but doesnt look as good as click

    // const mailButton = document.querySelector(".mailButton");
    // const windowWidth = document.documentElement.clientWidth;
    // const windowHeight = document.documentElement.clientHeight;
    // const scaleFactor = 1/25;

    // const x = (windowWidth - event.clientX) * scaleFactor;
    // const y = (windowHeight - event.clientY) * scaleFactor;

    // mailButton.style.transform = `translate(-${x}px, -${y}px)`;
}


// Convert technical skills to HTML
function technicalSkillToHTML(skillName, skillList) {
    return `
        <h3 class="technicalSkill__category">${skillName}</h3>
        <div class="technicalSkill__list">
            ${skillList.map((skill, index) => (
                `<div class="technicalSkill" key=${index}>
                    <img
                        class="technicalSkill__img"
                        src=${skill.image}
                        alt=""
                    />
                    <h4 class="technicalSkill__name">${skill.name}</h4>
                </div>`
            )).join('')}
        </div>
    `
}

// Convert Projects Objects to HTML
let direction = true;
function directionBoolToHTML() {
    direction = !direction;
    return direction ? "left" : "right";
}
function projectsToHTML() {
    return projects.map((project, index) => (
        `<li
            data-aos="fade-${directionBoolToHTML()}"
            class="project"
            key=${index}
        >
            <div class="project__wrapper">
                <div class="project__bg"></div>
                <img
                    class="project__img"
                    src=${project.image}
                    alt=""
                />
                <div class="project__description">
                    <h3>${project.title}</h3>
                    <h4>${project.technologies}</h4>
                    <p>${project.description}</p>
                    <div class="projectLink__list">
                        <a 
                            class="projectLink click"
                            href=${project.github}
                            target="_blank"
                        >
                            <i class="fa-brands fa-github"></i>
                        </a>
                        <a 
                            class="projectLink click"
                            href=${project.url}
                            target="_blank"
                        >
                            <i class="fa-solid fa-link"></i>
                        </a>
                    </div>
                </div>
            </div>
        </li>`
    )).join('');
}

const projects = [
    {
        title: "Movie Finder",
        technologies: "React, HTML, CSS",
        description: `A fully responsive movie wiki application. Using the OMBD API, users can search for 
            movies using a text input and by year of release using a range slider. I also implemented 
            pagination and utilised React Router DOM for page navigation.`,
        github: "https://github.com/woodforde/React-Movie-Finder",
        url: "https://react-movie-finder-omega.vercel.app/",
        image: "./assets/moviefinder.png"
    },
    {
        title: "Gmail Clone",
        technologies: "React, Redux, Firebase, HTML, CSS",
        description: `A basic email service clone that operates using Firestore databases to store emails. 
            The application utilises Redux to send and access email information and state. It also uses Firebase 
            authentication to log in using the users Gmail account.`,
        github: "https://github.com/woodforde/Gmail-Clone",
        url: "https://clone-7f10c.web.app/",
        image: "./assets/gmailclone.png"
    },
    {
        title: "Twitter Clone",
        technologies: "React, Firebase, HTML, CSS",
        description: `A basic social media clone that operates using a Firestore database to store user posts 
            with image capabilities. The application also uses React Flip Move and React Twitter Embed.`,
        github: "https://github.com/woodforde/Twitter-Clone",
        url: "https://twitter-clone-d293a.web.app/",
        image: "./assets/twitterclone.png"
    },
    {
        title: "Hulu Clone",
        technologies: "React, Next.js, HTML, Tailwind CSS",
        description: `A basic responsive media website that has very limited functionality. The aim of this 
        project was to utilise server side rendering for the preview images.`,
        github: "https://github.com/woodforde/Hulu-Clone",
        url: "https://hulu-clone-9g6q-m1t21pirp-woodforde.vercel.app/",
        image: "./assets/huluclone.png"
    },
];

const languages = [
    {
        name: "HTML",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/240px-HTML5_Badge.svg.png",
    },
    {
        name: "CSS",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png",
    },
    {
        name: "JavaScript",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    },
    {
        name: "C",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/695px-C_Programming_Language.svg.png",
    },
    {
        name: "Java",
        image: "https://cdn-icons-png.flaticon.com/512/226/226777.png",
    },
    {
        name: "Python",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png",
    },
    {
        name: "SQL",
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/6/68/Oracle_SQL_Developer_logo.svg/1200px-Oracle_SQL_Developer_logo.svg.png",
    },
]

const frameworks = [
    {
        name: "React",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
    },
    {
        name: "Next.js",
        image: "https://seeklogo.com/images/N/next-js-logo-8FCFF51DD2-seeklogo.com.png",
    },
    {
        name: "Material-UI",
        image: "https://mui.com/static/logo.png",
    },
    {
        name: "Tailwind CSS",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png",
    },
    {
        name: "Redux",
        image: "https://cdn.worldvectorlogo.com/logos/redux.svg",
    },
]

const technologies = [
    {
        name: "npm",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/540px-Npm-logo.svg.png",
    },
    {
        name: "Git",
        image: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
    },
    {
        name: "Firebase",
        image: "https://cdn.worldvectorlogo.com/logos/firebase-1.svg",
    },
    {
        name: "React Dev Tools",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
    },
]

// Main Function
function main() {
    const projectListElement = document.querySelector('.project__list');
    const languagesElement = document.querySelector('.languages')
    const frameworksElement = document.querySelector('.frameworks')
    const technologiesElement = document.querySelector('.technologies')

    projectListElement.innerHTML = projectsToHTML();
    languagesElement.innerHTML = technicalSkillToHTML("Languages", languages);
    frameworksElement.innerHTML = technicalSkillToHTML("Frameworks", frameworks);
    technologiesElement.innerHTML = technicalSkillToHTML("Technologies", technologies);
}
main();
