let modal_vacancie=document.querySelector('.modal-vacancie')
let vacancie_links= [...document.querySelectorAll('.vacancie__list-link')]
let closeModal_button= document.querySelector('.modal-section__closeBtn')
let page_vacancie= document.querySelector('#page-vacancie');
let vacancieList= document.querySelector('.vacancie__list')
console.log(vacancieList)


const closeModale=()=>{
    if(modal_vacancie.classList.contains('modal-vacancie-open')){
        modal_vacancie.classList.remove('modal-vacancie-open')
        page_vacancie.classList.remove('vacancie-page')
    }
}

  // open modal vacancie
vacancie_links.forEach((link,index,links)=>{
    link.addEventListener('click',e=>{
        links.forEach(el=>{
            if(el.classList.contains('vacancie__list-link--active')){
                el.classList.remove('vacancie__list-link--active')
            }
        })
        
        link.classList.add('vacancie__list-link--active')
        if(!modal_vacancie.classList.contains('modal-vacancie-open')){
            modal_vacancie.classList.add('modal-vacancie-open')
            page_vacancie.classList.add('vacancie-page')

        }
    })
})


// close modal vacancie
closeModal_button.addEventListener('click',closeModale)

// close modal when click to window

let modal_vacancieAllNodes= [...modal_vacancie.querySelectorAll('*'), modal_vacancie,...vacancieList.querySelectorAll('*')];

window.addEventListener('click',e=>{
    if(!modal_vacancieAllNodes.includes(e.target)){
        closeModale()
    }
})