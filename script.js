// ================================
// MOBILE MENU
// ================================

const menuBtn = document.getElementById("menuBtn");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {

    if (nav.style.display === "flex") {
        nav.style.display = "none";
    } else {
        nav.style.display = "flex";

        nav.style.position = "absolute";
        nav.style.top = "76px";
        nav.style.left = "0";
        nav.style.right = "0";

        nav.style.background = "#f5f2e9";

        nav.style.padding = "20px";

        nav.style.flexDirection = "column";

        nav.style.alignItems = "center";

        nav.style.borderBottom = "1px solid #d8d4c8";
    }

});


// ================================
// CLOSE MOBILE MENU AFTER CLICK
// ================================

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        if (window.innerWidth <= 650) {
            nav.style.display = "none";
        }

    });

});


// ================================
// EDUCATION VIEW DETAILS
// ================================

function toggleEducationDetails(button) {

    const details = button.parentElement.querySelector(
        ".education-details"
    );

    if (details.classList.contains("active")) {

        details.classList.remove("active");

        button.textContent = "View Details";

    } else {

        details.classList.add("active");

        button.textContent = "Hide Details";

    }

}


// ================================
// SIMPLE SCROLL ANIMATION
// ================================

const cards = document.querySelectorAll(
    ".skill-card, .project-card, .education-card, .achievement-card, .cert-card"
);

const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },

    {
        threshold: 0.12
    }

);


cards.forEach(card => {

    card.style.opacity = "0";

    card.style.transform = "translateY(20px)";

    card.style.transition =
        "opacity 0.6s ease, transform 0.6s ease";

    observer.observe(card);

});



// ================================
// CERTIFICATE LIGHTBOX
// ================================

const certModal = document.createElement("div");
certModal.className = "cert-modal";
certModal.innerHTML = `
    <div class="cert-modal-inner">
        <button class="cert-modal-close" aria-label="Close">✕</button>
        <img src="" alt="Certificate">
        <p class="cert-modal-caption"></p>
    </div>
`;
document.body.appendChild(certModal);

const certModalImg = certModal.querySelector("img");
const certModalCaption = certModal.querySelector(".cert-modal-caption");
const certModalClose = certModal.querySelector(".cert-modal-close");

document.querySelectorAll(".cert-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        certModalImg.src = btn.dataset.img;
        certModalCaption.textContent = btn.dataset.title || "";
        certModal.classList.add("active");
        document.body.style.overflow = "hidden";
    });
});

function closeCertModal() {
    certModal.classList.remove("active");
    document.body.style.overflow = "";
}

certModalClose.addEventListener("click", closeCertModal);

certModal.addEventListener("click", (e) => {
    if (e.target === certModal) closeCertModal();
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeCertModal();
});