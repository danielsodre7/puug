const modalDicas =document.querySelector('.modal_dicas')
const dicaJ = document.querySelectorAll('.dicas')
const textoJ = document.querySelectorAll('.texto_dica')

for (let dicas of dicaJ) {
    dicas.addEventListener("click", function(){
        const dicasId = dicas.getAttribute("id")
        modalDicas.classList.add('active')
        modalDicas.querySelector("iframe").src=`dicas/${dicasId}.html`
        
    })
}

/*
for (let texto_dica of textoJ) {
    texto_dica.querySelector('texto_dica', function(){
        const dicasId = dicas.getAttribute("id")
        textoJ.querySelector('.texto_dica').src=`dicas/${dicasId}.html`
        document.getElementById('.corpo_dica')
       

        
     })
}
*/

document.querySelector (".modal_dicas").addEventListener('click', function() {
    modalDicas.classList.remove("active")
    modalDicas.querySelector("iframe").src=""
} )

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

