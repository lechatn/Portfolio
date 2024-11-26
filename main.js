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
    document.getElementById("back-card-"+cardid).style.minHeight = '300px';

    
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

});
