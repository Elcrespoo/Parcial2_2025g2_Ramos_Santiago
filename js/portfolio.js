// Portfolio filtering functionality

document.addEventListener("DOMContentLoaded", () => {
  initPortfolioFilter()
  initPortfolioAnimations()
})

function initPortfolioFilter() {
  const filterButtons = document.querySelectorAll("[data-filter]")
  const portfolioItems = document.querySelectorAll(".portfolio-item")

  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const filter = this.getAttribute("data-filter")

      // Update active button
      filterButtons.forEach((btn) => btn.classList.remove("active"))
      this.classList.add("active")

      // Filter portfolio items
      portfolioItems.forEach((item) => {
        const category = item.getAttribute("data-category")

        if (filter === "all" || category === filter) {
          item.style.display = "block"
          item.classList.add("animate__fadeIn")
        } else {
          item.style.display = "none"
          item.classList.remove("animate__fadeIn")
        }
      })
    })
  })
}

function initPortfolioAnimations() {
  // Add hover effects to portfolio cards
  const portfolioCards = document.querySelectorAll(".portfolio-item .card")

  portfolioCards.forEach((card) => {
    const overlay = card.querySelector(".card-overlay")

    card.addEventListener("mouseenter", () => {
      if (overlay) {
        overlay.style.opacity = "1"
      }
    })

    card.addEventListener("mouseleave", () => {
      if (overlay) {
        overlay.style.opacity = "0"
      }
    })
  })
}