// fazer uma referencia a cada botão de navegação
const start = document.getElementById("avancar");
const Login = document.getElementsByTagName("input")[3];
const voltar = document.getElementById("voltar");

if(start!=null){
    start.onclick = ()=>{
        window.location.href="login.html";
    }
}

    if(Login!=null){
    Login.onclick = ()=>{
        window.location.href="registar.html";
    }
}

    if(voltar!=null){
    voltar.onclick = ()=>{
        window.location.href="index.html";
    }
}