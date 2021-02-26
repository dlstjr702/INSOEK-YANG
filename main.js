'use strict';

// "contact me"버튼
const homeContactBtn = document.querySelector('.home__contact');
homeContactBtn.addEventListener('click', () => {
  scrollIntoView('#contact');
});

// 토글아이콘
const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
navbarToggleBtn.addEventListener('click', () => {
     navBarMenu.classList.toggle('open');
});


// 네비게이션메뉴 클릭
const navBarMenu = document.querySelector('.navbar__menu');
navBarMenu.addEventListener('click',(event) => {
     const target = event.target;
     const link = target.dataset.link;
     if(link==null){
          return;
     }
    navBarMenu.classList.remove('open');
     const scrollTo = document.querySelector(link);
     scrollTo.scrollIntoView({behavior: 'smooth'});
});

// 스크롤시 홈 투명도
const home = document.querySelector('#home');
const homeHeight = home.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

// 스크롤시 화살표 나타내기
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll',() => {
     if(window.scrollY>homeHeight /2){
          arrowUp.classList.add('visible');
     }else{
          arrowUp.classList.remove('visible');
     }
});
// 화살표클릭시 위로올라가기
arrowUp.addEventListener('click',() => {
     scrollIntoView('#home');
});

// 프로젝트
const workBtnContainer = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');
workBtnContainer.addEventListener('click', (e) => {
  const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
  if (filter == null) {
    return;
  }
  // Remove selection from the previous item and select the new one
  const active = document.querySelector('.category__btn.selected');
  if (active != null) {
    active.classList.remove('selected');
  }
  const target =
   e.target.nodeName === 'BUTTON'? e.target : e.target.parentNode;

  e.target.classList.add('selected');


  projectContainer.classList.add('anim-out');
  setTimeout(() => {
    projects.forEach((project) => {
      console.log(project.dataset.type);
      if (filter === '*' || filter === project.dataset.type) {
        project.classList.remove('invisible');
      } else {
        project.classList.add('invisible');
      }
    });
    projectContainer.classList.remove('anim-out');
  }, 300);
});




function scrollIntoView(selector) {
     const scrollTo = document.querySelector(selector);
     scrollTo.scrollIntoView({ behavior: 'smooth' });
   }