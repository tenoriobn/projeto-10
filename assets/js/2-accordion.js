const accordionItem = document.querySelectorAll('.accordion');

accordionItem.forEach(accordion => {
    const accordionTexto = accordion.querySelector('.accordion__texto');

    accordion.addEventListener('click', () => {
        removeClass(accordionItem);
        removeActiveAccordionTexto()
        accordion.classList.toggle('active');

        if(accordion.classList.contains('active')) {
            accordionTexto.classList.add('active');
        }
    })
})

function removeClass(accordionItem) {
    accordionItem.forEach(accordion => {
        accordion.classList.remove('active');
    })
}

function removeActiveAccordionTexto() {
    const accordionTexto = document.querySelectorAll('.accordion__texto');

    accordionTexto.forEach(texto => {
        if(!texto.closest('.accordion').classList.contains('active')) {
            texto.classList.remove('active');
        }
    });
}