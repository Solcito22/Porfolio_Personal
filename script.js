//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    let skills = document.getElementById("skills");
    let distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 450){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("java");
        habilidades[3].classList.add("sql");
        habilidades[4].classList.add("bootstrap");
        habilidades[5].classList.add("illustrator");
        habilidades[6].classList.add("photoshop");
        habilidades[7].classList.add("autodidacta");
        habilidades[8].classList.add("comunicacion");
        habilidades[9].classList.add("trabajo");
        habilidades[10].classList.add("creatividad");
        habilidades[11].classList.add("dedicacion");
        habilidades[12].classList.add("compromiso");  
    }
}

//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 

//funcion que muestre el mensaje de las redes sociales
function mostrarMensaje(event){
    const redSocial = event.currentTarget.dataset.redSocial;
    const isEmail = event.target.getAttribute('data-email');
    //alert("¡Próximamente en " + redSocial + "!");//

// Verifica si es un enlace de redes sociales o de correo electrónico y muestra el mensaje correspondiente
if (redSocial) {
    alert(` ${redSocial} Próximamente.`);
} else if (isEmail || event.target.getAttribute('data-email')) {
    alert('Por favor, complete el formulario.');
}
}











