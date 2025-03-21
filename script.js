document.getElementById("searchBtn").addEventListener("click", function() {
    document.getElementById("messageBox").style.display = "block";
    document.getElementById("overlay").style.display = "block";
});

document.querySelector(".close-btn").addEventListener("click", function() {
    document.getElementById("messageBox").style.display = "none";
    document.getElementById("overlay").style.display = "none";
});
document.addEventListener("DOMContentLoaded", function () {
    let popup = document.getElementById("welcome-popup");
    let closeBtn = document.getElementById("close-popup");

    // Check if user has visited before
    if (!localStorage.getItem("visitedBefore")) {
        popup.classList.add("show"); // Show popup
        localStorage.setItem("visitedBefore", "true"); // Mark as visited
    }

    // Close popup on button click
    closeBtn.addEventListener("click", function () {
        popup.classList.remove("show");
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    hamburger.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });

    // Close menu when clicking outside
    document.addEventListener("click", function (event) {
        if (!hamburger.contains(event.target) && !navLinks.contains(event.target)) {
            navLinks.classList.remove("active");
        }
    });
});

// order code 



// contact.html 

