// // res.js

// document.addEventListener("DOMContentLoaded", function () {
//     // Wait for the DOM to be fully loaded before executing the script

//     // Function to show an alert when hamburger menu is clicked
//     function showMenuAlert() {
//         alert('Hello! You clicked the hamburger menu.');
//     }

//     // Add click event listener to the hamburger menu icon
//     var hamMenuIcon = document.getElementById("hamMenu");
//     if (hamMenuIcon) {
//         hamMenuIcon.addEventListener("click", showMenuAlert);
//     }

//     // Additional functionality can be added here
//     // For example, handling form submissions, dynamic content updates, etc.
// });

// // Function to show a welcome alert
// function showWelcomeAlert() {
//     alert("Welcome to our Restaurant");
// }

// // Call the welcome alert function
// showWelcomeAlert();
// res.js

document.addEventListener("DOMContentLoaded", function () {
    // Wait for the DOM to be fully loaded before executing the script

    // Function to show an alert when hamburger menu is clicked
    function showMenuAlert() {
        alert('Hello! You clicked the hamburger menu.');
    }

    // Add click event listener to the hamburger menu icon
    var hamMenuIcon = document.getElementById("hamMenu");
    if (hamMenuIcon) {
        hamMenuIcon.addEventListener("click", showMenuAlert);
    }

    // Function to toggle the visibility of the navigation bar
    function toggleNavBar() {
        var navBar = document.getElementById("nv");
        if (navBar) {
            navBar.classList.toggle("visible");
        }
    }

    // Add click event listener to the navigation bar
    var navBar = document.getElementById("nv");
    if (navBar) {
        navBar.addEventListener("click", toggleNavBar);
    }

    // Function to dynamically update the page title
    function updatePageTitle(newTitle) {
        document.title = newTitle;
    }

    // Example: Update the page title after 3 seconds
    setTimeout(function () {
        updatePageTitle("Smash the Hunger - Welcome!");
    }, 3000);

    // Function to display a thank you message when the contact form is submitted
    function showThankYouMessage() {
        alert('Thank you for reaching out! We will get back to you soon.');
    }

    // Add submit event listener to the contact form
    var contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent the default form submission
            showThankYouMessage();
        });
    }

    // Additional functionality can be added here
    // For example, handling form submissions, dynamic content updates, etc.
});

// Function to show a welcome alert
function showWelcomeAlert() {
    alert("Welcome to our Restaurant");
}

// Call the welcome alert function
showWelcomeAlert();
