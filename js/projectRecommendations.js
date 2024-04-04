



function extractUserSkills() {
    const skillInputs = document.querySelectorAll('input[name="skill"]');
    const skills = [];

    skillInputs.forEach(input => {
        if(input.value.trim() !== '') {   // Check if the input field is not empty
            skills.push(input.value.trim());    // Add the skill to the skills array
        }
    });

    console.log(skills);
    return skills;
}


// Function to recommend projects based on user's skills
async function recommendProjects(skills) {
    try {
        const projects = await fetchGitHubProjects(skills);
        displayProjects(projects);
    } catch (error) {
        console.error("Error fetching project recommendations:", error);
    }
}


// Function to fetch project recommendations from GitHub API
async function fetchGitHubProjects(skills) {
    // Join the array of skills into a single string separated by spaces
    const skillsQuery = skills.join(" ");
    const apiUrl = `https://api.github.com/search/repositories?q=${skillsQuery}&sort=stars&order=desc`;
    const response = await fetch(apiUrl);
    if (!response.ok) {
        throw new Error(`Failed to fetch projects from GitHub API: ${response.statusText}`);
    }
    const data = await response.json();
    return data.items.slice(0,10); // Return only the top 5 projects
}


// Function to display project recommendations in the project recommendations area
function displayProjects(projects) {
    console.log(projects)
    // const projectRecommendationsDiv = document.getElementById("projectRecommendations");
    // projectRecommendationsDi.innerHTML = "";

    // projects.forEach(project => {
    //     const projectLink = document.createElement("a");
    //     projectLink.href = project.html_url;
    //     projectLink.textContent = project.full_name;
    //     projectLink.target = "_blank";

    //     const projectDescription = document.createElement("p");
    //     projectDescription.textContent = project.description;

    //     const projectItem = document.createElement("div");
    //     projectItem.appendChild(projectLink);
    //     projectItem.appendChild(projectDescription);

    //     projectRecommendationsDiv.appendChild(projectItem);
    // });

    const projectRecommendationsDiv = document.getElementById("projectRecommendations");
    projectRecommendationsDiv.innerHTML = ''; // Clear existing recommendations
    projects.forEach(project => {
        const projectDiv = document.createElement("div");
                projectDiv.classList.add("project");
                projectDiv.innerHTML = `
                    <h3>${project.full_name}</h3>
                    <p>Language: ${project.language}</p>
                    <p>Stars: ${project.stargazers_count}</p>
                    <p>Forks: ${project.forks_count}</p>
                    <a href="${project.html_url}" target="_blank">View Project</a>
                `;
                projectRecommendationsDiv.appendChild(projectDiv);
    });
}



const recommendProjectBtn = document.getElementById("recommendProjectsBtn");
const jobSuggestions = document.getElementById("jobSuggestions");

recommendProjectBtn.addEventListener("click", () => {

    projectRecommendations.style.display = "block";
    jobSuggestions.style.display = "none";


    // Extract the user skills
    const userSkills = extractUserSkills();

    // Recommend projects based on user's skills
    recommendProjects(userSkills);
})