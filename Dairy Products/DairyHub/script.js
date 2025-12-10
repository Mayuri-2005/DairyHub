// Feedback Star Rating
const stars = document.querySelectorAll(".star");
const ratingValue = document.getElementById("ratingValue");

stars.forEach((star, index) => {
  star.addEventListener("click", () => {
    ratingValue.value = star.dataset.value;

    stars.forEach((s, i) => {
      s.classList.toggle("active", i <= index);
    });
  });
});

// Contact Form Submission
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you! Your message has been sent.");
  this.reset();
});

// Feedback Form Submission
document.getElementById("feedbackForm").addEventListener("submit", function (e) {
  e.preventDefault();
  if (ratingValue.value === "0") {
    alert("Please select a rating before submitting.");
    return;
  }
  alert("Thanks for your feedback!");
  this.reset();
  stars.forEach((s) => s.classList.remove("active"));
  ratingValue.value = "0";
});

// Responsive Navbar Toggle
const nav = document.querySelector(".navbar nav");
const toggleBtn = document.createElement("button");
toggleBtn.classList.add("menu-toggle");
toggleBtn.innerHTML = "☰";
document.querySelector(".navbar").prepend(toggleBtn);

toggleBtn.addEventListener("click", () => {
  nav.classList.toggle("show");
});

// Signup Form Submission (simple alert)
document.getElementById("signupForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Account created successfully!");
  this.reset();
});