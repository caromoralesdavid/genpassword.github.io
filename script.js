document.getElementById('generate-btn').addEventListener('click', generatePassword);
document.getElementById('copy-btn').addEventListener('click', copyPassword);

function generatePassword() {
    const length = document.getElementById('length').value;
    const includeLetters = document.getElementById('include-letters').checked;
    const includeNumbers = document.getElementById('include-numbers').checked;
    const includeSpecials = document.getElementById('include-specials').checked;
    
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const specials = '!@#$%^&*()_+[]{}|;:,.<>?';

    let characters = '';
    if (includeLetters) characters += letters;
    if (includeNumbers) characters += numbers;
    if (includeSpecials) characters += specials;

    let password = '';
    for (let i = 0; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    document.getElementById('password').value = password;
}

function copyPassword() {
    const passwordField = document.getElementById('password');
    const copyMessage = document.getElementById('copy-message');

    passwordField.select();
    passwordField.setSelectionRange(0, 99999); // For mobile devices
    document.execCommand('copy');

    copyMessage.classList.remove('hidden');

    setTimeout(() => {
        copyMessage.classList.add('hidden');
    }, 2000); // Ocultar mensaje después de 2 segundos
}
