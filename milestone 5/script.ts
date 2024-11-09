import { jsPDF } from 'jspdf';

// Ensure the jsPDF library is loaded
declare global {
    interface Window {
        jspdf: typeof jsPDF;
    }
}

// Define the references to the HTML elements
const downloadPdfButton = document.getElementById('download-pdf') as HTMLButtonElement;
const resumeName = document.getElementById('resume-name') as HTMLSpanElement;
const resumeEmail = document.getElementById('resume-email') as HTMLSpanElement;
const resumeDegree = document.getElementById('resume-degree') as HTMLSpanElement;
const resumeSchool = document.getElementById('resume-school') as HTMLSpanElement;
const resumeGradYear = document.getElementById('resume-grad-year') as HTMLSpanElement;
const resumeWorkExperience = document.getElementById('resume-work-experience') as HTMLParagraphElement;
const resumeSkills = document.getElementById('resume-skills') as HTMLParagraphElement;

// Get references to the input fields
const nameInput = document.getElementById('name') as HTMLInputElement;
const emailInput = document.getElementById('email') as HTMLInputElement;
const degreeInput = document.getElementById('degree') as HTMLInputElement;
const schoolInput = document.getElementById('school') as HTMLInputElement;
const gradYearInput = document.getElementById('grad-year') as HTMLInputElement;
const workExperienceInput = document.getElementById('work-experience') as HTMLTextAreaElement;
const skillsInput = document.getElementById('skills') as HTMLTextAreaElement;

// Generate Resume button functionality
document.getElementById('generate-resume')!.addEventListener('click', () => {
    // Populate resume with values from the form
    resumeName.textContent = nameInput.value;
    resumeEmail.textContent = emailInput.value;
    resumeDegree.textContent = degreeInput.value;
    resumeSchool.textContent = schoolInput.value;
    resumeGradYear.textContent = gradYearInput.value;
    resumeWorkExperience.textContent = workExperienceInput.value;
    resumeSkills.textContent = skillsInput.value;

    // Display the resume
    document.getElementById('resume')!.style.display = 'block';
});

// Download PDF button functionality
downloadPdfButton.addEventListener('click', () => {
    const doc = new jsPDF();

    // Add content to the PDF
    doc.text(`Name: ${resumeName.textContent || 'Not provided'}`, 10, 10);
    doc.text(`Email: ${resumeEmail.textContent || 'Not provided'}`, 10, 20);
    doc.text(`Degree: ${resumeDegree.textContent || 'Not provided'}`, 10, 30);
    doc.text(`School: ${resumeSchool.textContent || 'Not provided'}`, 10, 40);
    doc.text(`Graduation Year: ${resumeGradYear.textContent || 'Not provided'}`, 10, 50);
    doc.text(`Work Experience: ${resumeWorkExperience.textContent || 'Not provided'}`, 10, 60);
    doc.text(`Skills: ${resumeSkills.textContent || 'Not provided'}`, 10, 70);

    // Save the PDF
    doc.save('resume.pdf');
});
