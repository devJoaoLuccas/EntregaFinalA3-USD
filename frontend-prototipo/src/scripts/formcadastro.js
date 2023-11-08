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

        // Verifica se a senha e a confirmação de senha são iguais
        if (password !== confirmPassword) {
            alert('As senhas não coincidem');
            return;
        }

        // Verifica se o formato do email é válido
        var emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.match(emailFormat)) {
            alert('Por favor, insira um email válido');
            return;
        }

        var hoje = new Date();
        var dataNasc = new Date(dataNascimento);
        var idade = hoje.getFullYear() - dataNasc.getFullYear();

        // Se o aniversário ainda não ocorreu neste ano, subtrai 1 da idade
        if (hoje.getMonth() < dataNasc.getMonth() || (hoje.getMonth() === dataNasc.getMonth() && hoje.getDate() < dataNasc.getDate())) {
            idade--;
        }

        // Verifica se a idade é menor que 10
        if (idade < 10) {
            alert('É necessário ter pelo menos 10 anos para se cadastrar');
            return;
        }

        form.submit();
    });
});