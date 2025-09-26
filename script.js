// Elementos do DOM
const modalLogin = document.getElementById('modal-login');
const btnLogin = document.getElementById('btn-login');
const btnCadastro = document.getElementById('btn-cadastro');
const closeModal = document.querySelector('.close');
const linkCadastroModal = document.getElementById('link-cadastro-modal');
const paginaCadastro = document.getElementById('pagina-cadastro');
const linkLoginCadastro = document.getElementById('link-login-cadastro');
const mainContent = document.querySelector('main');
const header = document.querySelector('header');
const footer = document.querySelector('footer');

// Abrir modal de login
btnLogin.addEventListener('click', function() {
    modalLogin.style.display = 'flex';
});

// Fechar modal de login
closeModal.addEventListener('click', function() {
    modalLogin.style.display = 'none';
});

// Fechar modal ao clicar fora dele
window.addEventListener('click', function(event) {
    if (event.target === modalLogin) {
        modalLogin.style.display = 'none';
    }
});

// Ir para página de cadastro a partir do modal
linkCadastroModal.addEventListener('click', function(e) {
    e.preventDefault();
    modalLogin.style.display = 'none';
    mostrarPaginaCadastro();
});

// Ir para página de cadastro a partir do botão
btnCadastro.addEventListener('click', function() {
    mostrarPaginaCadastro();
});

// Voltar para login a partir da página de cadastro
linkLoginCadastro.addEventListener('click', function(e) {
    e.preventDefault();
    mostrarPaginaLogin();
});

// Função para mostrar página de cadastro
function mostrarPaginaCadastro() {
    mainContent.style.display = 'none';
    header.style.display = 'none';
    footer.style.display = 'none';
    paginaCadastro.style.display = 'block';
}

// Função para mostrar página principal (login)
function mostrarPaginaLogin() {
    mainContent.style.display = 'block';
    header.style.display = 'block';
    footer.style.display = 'block';
    paginaCadastro.style.display = 'none';
}

// Validação do formulário de cadastro
document.getElementById('form-cadastro').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const senha = document.getElementById('cadastro-senha').value;
    const confirmarSenha = document.getElementById('cadastro-confirmar-senha').value;
    
    if (senha !== confirmarSenha) {
        alert('As senhas não coincidem!');
        return;
    }
    
    // Simulação de cadastro bem-sucedido
    alert('Cadastro realizado com sucesso!');
    mostrarPaginaLogin();
});

// Validação do formulário de login
document.getElementById('form-login').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Simulação de login bem-sucedido
    alert('Login realizado com sucesso!');
    modalLogin.style.display = 'none';
});

// Adicionar produtos ao carrinho
const botoesComprar = document.querySelectorAll('.btn-comprar');
botoesComprar.forEach(botao => {
    botao.addEventListener('click', function() {
        const produto = this.parentElement.querySelector('h3').textContent;
        alert(`Produto "${produto}" adicionado ao carrinho!`);
    });
});

// Menu dropdown para dispositivos móveis
document.addEventListener('DOMContentLoaded', function() {
    const dropdown = document.querySelector('.dropdown');
    
    // Fechar dropdown ao clicar fora
    document.addEventListener('click', function(event) {
        if (!dropdown.contains(event.target)) {
            const dropdownContent = dropdown.querySelector('.dropdown-content');
            dropdownContent.style.display = 'none';
        }
    });
    
    // Controle do dropdown no mobile
    dropdown.addEventListener('click', function(event) {
        if (window.innerWidth <= 768) {
            event.preventDefault();
            const dropdownContent = this.querySelector('.dropdown-content');
            dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
        }
    });
});