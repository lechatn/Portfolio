function DownloadPDF() {
    const link = document.createElement('a');
    link.href = './docs/CV_2024-11-12_Noé_LECHAT.pdf';
    link.download = 'CV_Noé_Lechat.pdf';
    link.click();
}


function DisplayBack(){
    event.preventDefault();
    document.getElementById('1').style.display = 'flex';
    document.getElementById('2').style.display = 'none';
}

function Refresh(){
    event.preventDefault();
    document.getElementById('2').style.display = '';
    document.getElementById('1').style.display = 'none';
}

function adjustBackCardHeight() {
    var skillsListDiv = document.querySelector('.skills-list div');
    var backCard = document.querySelector('.back-card');
    
    if (skillsListDiv && backCard) {
        backCard.style.height = skillsListDiv.offsetHeight + 'px';
    }
}

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
