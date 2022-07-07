let sections= [...document.querySelectorAll('.section')];

// hide button fixe
const hideButtonFixe=()=>{
    sections.forEach((section,index)=>{
        let colorParams= section.dataset.color
       if(window.screen.width<=668){
            if(index!==0){
                section.setAttribute('data-color','none')
                console.log(section.dataset.color)
            }
       }else{
        section.setAttribute('data-color',colorParams)
       }
    })
}
hideButtonFixe()
window.addEventListener('resize',hideButtonFixe)