function DownloadPDF() {
    const link = document.createElement('a');
    link.href = './docs/CV_2024-11-12_Noé_LECHAT.pdf';
    link.download = 'CV_Noé_Lechat.pdf';
    link.click();
}


function DisplayBack(cardid){
    event.preventDefault();
    console.log("card-"+cardid);
    document.getElementById("card-"+cardid).style.display = 'none';
    document.getElementById("back-card-"+cardid).style.display = 'flex';

    
}

function Refresh(cardid){
    event.preventDefault();
    document.getElementById("back-card-"+cardid).style.display = 'none';
    document.getElementById("card-"+cardid).style.display = '';
}


document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    const alertContainer = document.getElementById('alert-container');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        const formData = new FormData(form);

        fetch(form.action, {
            method: form.method,
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                showAlert('Merci pour votre message !', 'alert-success'); // Show a success message
                form.reset(); // Reset the form
            } else {
                showAlert('Une erreur est survenue. Veuillez réessayer.', 'alert-error'); // Show an error message
            }
        }).catch(error => {
            showAlert('Une erreur est survenue. Veuillez réessayer.', 'alert-error'); // Show an error message
        });
    });

    function showAlert(message, className) {
        const alert = document.createElement('div');
        alert.className = `alert ${className}`;
        alert.textContent = message;
        alertContainer.appendChild(alert);

        // Fade in the alert
        setTimeout(() => {
            alert.style.opacity = 1;
        }, 10);

        // Remove the alert after 3 seconds
        setTimeout(() => {
            alert.style.opacity = 0;
            setTimeout(() => {
                alert.remove();
            }, 500);
        }, 3000);
    }
});


document.addEventListener("DOMContentLoaded", function() {
    var navSkill = document.getElementById("nav-skill");
    var skillsSection = document.getElementById("skills");
    var navbarHeight = document.querySelector(".header").offsetHeight;

    navSkill.addEventListener("click", function(event) {
        event.preventDefault();
        window.scrollTo({
            top: skillsSection.offsetTop - navbarHeight,
            behavior: "smooth"
        });
    });
});






function adjustBackCardHeight() {
    var skillsListDivs = document.querySelectorAll('.skills-list div:not(.back-card)');
    var backCards = document.querySelectorAll('.back-card');
    
    if (skillsListDivs.length && backCards.length) {
        skillsListDivs.forEach(function(skillsListDiv, index) {
            if (backCards[index]) {
                backCards[index].style.width = skillsListDiv.offsetWidth + 'px';
                backCards[index].style.height = skillsListDiv.offsetHeight + 'px';
            }
        });
    }

    var softSkillsListDivs = document.querySelectorAll('.container-soft-skills .skills-list div:not(.back-card)');
    var softBackCards = document.querySelectorAll('.container-soft-skills .back-card');
    
    if (softSkillsListDivs.length && softBackCards.length) {
        softSkillsListDivs.forEach(function(softSkillsListDiv, index) {
            if (softBackCards[index]) {
                softBackCards[index].style.width = softSkillsListDiv.offsetWidth + 'px';
                softBackCards[index].style.height = softSkillsListDiv.offsetHeight + 'px';
            }
        });
    }
}

// Fonction de debounce pour limiter le nombre d'appels à adjustBackCardHeight
function debounce(func, wait) {
    let timeout;
    return function() {
        clearTimeout(timeout);
        timeout = setTimeout(func, wait);
    };
}

// Désactiver les animations avant de recharger la page
function disableAnimations() {
    const style = document.createElement('style');
    style.innerHTML = `
        * {
            transition: none !important;
            animation: none !important;
        }
    `;
    document.head.appendChild(style);
}

// Appeler la fonction pour ajuster la hauteur des back-cards
document.addEventListener('DOMContentLoaded', adjustBackCardHeight);

// Ajuster la hauteur des back-cards lors du redimensionnement de la fenêtre avec debounce
window.addEventListener('resize', debounce(adjustBackCardHeight, 100));

// Recharger la page lorsque la taille de l'écran change sans animation
let initialWidth = window.innerWidth;
window.addEventListener('resize', function() {
    if (Math.abs(window.innerWidth - initialWidth) > 50) { // Vérifie si la largeur a changé de manière significative
        disableAnimations();
        location.reload();
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.getElementById('burger-menu');
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.navbar a');

    burgerMenu.addEventListener('click', function() {
        navbar.classList.toggle('active');
    });

    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            navbar.classList.remove('active');
        });
    });

    // Ajouter des écouteurs d'événements pour les boutons "Voir plus"
    const viewMoreButtons = document.querySelectorAll('.read');
    viewMoreButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            adjustBackCardHeight();
        });
    });

    // Recalculer les dimensions des back-cards à chaque interaction avec l'écran
    window.addEventListener('scroll', adjustBackCardHeight);
    window.addEventListener('touchmove', adjustBackCardHeight);
    window.addEventListener('touchend', adjustBackCardHeight);
});