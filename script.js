// efeito de digitando
const title = document.querySelector(".title-h2");
activeEffect(title);

function activeEffect(elemento) {
  const arrTexto = elemento.innerHTML.split("");
  elemento.innerHTML = "";
  arrTexto.forEach((letra, i) => {
    setTimeout(() => {
      elemento.innerHTML += letra;
    }, 75 * i);
  });
}


const activeMenu = document.querySelector(".fa-solid");
const navMenu = document.querySelector(".navigation");
activecionMenu();

function activecionMenu() {
 
  activeMenu.addEventListener("click", () => { 
   const btnClose = activeMenu.classList.toggle("fa-x");

    navMenu.classList.toggle("active");

    if(!btnClose){
    navMenu.classList.toggle("close");
    }else{
      
    }
  });
}



