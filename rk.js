function register(){
    let email = document.getElementById('email').value;
    let psw = document.getElementById('psw').value;
    let pswRepeat = document.getElementById('psw-repeat').value;
    localStorage.setItem(email,psw);
    console.log(email,psw,localStorage.getItem(email))
}

function login() {
    let email = document.getElementById('email').value;
    let psw = document.getElementById('psw').value;
    let pswReal = localStorage.getItem(email);

    if (!pswReal || psw !== pswReal){
        alert('Ваш логин или пароль неправильный');
        return;
    }

    localStorage.setItem('login', "true");
    window.location.href = 'index.html';
}
