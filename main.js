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

function adjustBackCardHeight() {
    var skillsListDivs = document.querySelectorAll('.skills-list div:not(.back-card)');
    var backCards = document.querySelectorAll('.back-card');
    
    if (skillsListDivs.length && backCards.length) {
        skillsListDivs.forEach(function(skillsListDiv, index) {
            if (backCards[index]) {
                backCards[index].style.height = skillsListDiv.offsetHeight + 'px';
            }
        });
    }

    var softSkillsListDivs = document.querySelectorAll('.container-soft-skills .skills-list div:not(.back-card)');
    var softBackCards = document.querySelectorAll('.container-soft-skills .back-card');
    
    if (softSkillsListDivs.length && softBackCards.length) {
        softSkillsListDivs.forEach(function(softSkillsListDiv, index) {
            if (softBackCards[index]) {
                softBackCards[index].style.height = softSkillsListDiv.offsetHeight + 'px';
            }
        });
    }
}

// Appeler la fonction pour ajuster la hauteur des back-cards
adjustBackCardHeight();

// Ajuster la hauteur des back-cards lors du redimensionnement de la fenêtre
window.addEventListener('resize', adjustBackCardHeight);

document.addEventListener('DOMContentLoaded', adjustBackCardHeight);
window.addEventListener('resize', adjustBackCardHeight);


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
