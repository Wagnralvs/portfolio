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

const input = document.querySelector("input");
const body = document.querySelector(".body");

OnOffMode()
function OnOffMode (){
  input.addEventListener('input', ()=>{
    const onWhite = body.classList.toggle("modeWhite");
    
    if(onWhite){
      document.documentElement.style.setProperty('--color-primary', 'white');
      document.documentElement.style.setProperty('--color-tertiary', 'black');
      document.documentElement.style.setProperty('--color-secondary','rgb(100, 114, 129)');
      document.documentElement.style.setProperty('--color-model','rgb(57, 57, 57, 0.1)');
      document.documentElement.style.setProperty('--color-model-project', 'rgba(86, 86, 86, 0.2)');
    } else { 
      document.documentElement.style.removeProperty('--color-primary');
      document.documentElement.style.removeProperty('--color-tertiary');
      document.documentElement.style.removeProperty('--color-secondary');
      document.documentElement.style.removeProperty( '--color-model');
      document.documentElement.style.removeProperty('--color-model-projectl')
    }
  })
  
  
}


