// Menu mobile
function showMenu() {
    let menuMobile = document.querySelector('.mobile-menu')
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('#icon').src = "assets/img/menu_white_36dp.svg"
    }else {
        menuMobile.classList.add('open');
        document.querySelector('#icon').src = "assets/img/close_white_36dp.svg";
    }
}
//Menu mobile

//Efeito de maquina de escrever
function showText(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    setTimeout(() =>{
    textoArray.forEach((letra, i) => {
        setTimeout(() => elemento.innerHTML += letra, 125 * i);
    })}, 1500)

}


const nome = document.querySelector('.inicio-nome');
showText(nome);
//Efeito de maquina de escrever

//Efeito revelar 
window.sr = ScrollReveal({ reset:true});
ScrollReveal({ distance: '15px' });
sr.reveal('.avatar-img', {duration : 3000, origin: 'right'})
sr.reveal('.inicio-apresentacao', {duration : 3000, origin: 'left'})
sr.reveal('.sobre-centralizador', {duration : 3000,  origin: 'top'})
sr.reveal('.projetos-centralizador', {duration : 3000,  origin: 'bottom'})
sr.reveal('.habilidades-altura', {duration : 3000, origin:'top'})
//sr.reveal('', {duration : 3000, origin:'bottom'})
//Efeito revelar 

//carousel swiper de projetos
const swiper = new Swiper('.swiper', {
    speed: 400,
    spaceBetween: 10,
    slidesPerView:1,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    breakpoints: {
        870: {
          slidesPerView: 2,
          spaceBetween: 10
        }
      }
  });
//carousel swiper de projetos
  
