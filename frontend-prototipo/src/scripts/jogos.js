document.addEventListener("DOMContentLoaded", function () {
    // Adiciona um ouvinte de evento para cada botão de avaliar
    var buttons = document.querySelectorAll(".class-container-button button");

    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            // Obtém o título do jogo associado a esse botão
            var cardContainer = this.closest(".card-container");
            
            if (cardContainer) {
                var gameTitleElement = cardContainer.querySelector(".card-container-infos h2");
                
                if (gameTitleElement) {
                    var gameTitle = gameTitleElement.innerText;
                    
                    // Redireciona para a página de avaliação, passando o título como parâmetro
                    window.location.href = "pagina-de-avaliacao.html?jogo=" + encodeURIComponent(gameTitle);
                }
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
            // Seleciona os links do dropdown
            var dropdownLinks = document.querySelectorAll('.dropdown-link');

            // Adiciona um ouvinte de evento de clique a cada link
            dropdownLinks.forEach(function (link) {
                link.addEventListener('click', function (event) {
                    // Impede o comportamento padrão de redirecionar para a página
                    event.preventDefault();

                    // Adiciona ou remove a classe 'ativo' para mostrar ou esconder o dropdown
                    var dropdownContent = this.parentElement.querySelector('.cabecalho-dropdown-content');
                    dropdownContent.classList.toggle('ativo');
                });
            });
        });
