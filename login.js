document.addEventListener('DOMContentLoaded', function() {
    const loginContainer = document.getElementById('loginContainer');
    const signupContainer = document.getElementById('signupContainer');
    const signupLink = document.getElementById('signupLink');
    const loginLink = document.getElementById('loginLink');
    const forgotPasswordLink = document.getElementById('forgotPassword');

    signupLink.addEventListener('click', function(e) {
        e.preventDefault();
        toggleForms();
    });

    loginLink.addEventListener('click', function(e) {
        e.preventDefault();
        toggleForms();
    });

    function toggleForms() {
        loginContainer.classList.toggle('slide-in');
        signupContainer.classList.toggle('slide-in');
    }

    function toggleForms() {
        loginContainer.style.display = loginContainer.style.display === 'none' ? 'block' : 'none';
        signupContainer.style.display = signupContainer.style.display === 'none' ? 'block' : 'none';
    }

    forgotPasswordLink.addEventListener('click', function(e) {
        e.preventDefault();
        // Add functionality for forgot password here
    });

    function performLogin() {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const rememberMe = document.getElementById('rememberMe').checked;

        // Here you can implement your login logic
        // For demo purposes, let's assume successful login and redirect to home page
        console.log('Logging in...');
        console.log('Username:', username);
        console.log('Password:', password);
        console.log('Remember Me:', rememberMe);

        // Redirect to home page after successful login
        window.location.href = 'home.html';
    }

    function performSignup() {
        const username = document.getElementById('signupUsername').value;
        const email = document.getElementById('signupEmail').value;
        const password = document.getElementById('signupPassword').value;

        // Here you can implement your signup logic
        // For demo purposes, let's assume successful signup and redirect to home page
        console.log('Signing up...');
        console.log('Username:', username);
        console.log('Email:', email);
        console.log('Password:', password);

        // Redirect to home page after successful signup
        window.location.href = 'home.html';
    }

    document.getElementById('loginForm').addEventListener('submit', function(e) {
        e.preventDefault();
        performLogin();
    });

    document.getElementById('signupForm').addEventListener('submit', function(e) {
        e.preventDefault();
        performSignup();
    });
});
