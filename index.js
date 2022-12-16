document.addEventListener("DOMContentLoaded", function(e) {
   console.log("onload");
   setContent();
});

const getRes = async() => {
    const res = await fetch('https://api.lorem.space/image/album?w=150&h=150');
    if (!res.ok) {
        throw new Error(`status: ${res.status}`);
    }

    return await res.json(); 
}

function getImg() {
    
    getRes().then(data =>  {
        console.log(data);
    })

}

function logout() {
    localStorage.setItem('login', "false");
    window.location.href = 'login.html';
}

function setContent() {
    let login = localStorage.getItem('login');
    console.log(login);
    if (login != "true") {
        alert("Вы не прошли авторизацию");
        window.location.href = 'login.html';
        return;
    }
    console.log(login, "true");
    let url = getImg();
}
