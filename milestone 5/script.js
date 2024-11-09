"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jspdf_1 = require("jspdf");
// Define the references to the HTML elements
var downloadPdfButton = document.getElementById('download-pdf');
var resumeName = document.getElementById('resume-name');
var resumeEmail = document.getElementById('resume-email');
var resumeDegree = document.getElementById('resume-degree');
var resumeSchool = document.getElementById('resume-school');
var resumeGradYear = document.getElementById('resume-grad-year');
var resumeWorkExperience = document.getElementById('resume-work-experience');
var resumeSkills = document.getElementById('resume-skills');
// Get references to the input fields
var nameInput = document.getElementById('name');
var emailInput = document.getElementById('email');
var degreeInput = document.getElementById('degree');
var schoolInput = document.getElementById('school');
var gradYearInput = document.getElementById('grad-year');
var workExperienceInput = document.getElementById('work-experience');
var skillsInput = document.getElementById('skills');
// Generate Resume button functionality
document.getElementById('generate-resume').addEventListener('click', function () {
    // Populate resume with values from the form
    resumeName.textContent = nameInput.value;
    resumeEmail.textContent = emailInput.value;
    resumeDegree.textContent = degreeInput.value;
    resumeSchool.textContent = schoolInput.value;
    resumeGradYear.textContent = gradYearInput.value;
    resumeWorkExperience.textContent = workExperienceInput.value;
    resumeSkills.textContent = skillsInput.value;
    // Display the resume
    document.getElementById('resume').style.display = 'block';
});
// Download PDF button functionality
downloadPdfButton.addEventListener('click', function () {
    var doc = new jspdf_1.jsPDF();
    // Add content to the PDF
    doc.text("Name: ".concat(resumeName.textContent || 'Not provided'), 10, 10);
    doc.text("Email: ".concat(resumeEmail.textContent || 'Not provided'), 10, 20);
    doc.text("Degree: ".concat(resumeDegree.textContent || 'Not provided'), 10, 30);
    doc.text("School: ".concat(resumeSchool.textContent || 'Not provided'), 10, 40);
    doc.text("Graduation Year: ".concat(resumeGradYear.textContent || 'Not provided'), 10, 50);
    doc.text("Work Experience: ".concat(resumeWorkExperience.textContent || 'Not provided'), 10, 60);
    doc.text("Skills: ".concat(resumeSkills.textContent || 'Not provided'), 10, 70);
    // Save the PDF
    doc.save('resume.pdf');
});
