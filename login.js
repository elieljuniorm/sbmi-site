document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const saveCredentialsCheckbox = document.getElementById('saveCredentials');
    const loginButton = document.getElementById('loginButton');
    const errorMessage = document.getElementById('errorMessage');
    
    // Elementos do botão de mostrar senha
    const togglePasswordBtn = document.querySelector('.toggle-password');
    const eyeOpen = document.querySelector('.eye-open');
    const eyeClosed = document.querySelector('.eye-closed');

    // Carregar credenciais salvas se existirem
    loadSavedCredentials();

    // Função para alternar visibilidade da senha
    if (togglePasswordBtn) {
        togglePasswordBtn.addEventListener('click', function() {
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            
            // Alternar ícones
            if (type === 'password') {
                eyeOpen.style.display = 'block';
                eyeClosed.style.display = 'none';
                togglePasswordBtn.setAttribute('aria-label', 'Mostrar senha');
            } else {
                eyeOpen.style.display = 'none';
                eyeClosed.style.display = 'block';
                togglePasswordBtn.setAttribute('aria-label', 'Ocultar senha');
            }
        });
    }

    // Validação de senha em tempo real
    passwordInput.addEventListener('input', validatePassword);

    function validatePassword() {
        const password = passwordInput.value;
        const requirements = {
            minLength: password.length >= 8,
            hasUpperCase: /[A-Z]/.test(password),
            hasLowerCase: /[a-z]/.test(password),
            hasNumber: /[0-9]/.test(password),
            hasSpecialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password)
        };

        // Remover classe de erro se todas as requirements forem atendidas
        if (Object.values(requirements).every(Boolean)) {
            passwordInput.classList.remove('error');
            return true;
        } else {
            passwordInput.classList.add('error');
            return false;
        }
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function showError(message) {
        errorMessage.textContent = message;
        errorMessage.classList.add('show');
    }

    function hideError() {
        errorMessage.classList.remove('show');
    }

    // Simular chamada à API
    async function simulateLogin(email, password) {
        // Simulando delay de rede
        await new Promise(resolve => setTimeout(resolve, 1500));

        // Credenciais válidas para teste
        const validCredentials = [
            { email: 'admin@teste.com', password: 'Senha@123' }
        ];

        return validCredentials.some(cred => 
            cred.email === email && cred.password === password
        );
    }

    function saveCredentials(email, password) {
        if (saveCredentialsCheckbox.checked) {
            localStorage.setItem('savedEmail', email);
            localStorage.setItem('savedPassword', btoa(password));
            localStorage.setItem('saveCredentials', 'true');
        } else {
            localStorage.removeItem('savedEmail');
            localStorage.removeItem('savedPassword');
            localStorage.removeItem('saveCredentials');
        }
    }

    function loadSavedCredentials() {
        const savedEmail = localStorage.getItem('savedEmail');
        const savedPassword = localStorage.getItem('savedPassword');
        const savePref = localStorage.getItem('saveCredentials');

        if (savedEmail && savedPassword && savePref === 'true') {
            emailInput.value = savedEmail;
            passwordInput.value = atob(savedPassword);
            saveCredentialsCheckbox.checked = true;
        }
    }

    loginForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        hideError();

        const email = emailInput.value.trim();
        const password = passwordInput.value;

        // Validações
        if (!validateEmail(email)) {
            showError('Por favor, insira um e-mail válido.');
            emailInput.focus();
            return;
        }

        if (!validatePassword()) {
            showError('A senha deve ter no mínimo 8 caracteres, incluindo 1 letra maiúscula, 1 minúscula, 1 número e 1 caractere especial.');
            passwordInput.focus();
            return;
        }

        // Desabilitar botão durante o processamento
        loginButton.disabled = true;
        loginButton.textContent = 'Verificando...';

        try {
            // Simular chamada à API
            const isValid = await simulateLogin(email, password);

            if (isValid) {
                // Salvar credenciais se solicitado
                saveCredentials(email, password);

                // Simular redirecionamento para rota base
                showError('Login realizado com sucesso! Redirecionando...');
                errorMessage.style.background = 'rgba(40, 167, 69, 0.2)';
                errorMessage.style.border = '1px solid rgba(40, 167, 69, 0.5)';
                errorMessage.style.color = '#ffffff';

                // Simular redirecionamento após 2 segundos
                setTimeout(() => {
                    window.location.href = '/'; // Rota base após login
                }, 2000);
            } else {
                showError('E-mail ou senha inválidos.');
                loginButton.disabled = false;
                loginButton.textContent = 'Entrar';
            }
        } catch (error) {
            showError('Erro ao conectar com o servidor. Tente novamente.');
            loginButton.disabled = false;
            loginButton.textContent = 'Entrar';
        }
    });

    // Limpar mensagem de erro ao começar a digitar
    emailInput.addEventListener('input', hideError);
    passwordInput.addEventListener('input', hideError);
});