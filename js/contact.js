// Contact form functionality

document.addEventListener("DOMContentLoaded", () => {
  initContactForm()
  initContactAnimations()
})

function initContactForm() {
  const form = document.getElementById("contactForm")

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault()

      if (form.checkValidity()) {
        handleFormSubmission(form)
      } else {
        form.classList.add("was-validated")
        showValidationErrors()
      }
    })

    // Real-time validation
    const inputs = form.querySelectorAll("input, select, textarea")
    inputs.forEach((input) => {
      input.addEventListener("blur", function () {
        validateField(this)
      })

      input.addEventListener("input", function () {
        if (this.classList.contains("is-invalid")) {
          validateField(this)
        }
      })
    })
  }
}

function validateField(field) {
  const isValid = field.checkValidity()

  if (isValid) {
    field.classList.remove("is-invalid")
    field.classList.add("is-valid")
  } else {
    field.classList.remove("is-valid")
    field.classList.add("is-invalid")
  }
}

function handleFormSubmission(form) {
  const submitButton = form.querySelector('button[type="submit"]')
  const originalText = submitButton.innerHTML

  // Show loading state
  submitButton.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Enviando...'
  submitButton.disabled = true

  // Simulate form submission (replace with actual API call)
  setTimeout(() => {
    // Reset button
    submitButton.innerHTML = originalText
    submitButton.disabled = false

    // Show success message
    showSuccessMessage()

    // Reset form
    form.reset()
    form.classList.remove("was-validated")

    // Remove validation classes
    const fields = form.querySelectorAll(".is-valid, .is-invalid")
    fields.forEach((field) => {
      field.classList.remove("is-valid", "is-invalid")
    })
  }, 2000)
}

function showSuccessMessage() {
  const alert = document.createElement("div")
  alert.className =
    "alert alert-success alert-dismissible fade show position-fixed animate__animated animate__fadeInRight"
  alert.style.top = "100px"
  alert.style.right = "20px"
  alert.style.zIndex = "9999"
  alert.style.minWidth = "300px"
  alert.innerHTML = `
        <div class="d-flex align-items-center">
            <i class="fas fa-check-circle me-2 fs-4"></i>
            <div>
                <strong>¡Mensaje enviado exitosamente!</strong><br>
                <small>Nos pondremos en contacto contigo en menos de 24 horas.</small>
            </div>
        </div>
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `

  document.body.appendChild(alert)

  setTimeout(() => {
    alert.classList.add("animate__fadeOutRight")
    setTimeout(() => {
      if (alert.parentNode) {
        alert.remove()
      }
    }, 500)
  }, 5000)
}

function showValidationErrors() {
  const alert = document.createElement("div")
  alert.className =
    "alert alert-danger alert-dismissible fade show position-fixed animate__animated animate__fadeInRight"
  alert.style.top = "100px"
  alert.style.right = "20px"
  alert.style.zIndex = "9999"
  alert.style.minWidth = "300px"
  alert.innerHTML = `
        <div class="d-flex align-items-center">
            <i class="fas fa-exclamation-triangle me-2 fs-4"></i>
            <div>
                <strong>Por favor corrige los errores</strong><br>
                <small>Revisa los campos marcados en rojo.</small>
            </div>
        </div>
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `

  document.body.appendChild(alert)

  setTimeout(() => {
    alert.classList.add("animate__fadeOutRight")
    setTimeout(() => {
      if (alert.parentNode) {
        alert.remove()
      }
    }, 500)
  }, 4000)
}

function initContactAnimations() {
  // Add hover effects to contact cards
  const contactCards = document.querySelectorAll(".contact-card")

  contactCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-10px)"
      this.style.boxShadow = "0 15px 35px rgba(0, 0, 0, 0.1)"
    })

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)"
      this.style.boxShadow = "none"
    })
  })

  // Animate form fields on focus
  const formFields = document.querySelectorAll(".form-control, .form-select")

  formFields.forEach((field) => {
    field.addEventListener("focus", function () {
      this.parentElement.classList.add("field-focused")
    })

    field.addEventListener("blur", function () {
      this.parentElement.classList.remove("field-focused")
    })
  })
}

// Add contact-specific styles
const contactStyles = `
    .contact-card {
        background: white;
        border-radius: 12px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
        transition: all 0.3s ease;
        border: 1px solid #e5e7eb;
    }
    
    .contact-card:hover {
        border-color: var(--primary-color);
    }
    
    .contact-icon {
        transition: transform 0.3s ease;
    }
    
    .contact-card:hover .contact-icon {
        transform: scale(1.1);
    }
    
    .map-container {
        height: 400px;
        border: 3px solid #e5e7eb;
    }
    
    .field-focused {
        transform: scale(1.02);
        transition: transform 0.2s ease;
    }
    
    .form-control:focus,
    .form-select:focus {
        border-color: var(--primary-color);
        box-shadow: 0 0 0 0.2rem rgba(37, 99, 235, 0.25);
    }
    
    .is-valid {
        border-color: #28a745 !important;
    }
    
    .is-invalid {
        border-color: #dc3545 !important;
    }
    
    .accordion-button:not(.collapsed) {
        background-color: var(--primary-color);
        color: white;
    }
    
    .accordion-button:focus {
        box-shadow: 0 0 0 0.2rem rgba(37, 99, 235, 0.25);
    }
`

// Inject contact styles
const contactStyleSheet = document.createElement("style")
contactStyleSheet.textContent = contactStyles
document.head.appendChild(contactStyleSheet)
