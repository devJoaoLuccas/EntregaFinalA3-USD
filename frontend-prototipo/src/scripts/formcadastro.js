document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('cadastroForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        var nome = document.getElementById('nome').value;
        var username = document.getElementById('nome_de_usuario').value;
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        var confirmPassword = document.getElementById('password-confirm').value;
        var dataNascimento = document.getElementById('data_nascimento').value;

        if (password !== confirmPassword) {
            alert('As senhas não coincidem');
            return;
        }

        var emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.match(emailFormat)) {
            alert('Por favor, insira um email válido');
            return;
        }

        var hoje = new Date();
        var dataNasc = new Date(dataNascimento);
        var idade = hoje.getFullYear() - dataNasc.getFullYear();

    
        if (hoje.getMonth() < dataNasc.getMonth() || (hoje.getMonth() === dataNasc.getMonth() && hoje.getDate() < dataNasc.getDate())) {
            idade--;
        }


        if (idade < 10) {
            alert('É necessário ter pelo menos 10 anos para se cadastrar');
            return;
        }

        form.submit();
    });

    var cancelarButton = document.querySelector('.btn-cadastro[value="Cancelar"]');
  
    cancelarButton.addEventListener('click', function () {
       
        window.location.href = "/frontend-prototipo/src/pages/telaLogin.html";
    });

});

