
handleClick = (target, index) => {
    let activeEl = document.querySelector('.nav .active')
    let mainItemEls = document.querySelectorAll('.main-item')

    activeEl && activeEl.classList.remove('active')
    target.classList.add('active')
    // Show ra 
    mainItemEls.forEach(item => {
        if ([...item.classList].indexOf('hide') === -1) {
            item.classList.add('hide')
        }
        mainItemEls[index].classList.remove('hide')
    })
    
}
let homeEl = document.querySelector('#home').style.display = 'flex'
let navs = document.querySelectorAll('.link')
navs.forEach((item, index) => {
    item.addEventListener('click', () => handleClick(item, index))
})

let subnavs = document.querySelectorAll('.subnav-item')
subnavs.forEach((item) => {
    item.addEventListener('click', () => {
        document.querySelector('.subnav .active').classList.remove('active')
        item.classList.add('active')
    })
})