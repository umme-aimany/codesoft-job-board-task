// script.js
const jobListings = [
    { id: 1, title: "Web Developer", description: "Full-stack web development position." },
    { id: 2, title: "Graphic Designer", description: "Create visually stunning designs for our clients." },
    { id: 3, title: "Data Analyst", description: "Analyze and interpret data to provide insights." },
    // Add more job listings here
];

const jobListingsSection = document.getElementById("job-listings");

jobListings.forEach(job => {
    const jobListing = document.createElement("div");
    jobListing.className = "job-listing";
    jobListing.innerHTML = `
        <h2 class="job-title">${job.title}</h2>
        <p class="job-description">${job.description}</p>
        <button class="apply-button" data-jobid="${job.id}">Apply</button>
    `;

    const applyButton = jobListing.querySelector(".apply-button");
    applyButton.addEventListener("click", () => {
        const jobId = applyButton.getAttribute("data-jobid");
        openApplicationForm(jobId);
    });

    jobListingsSection.appendChild(jobListing);
});

function openApplicationForm(jobId) {
    // Close any previously open forms
    const existingForm = document.querySelector(".application-form");
    if (existingForm) {
        existingForm.remove();
    }

    const form = document.createElement("div");
    form.className = "application-form";
    form.innerHTML = `
        <h2>Job Application</h2>
        <form>
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required><br><br>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required><br><br>
            <label for="resume">Resume:</label>
            <input type="file" id="resume" name="resume" accept=".pdf,.doc,.docx" required><br><br>
            <button type="submit">Submit Application</button>
        </form>
    `;

    form.querySelector("form").addEventListener("submit", (e) => {
        e.preventDefault();
        alert(`You have applied for the job with ID ${jobId}`);
        form.remove();
    });

    jobListingsSection.appendChild(form);
}
