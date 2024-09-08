import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

// Toggle Dark Mode
const darkModeToggle = document.getElementById("darkModeToggle") as HTMLElement | null;
darkModeToggle?.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// Back Button
const backButton = document.getElementById("backButton") as HTMLElement | null;
backButton?.addEventListener("click", () => {
    window.history.back();
});

// Add More Education Fields
const addEducationButton = document.getElementById("addEducation") as HTMLElement | null;
addEducationButton?.addEventListener("click", () => {
    const educationSection = document.getElementById("educationSection") as HTMLElement | null;
    if (educationSection) {
        const entryCount = educationSection.querySelectorAll(".education-entry").length + 1;
        const newEntry = document.createElement("div");
        newEntry.className = "education-entry";
        newEntry.innerHTML = `
            <label for="degree${entryCount}">Degree:</label>
            <input type="text" id="degree${entryCount}" required>
            <label for="institution${entryCount}">Institution:</label>
            <input type="text" id="institution${entryCount}" required>
        `;
        educationSection.insertBefore(newEntry, addEducationButton);
    }
});

// Add More Work Experience Fields
const addWorkExperienceButton = document.getElementById("addWorkExperience") as HTMLElement | null;
addWorkExperienceButton?.addEventListener("click", () => {
    const workExperienceSection = document.getElementById("workExperienceSection") as HTMLElement | null;
    if (workExperienceSection) {
        const entryCount = workExperienceSection.querySelectorAll(".work-experience-entry").length + 1;
        const newEntry = document.createElement("div");
        newEntry.className = "work-experience-entry";
        newEntry.innerHTML = `
            <label for="jobTitle${entryCount}">Job Title:</label>
            <input type="text" id="jobTitle${entryCount}" required>
            <label for="company${entryCount}">Company:</label>
            <input type="text" id="company${entryCount}" required>
            <label for="duration${entryCount}">Duration:</label>
            <input type="text" id="duration${entryCount}" required>
        `;
        workExperienceSection.insertBefore(newEntry, addWorkExperienceButton);
    }
});

// Add More Skills Fields
const addSkillButton = document.getElementById("addSkill") as HTMLElement | null;
addSkillButton?.addEventListener("click", () => {
    const skillsSection = document.getElementById("skillsSection") as HTMLElement | null;
    if (skillsSection) {
        const skillCount = skillsSection.querySelectorAll(".skills-entry input").length + 1;
        const newSkill = document.createElement("input");
        newSkill.type = "text";
        newSkill.id = `skill${skillCount}`;
        newSkill.placeholder = "Skill";
        newSkill.required = true;
        newSkill.className = "skill-input";
        skillsSection.insertBefore(newSkill, addSkillButton);
    }
});

// Generate Resume
const resumeForm = document.getElementById("resumeForm") as HTMLFormElement | null;
resumeForm?.addEventListener("submit", (event: Event) => {
    event.preventDefault();
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;

    const educationEntries = Array.from(document.querySelectorAll(".education-entry")) as HTMLElement[];
    const education = educationEntries.map((entry) => {
        const degree = (entry.querySelector("input[id^='degree']") as HTMLInputElement).value;
        const institution = (entry.querySelector("input[id^='institution']") as HTMLInputElement).value;
        return `<p><strong>Degree:</strong> ${degree} <br><strong>Institution:</strong> ${institution}</p>`;
    }).join("");

    const workExperienceEntries = Array.from(document.querySelectorAll(".work-experience-entry")) as HTMLElement[];
    const workExperience = workExperienceEntries.map((entry) => {
        const jobTitle = (entry.querySelector("input[id^='jobTitle']") as HTMLInputElement).value;
        const company = (entry.querySelector("input[id^='company']") as HTMLInputElement).value;
        const duration = (entry.querySelector("input[id^='duration']") as HTMLInputElement).value;
        return `<p><strong>Job Title:</strong> ${jobTitle} <br><strong>Company:</strong> ${company} <br><strong>Duration:</strong> ${duration}</p>`;
    }).join("");

    const skillsEntries = Array.from(document.querySelectorAll(".skills-entry input")) as HTMLInputElement[];
    const skills = skillsEntries.map((input) => input.value).join(", ");

    const resumeHtml = `
        <h1>Resume</h1>
        <h2>Personal Information</h2>
        <p><strong>Name:</strong> ${name} <br><strong>Email:</strong> ${email}</p>
        <h2>Education</h2>
        ${education}
        <h2>Work Experience</h2>
        ${workExperience}
        <h2>Skills</h2>
        <p>${skills}</p>
    `;

    const resumeDiv = document.getElementById("resume") as HTMLElement | null;
    if (resumeDiv) {
        resumeDiv.innerHTML = resumeHtml;
    }
});

// Editable Resume Functionality
const resumeDiv = document.getElementById("resume") as HTMLElement | null;
resumeDiv?.addEventListener("click", (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (target.matches("h2, p")) {
        target.setAttribute("contenteditable", "true");
        target.focus();
    }
});

// PDF Download Functionality
function downloadResumeAsPDF() {
    const resumeElement = document.getElementById("resume");

    if (resumeElement) {
        html2canvas(resumeElement).then((canvas) => {
            const imgData = canvas.toDataURL("image/png");
            const doc = new jsPDF();
            const imgWidth = 190; // Adjust as needed
            const imgHeight = (canvas.height * imgWidth) / canvas.width; // Maintain aspect ratio

            doc.addImage(imgData, 'PNG', 10, 10, imgWidth, imgHeight);
            doc.save("resume.pdf");
        });
    }
}

const downloadButton = document.getElementById("downloadButton") as HTMLElement | null;
downloadButton?.addEventListener("click", downloadResumeAsPDF);
