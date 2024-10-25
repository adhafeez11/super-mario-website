// script.js

// Function to handle the contact form submission
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const submitButton = document.querySelector("button[type='submit']");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent default form submission

        // Collect form data
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // Display a simple alert (you can replace this with actual form processing logic)
        alert(`Thank you for your message, ${name}! We will get back to you at ${email}.`);

        // Clear the form fields
        form.reset();
    });

    // Gallery image click event to show a larger image
    const galleryImages = document.querySelectorAll('.gallery img');
    galleryImages.forEach((img) => {
        img.addEventListener('click', () => {
            showModal(img.src, img.alt);
        });
    });
});

// Function to show a modal with the clicked image
function showModal(imageSrc, imageAlt) {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `
        <span class="close" onclick="closeModal()">&times;</span>
        <img class="modal-content" src="${imageSrc}" alt="${imageAlt}">
        <div class="caption">${imageAlt}</div>
    `;
    document.body.appendChild(modal);
}

// Function to close the modal
function closeModal() {
    const modal = document.querySelector('.modal');
    if (modal) {
        modal.remove();
    }
}
