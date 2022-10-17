// template_y03hkqt
// service_7buibm5
// vj12xtnfVPvphFNBm

// Global Variables
const projectListElement = document.querySelector('.project__list');

let modalIsOpen = false;

// On Click and Submission Functions
function contact(event) {
    event.preventDefault();
    console.log(event.target)
}

function toggleModal() {
    if (modalIsOpen) {
        document.body.classList.remove("modal--open");
    } else {
        document.body.classList += (" modal--open");
    }
    modalIsOpen = !modalIsOpen;
}

// Convert Projects Objects to HTML
function projectsToHTML() {
    return projects.map((project, index) => (
        `<li class="project" key=${index}>
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
        description: "An app that fetches movies from an API and displays them dynamically.",
        github: "https://github.com/woodforde/React-Movie-Finder",
        url: "https://react-movie-finder-omega.vercel.app/",
        image: "./assets/temp_project_img.png"
    },
    {
        title: "Movie Finder 2",
        technologies: "React, HTML, CSS",
        description: "An app that fetches movies from an API and displays them dynamically.",
        github: "https://github.com/woodforde/React-Movie-Finder",
        url: "https://react-movie-finder-omega.vercel.app/",
        image: "./assets/temp_project_img.png"
    },
];

// Main Function
function main() {
    projectListElement.innerHTML = projectsToHTML();
}
main();
