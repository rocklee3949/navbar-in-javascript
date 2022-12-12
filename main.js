const navIcon = document.querySelector('nav .nav-icon')
let check = true
navIcon.onclick = () => {
    if (check === true) {
        check = false
        console.log(check);
        navIcon.classList.remove('fa-bars')
        navIcon.classList.add('fa-xmark')
        document.querySelector('nav ul').style.left = '0'
    }
    else {
        check = true
        navIcon.classList.remove('fa-xmark')
        navIcon.classList.add('fa-bars')
        document.querySelector('nav ul').style.left = '-100%'
        console.log(check);
    }
}