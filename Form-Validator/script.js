const userName = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const reEnterPassword = document.getElementById('re-enter-password');
const submitButton = document.getElementById('submit-button');

submitButton.addEventListener('click', (e)=> {
    e.preventDefault()
    if(userName.value.trim() === ""){
        alert(`Please enter a username!`);
        return;
    }
    if (email.value.trim() === ""){
        alert(`Please enter a email!`);
        return;
    }
    if (!email.value.includes('@')){
        email.classList.add('error');
    }

    if (password.value.trim() === ""){
        alert(`Please enter a password`);
        return;
    }
    if (reEnterPassword.value.trim()=== ""){
        alert(`Please a enter Re-enter password`);
        return;
    }

    if(password.value !== reEnterPassword.value){
        alert(`Passwords do not match`);
        return;
    }

    
});