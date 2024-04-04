import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = "AIzaSyAkEyYlAxtqLilBn5shjPWOJsQjHhNZQ68";
const genAI = new GoogleGenerativeAI(API_KEY);

async function generateJobSuggestions(userSkills) {
    try {
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
        const result = await model.generateContent(userSkills);
        const response = await result.response;
        console.log(response);
        const jobSuggestions = await response.text();
        displayJobSuggestions(jobSuggestions);
    } catch (error) {
        console.error("Error generating job suggestions:", error);
    }
}

function displayJobSuggestions(suggestions) {

    const md = window.markdownit();

    const markdownText = suggestions;

    // Render Markdown text to HTML
    const htmlOutput = md.render(markdownText);
    console.log(htmlOutput);
    jobSuggestions.innerHTML = htmlOutput;
}

const jobSuggestionBtn = document.getElementById("suggestJobBtn");

jobSuggestionBtn.addEventListener("click", () => {
    projectRecommendations.style.display = "none";
    jobSuggestions.style.display = "block";

    const skillsInput = extractUserSkills();
    const userSkills = "Discover job opportunities based on these skills: " + skillsInput;

    generateJobSuggestions(userSkills);
});


const projectRecommendations = document.getElementById("projectRecommendations");
const jobSuggestions = document.getElementById("jobSuggestions");


// const jobSuggestionsBtn = document.getElementById("suggestJob");

// jobSuggestionsBtn.addEventListener("click", () => {

//     // Extract the user skills
//     const userSkills = extractUserSkills();

//     // Recommend projects based on user's skills
//     suggestJobs(userSkills);
// })