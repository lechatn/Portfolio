document.addEventListener('DOMContentLoaded', function() {
    const goBackLink = document.querySelector('.go-back');

    goBackLink.addEventListener('click', function(event) {
        event.preventDefault();
        history.back();
    });
});