document.addEventListener('DOMContentLoaded',function(){
     const estudantes = document.querySelectorAll(".estudante-container");
     //Para cada estudante, configura os eventos 
     estudantes.forEach(estudante=>{
          const imagem = estudante.querySelector(".imagem-estudante");
          const gifCard = estudante.querySelector(".gif-card");
          const gifImagem = estudante.querySelector(".gif-imagem");

          //Quando o mouse entra na imagem do estudante
          imagem.addEventListener('mouseenter',()=>{
               const gifSrc = imagem.getAttribute('data-gif');
               gifImagem.src= `./Assets/Gifs/${gifSrc}`;
               gifCard.style.display = "flex";
          });
          //Quando o mouse sai da imagem do estudante
          imagem.addEventListener("mouseleave", ()=>{
               gifCard.style.display = 'none';
          });
     });

     const urlParams = new URLSearchParams(window.location.search);
     if(urlParams.has('fromForms')){
          showLetterAnimation();//Mostrar animação do card
     }
});


function showLetterAnimation(){
     const overlay = document.getElementById("carta-overlay");
     overlay.style.display = 'flex'; //Mostrar Overlay

     //Configurar um timeOut para esconder o overlay apó 3s
     setTimeout(()=>{
          overlay.style.display = 'none';
          history.replaceState(null,null,window.location.pathname);
     },3000);

}


