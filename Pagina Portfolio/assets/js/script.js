//Barra de navegação mobile
function toggleMenu() {
    const nav = document.querySelector('#nav');
    nav.classList.toggle('active'); 
}


const btnMobile = document.querySelector('#btn-mobile');
const btnInicio = document.querySelector('.inicio-menu');
const btnSobre = document.querySelector('.sobre-menu');
const btnProjetos = document.querySelector('.projetos-menu');
const btnHabilidades = document.querySelector('.habilidades-menu');

btnMobile.addEventListener('click', toggleMenu);
btnInicio.addEventListener('click', toggleMenu);
btnSobre.addEventListener('click', toggleMenu);
btnProjetos.addEventListener('click', toggleMenu);
btnHabilidades.addEventListener('click', toggleMenu);
////Barra de navegação mobile

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
sr.reveal('.projetos-centralizador', {duration : 3000,  origin: 'top'})
sr.reveal('', {duration : 3000, origin:'top'})
sr.reveal('', {duration : 3000, origin:'bottom'})
sr.reveal('', {duration : 3000, origin:'bottom'})
sr.reveal('', {duration : 3000, origin:'bottom'})
sr.reveal('', {duration : 3000, origin:'left'})
sr.reveal('', {duration : 3000, origin:'right'})
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