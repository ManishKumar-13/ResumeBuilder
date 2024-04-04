// document.addEventListener("DOMContentLoaded", function() {
//     const addExperienceButton = document.getElementById("addExperience");
//     const addSkillButton = document.getElementById("addSkill");

//     addExperienceButton.addEventListener("click", function() {
//         const experienceSection = document.getElementById("experience-section");
//         const newExperienceItem = document.createElement("div");
//         newExperienceItem.classList.add("experience-item");
//         newExperienceItem.innerHTML = `
//             <input type="text" name="company" placeholder="Company Name">
//             <input type="text" name="job-title" placeholder="Job Title">
//             <input type="text" name="location" placeholder="Location">
//             <textarea name="description" cols="30" rows="5" placeholder="Description"></textarea>
//             <input type="date" name="start-date">
//             <input type="date" name="end-date">
//         `;
//         experienceSection.insertBefore(newExperienceItem, addExperienceButton);
//     });

//     addSkillButton.addEventListener("click", function() {
//         const skillsSection = document.getElementById("skills-section");
//         const newSkillItem = document.createElement("div");
//         newSkillItem.classList.add("skill-item");
//         newSkillItem.innerHTML = `<input type="text" name="skill" placeholder="Skill">`;
//         skillsSection.insertBefore(newSkillItem, addSkillButton);
//     });
// });

// document.addEventListener("DOMContentLoaded", function() {
//     const addExperienceButton = document.getElementById("addExperience");
//     const addSkillButton = document.getElementById("addSkill");

//     addExperienceButton.addEventListener("click", function() {
//         const experienceSection = document.getElementById("experience-section");
//         const newExperienceItem = document.createElement("div");
//         newExperienceItem.classList.add("experience-item");
//         newExperienceItem.innerHTML = `
//             <input type="text" name="company" placeholder="Company Name">
//             <input type="text" name="job-title" placeholder="Job Title">
//             <input type="text" name="location" placeholder="Location">
//             <textarea name="description" cols="30" rows="5" placeholder="Description"></textarea>
//             <input type="date" name="start-date">
//             <input type="date" name="end-date">
//             <button class="delete-button">Delete</button>
//         `;
//         experienceSection.insertBefore(newExperienceItem, addExperienceButton);

//         // Add event listener for the delete button
//         const deleteButton = newExperienceItem.querySelector(".delete-button");
//         deleteButton.addEventListener("click", function() {
//             newExperienceItem.remove(); // Remove the entire experience item when the delete button is clicked
//         });
//     });

//     addSkillButton.addEventListener("click", function() {
//         const skillsSection = document.getElementById("skills-section");
//         const newSkillItem = document.createElement("div");
//         newSkillItem.classList.add("skill-item");
//         newSkillItem.innerHTML = `
//             <input type="text" name="skill" placeholder="Skill">
//             <button class="delete-button">Delete</button>
//         `;
//         skillsSection.insertBefore(newSkillItem, addSkillButton);

//         // Add event listener for the delete button
//         const deleteButton = newSkillItem.querySelector(".delete-button");
//         deleteButton.addEventListener("click", function() {
//             newSkillItem.remove(); // Remove the entire skill item when the delete button is clicked
//         });
//     });
// });



// document.addEventListener("DOMContentLoaded", function() {
//     const addExperienceButton = document.getElementById("addExperience");
//     const addSkillButton = document.getElementById("addSkill");

//     addExperienceButton.addEventListener("click", function() {
//         const experienceSection = document.getElementById("experience-section");
//         const newExperienceItem = document.createElement("div");
//         newExperienceItem.classList.add("experience-item");
//         newExperienceItem.innerHTML = `
//             <input type="text" name="company" placeholder="Company Name">
//             <input type="text" name="job-title" placeholder="Job Title">
//             <input type="text" name="location" placeholder="Location">
//             <textarea name="description" cols="30" rows="5" placeholder="Description"></textarea>
//             <input type="date" name="start-date">
//             <input type="date" name="end-date">
//             <button class="delete-button">Delete</button>
//         `;
//         experienceSection.insertBefore(newExperienceItem, addExperienceButton);

//         // Add event listener for the delete button
//         const deleteButton = newExperienceItem.querySelector(".delete-button");
//         deleteButton.addEventListener("click", function() {
//             newExperienceItem.remove(); // Remove the entire experience item when the delete button is clicked
//         });
//     });

//     addSkillButton.addEventListener("click", function() {
//         const skillsSection = document.getElementById("skills-section");
//         const newSkillItem = document.createElement("div");
//         newSkillItem.classList.add("skill-item");
//         newSkillItem.innerHTML = `
//             <input type="text" name="skill" placeholder="Skill">
//             <button class="delete-button">Delete</button>
//         `;
//         skillsSection.insertBefore(newSkillItem, addSkillButton);

//         // Add event listener for the delete button
//         const deleteButton = newSkillItem.querySelector(".delete-button");
//         deleteButton.addEventListener("click", function() {
//             newSkillItem.remove(); // Remove the entire skill item when the delete button is clicked
//         });
//     });
// });






// function initialize() {
//     const addExperienceButton = document.getElementById("addExperience");
//     const addSkillButton = document.getElementById("addSkill");

//     addExperienceButton.addEventListener("click", function() {
//         const experienceSection = document.getElementById("experience-section");
//         const newExperienceItem = createExperienceItem();
//         experienceSection.insertBefore(newExperienceItem, addExperienceButton);
//         toggleDeleteButtons(experienceSection);
//     });

//     addSkillButton.addEventListener("click", function() {
//         const skillsSection = document.getElementById("skills-section");
//         const newSkillItem = createSkillItem();
//         skillsSection.insertBefore(newSkillItem, addSkillButton);
//         toggleDeleteButtons(skillsSection);
//     });

//     // Add event listener to handle delete buttons
//     document.addEventListener("click", function(event) {
//         if (event.target.classList.contains("delete-button")) {
//             const itemToDelete = event.target.parentElement;
//             itemToDelete.remove();
//             // Update delete button visibility
//             toggleDeleteButtons(itemToDelete.parentElement);
//         }
//     });
// }

// document.addEventListener("DOMContentLoaded", initialize);

// function createExperienceItem() {
//     const newExperienceItem = document.createElement("div");
//     newExperienceItem.classList.add("experience-item");
//     newExperienceItem.innerHTML = `
//         <input type="text" name="company" placeholder="Company Name">
//         <input type="text" name="job-title" placeholder="Job Title">
//         <input type="text" name="location" placeholder="Location">
//         <textarea name="description" cols="30" rows="5" placeholder="Description"></textarea>
//         <input type="date" name="start-date">
//         <input type="date" name="end-date">
//         <button class="delete-button">Delete</button>
//     `;
//     return newExperienceItem;
// }

// function createSkillItem() {
//     const newSkillItem = document.createElement("div");
//     newSkillItem.classList.add("skill-item");
//     newSkillItem.innerHTML = `
//         <input type="text" name="skill" placeholder="Skill">
//         <button class="delete-button">Delete</button>
//     `;
//     return newSkillItem;
// }

// function toggleDeleteButtons(section) {
//     const deleteButtons = section.querySelectorAll(".delete-button");
//     // Hide delete button for the first item
//     deleteButtons[0].style.display = deleteButtons.length > 1 ? "inline-block" : "none";
//     // Show delete button for subsequent items
//     for (let i = 1; i < deleteButtons.length; i++) {
//         deleteButtons[i].style.display = "inline-block";
//     }
// }

function generatePDF() {

    const element = document.getElementById("row");
    console.log(element);
    html2pdf().from(element).save();
}

function printPDF() {
    const resumeReviewContent = document.getElementById("resume-review").innerHTML;
    const printWindow = window.open('', '_blank');
    printWindow.document.open();
    printWindow.document.write(`
        <html>
            <head>
                <title>Resume Review</title>
                <link rel="stylesheet" href="resume.css">
                <link rel="stylesheet" href="cv-template.css">
            </head>
            <body>
                ${resumeReviewContent}
                <script>
                    // Automatically trigger printing when the window is loaded
                    window.onload = function() {
                        window.print();
                    };
                </script>
            </body>
        </html>
    `);
    printWindow.document.close();
}


document.getElementById("downloadButton").addEventListener("click", function () {
    generatePDF();
});

document.getElementById("printButton").addEventListener("click", function () {
    printPDF();
});



function initialize() {
    const addExperienceButton = document.getElementById("addExperience");
    const addSkillButton = document.getElementById("addSkill");
    const addProjectButton = document.getElementById("addProject");
    const addEducationButton = document.getElementById("addEducation");

    // Function to add an experience item
    function addExperienceItem() {
        const experienceSection = document.getElementById("experience-section");
        const newExperienceItem = createExperienceItem();
        experienceSection.insertBefore(newExperienceItem, addExperienceButton);
        toggleDeleteButtons(experienceSection);
        generateResumeReview(); // Update resume review after adding experience
    }

    // Function to add a skill item
    function addSkillItem() {
        const skillsSection = document.getElementById("skills-section");
        const newSkillItem = createSkillItem();
        skillsSection.insertBefore(newSkillItem, addSkillButton);
        toggleDeleteButtons(skillsSection);
        generateResumeReview(); // Update resume review after adding skill
    }

    // Function to add a project item
    function addProjectItem() {
        const projectSection = document.getElementById("project-section");
        const newProjectItem = createProjectItem();
        projectSection.insertBefore(newProjectItem, addProjectButton);
        toggleDeleteButtons(projectSection);
        generateResumeReview(); // Update resume review after adding project
    }

    // Function to add an education item
    function addEducationItem() {
        const educationSection = document.getElementById("education-section");
        const newEducationItem = createEducationItem();
        educationSection.insertBefore(newEducationItem, addEducationButton);
        toggleDeleteButtons(educationSection);
        generateResumeReview(); // Update resume review after adding education
    }

    // Event listeners for adding items
    addExperienceButton.addEventListener("click", addExperienceItem);
    addSkillButton.addEventListener("click", addSkillItem);
    addProjectButton.addEventListener("click", addProjectItem);
    addEducationButton.addEventListener("click", addEducationItem);

    // Add event listener to handle delete buttons
    document.addEventListener("click", function (event) {
        if (event.target.classList.contains("delete-button")) {
            const itemToDelete = event.target.parentElement;
            toggleDeleteButtons(itemToDelete.parentElement);
            itemToDelete.remove();
            // Update delete button visibility

            generateResumeReview(); // Update resume review after adding project
        }
    });


    document.querySelector(".container").addEventListener("input", function (event) {
        // Check if the event target is an input or textarea element
        if (event.target.matches("input[type='text'], input[type='email'], input[type='tel'], input[type='date'], input[type='file'], textarea")) {
            // Update the resume review section
            generateResumeReview();
        }
    });

    // Generate initial resume review
    generateResumeReview();
}



document.addEventListener("DOMContentLoaded", initialize);



function createExperienceItem() {
    const newExperienceItem = document.createElement("div");
    newExperienceItem.classList.add("experience-item");
    newExperienceItem.innerHTML = `
        <input type="text" name="company" placeholder="Company Name">
        <input type="text" name="job-title" placeholder="Job Title">
        <input type="text" name="location" placeholder="Location">
        <textarea name="description" cols="30" rows="5" placeholder="Description"></textarea>
        <input type="date" name="start-date">
        <input type="date" name="end-date">
        <button class="delete-button">Delete</button>
    `;
    return newExperienceItem;
}

function createSkillItem() {
    const newSkillItem = document.createElement("div");
    newSkillItem.classList.add("skill-item");
    newSkillItem.innerHTML = `
        <input type="text" name="skill" placeholder="Skill">
        <button class="delete-button">Delete</button>
    `;
    return newSkillItem;
}

function createProjectItem() {
    const newProjectItem = document.createElement("div");
    newProjectItem.classList.add("project-item");
    newProjectItem.innerHTML = `
        <input type="text" name="project-title" placeholder="Project Title">
        <textarea name="description" cols="30" rows="5" placeholder="Description"></textarea>
        <input type="date" name="start-date">
        <input type="date" name="end-date">
        <button class="delete-button">Delete</button>
    `;
    return newProjectItem;
}

function createEducationItem() {
    const newEducationItem = document.createElement("div");
    newEducationItem.classList.add("education-item");
    newEducationItem.innerHTML = `
        <input type="text" name="college" placeholder="College Name">
        <input type="text" name="qualification" placeholder="Qualification">
        <input type="date" name="start-date">
        <input type="date" name="end-date">
        <button class="delete-button">Delete</button>
    `;
    return newEducationItem;
}

function toggleDeleteButtons(section) {
    const deleteButtons = section.querySelectorAll(".delete-button");
    if (deleteButtons.length > 0) {
        // Hide delete button for the first item
        deleteButtons[0].style.display = deleteButtons.length > 1 ? "inline-block" : "none";
        // Show delete button for subsequent items
        for (let i = 1; i < deleteButtons.length; i++) {
            deleteButtons[i].style.display = "inline-block";
        }
    }
}

// Get the file input element
const fileInput = document.getElementById("profile-image");

fileInput.addEventListener("change", function (event) {
    const file = document.getElementById("profile-image").files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = function () {
        document.getElementById("my-image").src = reader.result;
    }
});



function generateResumeReview() {
    // Get data from form elements
    const personalDetails = {
        name: document.getElementById("firstname").value,
        address: document.getElementById("address").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        dob: document.getElementById("dob").value
    };

    // Get objective content from the form
    const objective = document.getElementById("objective").value;

    // Get data from experience section
    const experiences = Array.from(document.querySelectorAll("#experience-section .experience-item")).map(item => ({
        company: item.querySelector("input[name='company']").value,
        jobTitle: item.querySelector("input[name='job-title']").value,
        location: item.querySelector("input[name='location']").value,
        description: item.querySelector("textarea[name='description']").value,
        startDate: item.querySelector("input[name='start-date']").value,
        endDate: item.querySelector("input[name='end-date']").value
    }));

    // Get data from skills section
    const skills = Array.from(document.querySelectorAll("#skills-section .skill-item input[name='skill']")).map(input => input.value);

    // Get data from projects section
    const projects = Array.from(document.querySelectorAll("#project-section .project-item")).map(item => ({
        title: item.querySelector("input[name='project-title']").value,
        description: item.querySelector("textarea[name='description']").value,
        startDate: item.querySelector("input[name='start-date']").value,
        endDate: item.querySelector("input[name='end-date']").value
    }));

    // Get data from education section
    const education = Array.from(document.querySelectorAll("#education-section .education-item")).map(item => ({
        college: item.querySelector("input[name='college']").value,
        qualification: item.querySelector("input[name='qualification']").value,
        startDate: item.querySelector("input[name='start-date']").value,
        endDate: item.querySelector("input[name='end-date']").value
    }));



    // Update the content of the resume review
    document.getElementById("name").textContent = personalDetails.name;
    document.getElementById("personal-address").textContent = personalDetails.address;
    document.getElementById("personal-email").textContent = personalDetails.email;
    document.getElementById("personal-number").textContent = personalDetails.phone;
    console.log(personalDetails.dob);
    document.getElementById("birth-date").textContent = personalDetails.dob;

    // Update the skills list
    const skillsList = document.querySelector(".skills-list");
    skillsList.innerHTML = '';
    skills.forEach(skill => {
        const li = document.createElement("li");
        li.textContent = skill;
        skillsList.appendChild(li);
    });


    // Update the objective content in the resume review
    document.querySelector("#resume-review .objective-text").textContent = objective;


    // Update the experience list
    const experienceList = document.querySelector("#resume-review .experience-list");
    experienceList.innerHTML = '';
    experiences.forEach(experience => {
        const li = document.createElement("li");
        li.innerHTML = `
        <h4>${experience.company}</h4>
        <p>${experience.location}</p>
        <p>${experience.jobTitle}</p>
        <p>${experience.startDate} - ${experience.endDate}</p>
        <p>${experience.description}</p>
    `;
        experienceList.appendChild(li);
    });

    // Update the projects list
    const projectsList = document.querySelector("#resume-review .projects-list");
    projectsList.innerHTML = '';
    projects.forEach(project => {
        const li = document.createElement("li");
        li.innerHTML = `
        <h4>${project.title}</h4>
        <p>${project.description}</p>
        <p>${project.startDate} - ${project.endDate}</p>
    `;
        projectsList.appendChild(li);
    });

    // Update the education list
    const educationList = document.querySelector("#resume-review .education-list");
    educationList.innerHTML = '';
    education.forEach(edu => {
        const li = document.createElement("li");
        li.innerHTML = `
        <h4>${edu.college}</h4>
        <p>${edu.qualification}</p>
        <p>${edu.startDate} - ${edu.endDate}</p>
    `;
        educationList.appendChild(li);
    });
    // Update the content of the resume review div
    //  document.getElementById("resume-review").innerHTML = reviewContent;
}

// Call generateResumeReview whenever a change occurs in the form
document.querySelectorAll("#left-panel input, #left-panel textarea, #left-panel select").forEach(input => {
    input.addEventListener("change", generateResumeReview);
});