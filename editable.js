

var _a, _b, _c, _d, _e, _f, _g, _h;
// Toggle Dark Mode
(_a = document.getElementById("darkModeToggle")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});
// Back Button
(_b = document.getElementById("backButton")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function () {
    window.history.back();
});
// Add More Education Fields
(_c = document.getElementById("addEducation")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", function () {
    var educationSection = document.getElementById("educationSection");
    if (educationSection) {
        var entryCount = educationSection.querySelectorAll(".education-entry").length + 1;
        var newEntry = document.createElement("div");
        newEntry.className = "education-entry";
        newEntry.innerHTML = "\n        <label for=\"degree".concat(entryCount, "\">Degree:</label>\n        <input type=\"text\" id=\"degree").concat(entryCount, "\" required>\n        <label for=\"institution").concat(entryCount, "\">Institution:</label>\n        <input type=\"text\" id=\"institution").concat(entryCount, "\" required>\n      ");
        educationSection.insertBefore(newEntry, document.getElementById("addEducation"));
    }
});
// Add More Work Experience Fields
(_d = document.getElementById("addWorkExperience")) === null || _d === void 0 ? void 0 : _d.addEventListener("click", function () {
    var workExperienceSection = document.getElementById("workExperienceSection");
    if (workExperienceSection) {
        var entryCount = workExperienceSection.querySelectorAll(".work-experience-entry").length + 1;
        var newEntry = document.createElement("div");
        newEntry.className = "work-experience-entry";
        newEntry.innerHTML = "\n        <label for=\"jobTitle".concat(entryCount, "\">Job Title:</label>\n        <input type=\"text\" id=\"jobTitle").concat(entryCount, "\" required>\n        <label for=\"company").concat(entryCount, "\">Company:</label>\n        <input type=\"text\" id=\"company").concat(entryCount, "\" required>\n        <label for=\"duration").concat(entryCount, "\">Duration:</label>\n        <input type=\"text\" id=\"duration").concat(entryCount, "\" required>\n      ");
        workExperienceSection.insertBefore(newEntry, document.getElementById("addWorkExperience"));
    }
});
// Add More Skills Fields
(_e = document.getElementById("addSkill")) === null || _e === void 0 ? void 0 : _e.addEventListener("click", function () {
    var skillsSection = document.getElementById("skillsSection");
    if (skillsSection) {
        var skillCount = skillsSection.querySelectorAll(".skills-entry input").length + 1;
        var newSkill = document.createElement("input");
        newSkill.type = "text";
        newSkill.id = "skill".concat(skillCount);
        newSkill.placeholder = "Skill";
        newSkill.required = true;
        newSkill.className = "skill-input";
        skillsSection.insertBefore(newSkill, document.getElementById("addSkill"));
    }
});
// Generate Resume
(_f = document.getElementById("resumeForm")) === null || _f === void 0 ? void 0 : _f.addEventListener("submit", function (event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var educationEntries = Array.from(document.querySelectorAll(".education-entry"));
    var education = educationEntries.map(function (entry) {
        var degree = entry.querySelector("input[id^='degree']").value;
        var institution = entry.querySelector("input[id^='institution']").value;
        return "<p><strong>Degree:</strong> ".concat(degree, " <br><strong>Institution:</strong> ").concat(institution, "</p>");
    }).join("");
    var workExperienceEntries = Array.from(document.querySelectorAll(".work-experience-entry"));
    var workExperience = workExperienceEntries.map(function (entry) {
        var jobTitle = entry.querySelector("input[id^='jobTitle']").value;
        var company = entry.querySelector("input[id^='company']").value;
        var duration = entry.querySelector("input[id^='duration']").value;
        return "<p><strong>Job Title:</strong> ".concat(jobTitle, " <br><strong>Company:</strong> ").concat(company, " <br><strong>Duration:</strong> ").concat(duration, "</p>");
    }).join("");
    var skillsEntries = Array.from(document.querySelectorAll(".skills-entry input"));
    var skills = skillsEntries.map(function (input) { return input.value; }).join(", ");
    var resumeHtml = "\n      <h1>Resume</h1>\n      <h2>Personal Information</h2>\n      <p><strong>Name:</strong> ".concat(name, " <br><strong>Email:</strong> ").concat(email, "</p>\n      <h2>Education</h2>\n      ").concat(education, "\n      <h2>Work Experience</h2>\n      ").concat(workExperience, "\n      <h2>Skills</h2>\n      <p>").concat(skills, "</p>\n    ");
    var resumeDiv = document.getElementById("resume");
    if (resumeDiv) {
        resumeDiv.innerHTML = resumeHtml;
    }
});
// Editable Resume Functionality
(_g = document.getElementById("resume")) === null || _g === void 0 ? void 0 : _g.addEventListener("click", function (event) {
    var target = event.target;
    if (target.matches("h2, p")) {
        target.setAttribute("contenteditable", "true");
        target.focus();
    }
});
// PDF Download Functionality
function downloadResumeAsPDF() {
    var doc = new jsPDF(); // Create a new jsPDF instance
    var resumeElement = document.getElementById("resume"); // Get the resume element
    
    if (resumeElement) {
        // Use jsPDF's html() method to capture the HTML content of the resume
        doc.html(resumeElement, {
            callback: function (doc) {
                doc.save("resume.pdf"); // Save the PDF
            },
            x: 10, // Horizontal padding
            y: 10, // Vertical padding
            width: 180, // Width of the content (optional, adjust if needed)
            windowWidth: document.body.scrollWidth, // Set the window width to capture entire content
        });
    } else {
        console.error("Resume element not found!");
    }
}

// Attach the download function to the button click event
var downloadButton = document.getElementById("downloadButton");
if (downloadButton) {
    downloadButton.addEventListener("click", downloadResumeAsPDF);
} else {
    console.error("Download button not found!");
}
