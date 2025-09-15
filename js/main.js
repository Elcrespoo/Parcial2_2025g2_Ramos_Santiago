// Main JavaScript file for CoderHub.run

document.addEventListener("DOMContentLoaded", () => {
  // Initialize animations
  initScrollAnimations()
  initNavbarScroll()

  // Add loading animation to elements
  const elements = document.querySelectorAll(".loading")
  elements.forEach((el, index) => {
    setTimeout(() => {
      el.classList.add("loaded")
    }, index * 100)
  })
})

// Scroll animations
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate")
      }
    })
  }, observerOptions)

  // Observe elements with scroll-animate class
  document.querySelectorAll(".scroll-animate").forEach((el) => {
    observer.observe(el)
  })
}

// Navbar scroll effect
function initNavbarScroll() {
  const navbar = document.querySelector(".navbar")

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.style.backgroundColor = "rgba(37, 99, 235, 0.95)"
    } else {
      navbar.style.backgroundColor = "var(--primary-color)"
    }
  })
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Add hover effects to cards
document.querySelectorAll(".card, .feature-card, .team-card").forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-10px)"
  })

  card.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0)"
  })
})
