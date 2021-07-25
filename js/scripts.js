let menuPrincipal = document.querySelectorAll('ul li');

for (element of menuPrincipal){
    element.addEventListener('mouseover', (event)=>{
    
       event.target.style.border = "2px solid #c94444";
        event.target.style.background = "url(../imagem/pata.svg)";
        event.target.style.backgroundRepeat = "repeat-y";
        event.target.style.backgroundPosition = "center center";
        //event.target.style.backgroundColor = "#c94444";


        

        setTimeout(function() {
            event.target.style.background = "";            
        }, 400)

        setTimeout(function() {
            event.target.style.border = "";
        }, 800)


    }, false);
}




const modalDicas =document.querySelector('.modal_dicas')
const dicaJ = document.querySelectorAll('.dicas')
const textoJ = document.querySelectorAll('.texto_dica')

document.querySelector (".modal_dicas").addEventListener('click', function() {
    modalDicas.classList.remove("active")
    modalDicas.querySelector("iframe").src=""
} )

for (let dicas of dicaJ) {
    dicas.addEventListener("click", function(){
        const dicasId = dicas.getAttribute("id")
        modalDicas.classList.add('active')
        modalDicas.querySelector("iframe").src=`dicas/${dicasId}.html`
        
    })
}
/*
(function(){
    (document).on( 'scroll', function(){
        if ((window).scrollTop() > 100) {
            ('.dicas').addClass('show');
        } else {
            ('.dicas').removeClass('show');
        }
    });
    ('.dicas').on('click', scrollToTop);
});
 
function scrollToTop() {
    verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
    element = ('body');
    offset = element.offset();
    offsetTop = offset.top;
    ('html, body').animate({scrollTop: offsetTop}, 600, 'linear').animate({scrollTop:25},200).animate({scrollTop:0},150) .animate({scrollTop:0},50);
}
*/


