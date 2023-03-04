const accordionItem = document.querySelectorAll(".accordion");

accordionItem.forEach(accordion => {
    accordion.addEventListener('click', () => {
        removeClass(accordionItem)
        accordion.classList.toggle('active')
    })
})

function removeClass(accordionItem) {
    accordionItem.forEach(accordion => {
        accordion.classList.remove('active')
    })
}