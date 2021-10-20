const portBox = document.querySelector('.portfolio__list-wrapper'),
      portItemsW = document.querySelector('.portfolio__list-items').offsetHeight,
      portItems = document.querySelectorAll('.portfolio__list-items'),
      portItemsBtn = document.querySelectorAll('.portfolio__item-button');

let screenWidth = window.innerWidth;
   
for (let i = 0 ; i < portItemsBtn.length; i++) {
   portItemsBtn[i].addEventListener('click', () => {
      portItems[i].classList.toggle('portfolio__list-items--active');
      function wrapperHeight () {
         if (portItems[i].classList == 'portfolio__list-items portfolio__list-items--active') {
            if( screenWidth <= 1785 ) {
               portBox.style.height = portBox.offsetHeight + 755 + 'px';
            } else if( screenWidth > 1785 ) {
               portBox.style.height = portBox.offsetHeight + 866 + 'px';  
            }
         } else {
            if( screenWidth <= 1785 ) {
               portBox.style.height = portBox.offsetHeight - 755 + 'px';
            } else if( screenWidth > 1785 ) {
               portBox.style.height = portBox.offsetHeight - 866 + 'px';
            }
         }     
      };
      wrapperHeight();
   }); 
};

const portLoadMore = document.querySelector('.portfolio__more-button');
let portItemsShow = 3;

portBox.style.height = (portItemsW+50)*portItemsShow + "px";

portLoadMore.addEventListener('click', () => {

   if( (portItems.length - portItemsShow) == 1 ) {
      portItemsShow = portItemsShow + 1;
      portBox.style.height = (portItemsW+50)*portItemsShow + "px";
   } else {
      if( portItemsShow == portItems.length) {
         portItemsShow = portItemsShow;
         portBox.style.height = (portItemsW+50)*portItemsShow + "px";
      } else {
         portItemsShow = portItemsShow + 2;
         portBox.style.height = (portItemsW+50)*portItemsShow + "px";
      }
   }
   
});

const btnScrollAbout = document.querySelector('.scroll-to-about'),
      btnScrollPort = document.querySelector('.scroll-to-portfolio'),
      btnScrollCont = document.querySelector('.scroll-to-contacts'),
      aboutSection = document.querySelector('.about'),
      portSection = document.querySelector('.portfolio'),
      contSection = document.querySelector('.contacts');

function scrollToAnchord (anchord) {
   window.scroll({
      left: 0,
      top: anchord.offsetTop,
      behavior: "smooth",
   });
};

btnScrollAbout.addEventListener('click', () => {
   scrollToAnchord(aboutSection);
});
btnScrollPort.addEventListener('click', () => {
   scrollToAnchord(portSection);
});
btnScrollCont.addEventListener('click', () => {
   scrollToAnchord(contSection);
});

const scrollUpBtn = document.querySelector('.scroll-up-btn'),
      scrollUpWrapper = document.querySelector('.scroll-up-wrapper');

scrollUpBtn.addEventListener('click', () => {
   window.scrollTo(0, 0);
});

let lastScrollPos = 0;
if (screenWidth >= 450) {
   window.addEventListener('scroll', () => {
      lastScrollPos = window.scrollY;
      if( lastScrollPos > 1110) {
         scrollUpWrapper.classList.add('scroll-up--active');
      } else {
         scrollUpWrapper.classList.remove('scroll-up--active');
      }
   });
};

const burgerBtn = document.querySelector('.header__burger'),
      headerNav = document.querySelector('.header__list'),
      headerLinks = document.querySelectorAll('.header__list-links');

burgerBtn.addEventListener('click', () => {
   burgerBtn.classList.toggle('header__burger--active');
   headerNav.classList.toggle('header__list--active');
});

for(let i = 0; i < headerLinks.length; i++) {
   headerLinks[i].addEventListener('click', () => {
      headerNav.classList.remove('header__list--active');
      burgerBtn.classList.remove('header__burger--active');
   });
}