let firstSections= document.querySelector('.section');
let backgroundBlock= document.querySelector('.background');
let firstSections_params= firstSections.dataset.params.split(';');
let pathButton_fixes= document.querySelectorAll('.button-fixe___img path')
let textButton_fixe= document.querySelector('.button-fixe__text')
let menu= document.querySelector('.menu-site');
let burgerButton=document.querySelector('.burger');
let bodyPages= document.body
let closeButton= document.querySelector('.menu-site__close');
let bodyOn;





// set  background, path of fixe button and text of of fixe button  color of data-color form the first section
window.addEventListener('load',e=>{
    backgroundBlock.style.boxShadow=`${firstSections_params[1]} ${firstSections_params[2]} ${firstSections_params[3]}  `
    backgroundBlock.style.background= firstSections_params[0];
    pathButton_fixes.forEach(path=>{
        path.style.fill=firstSections.dataset.color
    })
    textButton_fixe.style.color=firstSections_params[0];
   
   
})

// open menu
function openMenu(){
  menu.classList.add('menu-site-open')
  document.body.classList.add('body-on')
  
}

burgerButton.addEventListener('click', openMenu)

// close menu
function closeMenu(){
    if(menu.classList.contains('menu-site-open')){
        menu.classList.remove('menu-site-open')
        document.body.classList.remove('body-on')
    }
}
closeButton.addEventListener('click',closeMenu)
let allNodeInMenu= [...menu.querySelectorAll('*'),burgerButton, ...burgerButton.querySelectorAll('*')];

window.addEventListener('click',e=>{
    if(!allNodeInMenu.includes(e.target)){
        closeMenu()
    }
})

