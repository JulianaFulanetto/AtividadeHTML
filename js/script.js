// trocaTema = () => {
    // alert("mudei o tema e você não viu")
    // const html = document.documentElement

    //document.querySelector("body").style.background = "pink" // dentro do documento pesquise no elemento desejada e troque o estilo 
    
//     document.documentElement.classList.toggle("light");

// const isLight= document.documentElement.classList.contains("light");

// const imagem - isLight ? "../img/eu.jpg" : "../img/eudark.jpg Aula03/js/script.js"

// document.querySelector("#perfil img").
// setAttribute("src", imagem);


trocaTema = () => {
    //  const html = document.documentElement;
    
    //  document.querySelector("body").style.background = "pink"
    
     document.documentElement.classList.toggle("light");
    
     const isLight = document.documentElement.classList.contains("light");
     const imagem = isLight ? "./img/eu.jpg" : "./img/eudark.jpg";
    const altdesc = isLight ? "uma garota de cabelo vermelho" : "uma garota de cabelo preto"
     document.querySelector("#perfil img").setAttribute("src", imagem);
     document.querySelector("#perfil img").setAttribute("alt", altdesc);
    }
    