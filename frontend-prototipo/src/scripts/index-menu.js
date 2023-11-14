document.addEventListener("DOMContentLoaded", function () {
   
    var perfilLink = document.getElementById('perfil-link');

    
    perfilLink.addEventListener('click', function (event) {
        event.preventDefault();

        window.location.href = "/frontend-prototipo/src/pages/meu-perfil.html";
    });

    var admLink = document.getElementById('adm-link');

    
    admLink.addEventListener('click', function (event) {
        event.preventDefault();

        window.location.href = "/frontend-prototipo/src/pages/painelAdministrador.html";
    });

    var sairLink = document.getElementById('sair-link');

    
    sairLink.addEventListener('click', function (event) {
        event.preventDefault();

        window.location.href = "/frontend-prototipo/src/pages/telaLogin.html";
    });

    var jogosLink = document.getElementById('link-jogos');

    
    jogosLink.addEventListener('click', function (event) {
        event.preventDefault();

        window.location.href = "/frontend-prototipo/src/pages/jogos.html";
    });

    var plataformasLink = document.getElementById('link-plataforma');

    
    plataformasLink.addEventListener('click', function (event) {
        event.preventDefault();

        window.location.href = "/frontend-prototipo/src/pages/plataformas.html";
    });

    var faleLink = document.getElementById('link-faleconosco');

    
    faleLink.addEventListener('click', function (event) {
        event.preventDefault();

        window.location.href = "/frontend-prototipo/src/pages/fale-conosco.html";
    });
});
