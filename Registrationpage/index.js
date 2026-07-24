const email = document.getElementById("email");
const name = document.getElementById("name");
const password = document.getElementById("password");
const btn = document.getElementById("btn");
btn.addEventListener("click", (e)=>{
    e.preventDefault();
    console.log("email.value");
    console.log("name.value");
    console.log("password.value");
    const val = email.innerText;
    console.log(val);
    const innerdiv = document.createElement("div");
    innerdiv.innertext = '${} ${} ${}';
    div.appendChild(innerdiv);
})