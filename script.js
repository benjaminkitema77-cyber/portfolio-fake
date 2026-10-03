// Testimonials stored in an array of objects
const testimonials = [
    {
        name: "John Doe",
        message: "Benjamin is hardworking and always willing to learn new skills."
    },
    {
        name: "Jane Smith",
        message: "Benjamin has shown great progress in web development."
    },
    {
        name: "Michael Brown",
        message: "A dedicated learner with a strong interest in technology."
    }
];

// Get the testimonial container
const testimonialList = document.getElementById("testimonial-list");

// Loop through testimonials and add them to the page
testimonials.forEach(function(testimonial) {
    const testimonialCard = document.createElement("div");

    testimonialCard.classList.add("testimonial-card");

    testimonialCard.innerHTML = `
        <h3>${testimonial.name}</h3>
        <p>"${testimonial.message}"</p>
    `;

    testimonialList.appendChild(testimonialCard);
});


// Projects stored in an array of objects
const projects = [
    {
        title: "CSS Fundamentals Portfolio",
        description: "A portfolio website created while learning CSS selectors, layouts, positioning, and responsive design.",
        technologies: ["HTML", "CSS"]
    },
    {
        title: "Product Inventory Management System",
        description: "A JavaScript application for managing products using arrays, functions, and objects.",
        technologies: ["JavaScript", "HTML", "CSS"]
    },
    {
        title: "JavaScript Functions Practice",
        description: "A collection of JavaScript functions demonstrating parameters, return values, and basic programming concepts.",
        technologies: ["JavaScript"]
    }
];

// Get the project container
const projectList = document.getElementById("project-list");

// Loop through projects and add them to the page
projects.forEach(function(project) {
    const projectCard = document.createElement("div");

    projectCard.classList.add("project-card");

    projectCard.innerHTML = `
        <h3>${project.title}</h3>

        <p>${project.description}</p>

        <h4>Technologies Used:</h4>

        <ul>
            ${project.technologies
                .map(function(technology) {
                    return `<li>${technology}</li>`;
                })
                .join("")}
        </ul>
    `;

    projectList.appendChild(projectCard);
});