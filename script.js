let a = document.querySelector('input')
let b = document.querySelector('body')

a.addEventListener('input', (e) => {
    b.style.backgroundColor = e.target.value
})

