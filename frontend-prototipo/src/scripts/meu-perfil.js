document.addEventListener("DOMContentLoaded", function () {
   
    var voltarLink = document.getElementById('voltar-link');

    
    voltarLink.addEventListener('click', function (event) {
        event.preventDefault();

        window.location.href = "/frontend-prototipo/src/pages/plataformas.html";
    });
});
