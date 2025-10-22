document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");

    // Error Elements
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const subjectError = document.getElementById("subjectError");
    const messageError = document.getElementById("messageError");
    const successMessage = document.getElementById("successMessage");

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent default form submission

        // Reset errors
        nameError.textContent = "";
        emailError.textContent = "";
        subjectError.textContent = "";
        messageError.textContent = "";
        successMessage.style.display = "none";

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        let isValid = true;

        // Validate Name
        if (name === "") {
            nameError.textContent = "Name is required.";
            isValid = false;
        }

        // Validate Email
        if (email === "") {
            emailError.textContent = "Email is required.";
            isValid = false;
        } else if (!emailRegex.test(email)) {
            emailError.textContent = "Please enter a valid email address.";
            isValid = false;
        }

        // Validate Subject
        if (subject === "") {
            subjectError.textContent = "Subject is required.";
            isValid = false;
        }

        // Validate Message
        if (message === "") {
            messageError.textContent = "Message is required.";
            isValid = false;
        }

        // If form is valid
        if (isValid) {
            // Show success message
            successMessage.textContent = "Form submitted successfully!";
            successMessage.style.display = "block";

            // Reset form
            form.reset();
        }
    });
});