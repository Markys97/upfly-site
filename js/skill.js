let links=[... document.querySelectorAll('.item-skill__link')]
let skillModal=  document.querySelector('.modal-skill');
let closeModalButton= document.querySelector('.modal-skill-close');

let linksNodes;
let allowClickNodes= [... skillModal.querySelectorAll('*'), skillModal];
// open modal skill

links.forEach((link,i)=>{
    allowClickNodes=[...allowClickNodes,...link.querySelectorAll('*')]
    link.addEventListener('click',function(e){
      skillModal.classList.add('modal-skill-open');
      document.body.classList.add('body-on')
    })
})

closeModalButton.addEventListener('click',function(e){
    
    
    if(skillModal.classList.contains('modal-skill-open')){
        skillModal.classList.remove('modal-skill-open');
        document.body.classList.remove('body-on')
    }
})




window.addEventListener('click',e=>{
    if(!allowClickNodes.includes(e.target)){
       if(skillModal.classList.contains('modal-skill-open')){
        skillModal.classList.remove('modal-skill-open');
        document.body.classList.remove('body-on')
       }
    }
})