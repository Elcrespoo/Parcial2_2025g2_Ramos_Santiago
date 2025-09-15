// Main JavaScript file for CoderHub.run

document.addEventListener("DOMContentLoaded", () => {
  // Initialize animations
  initScrollAnimations()
  initNavbarScroll()
  initFormValidation()

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

// Form validation
function initFormValidation() {
  const forms = document.querySelectorAll(".needs-validation")

  forms.forEach((form) => {
    form.addEventListener("submit", (event) => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      } else {
        event.preventDefault()
        showSuccessMessage()
      }

      form.classList.add("was-validated")
    })
  })
}

// Show success message
function showSuccessMessage() {
  const alert = document.createElement("div")
  alert.className = "alert alert-success alert-dismissible fade show position-fixed"
  alert.style.top = "100px"
  alert.style.right = "20px"
  alert.style.zIndex = "9999"
  alert.innerHTML = `
        <strong>¡Mensaje enviado!</strong> Nos pondremos en contacto contigo pronto.
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `

  document.body.appendChild(alert)

  setTimeout(() => {
    alert.remove()
  }, 5000)
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
