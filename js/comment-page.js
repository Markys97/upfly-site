
let closeButtonComment= document.querySelector('.comment-modal__closeBtn');
let comment_page= document.querySelector('#comment-page');
let comment_modal= document.querySelector('.comment-modal');
let readMoreButtons=  document.querySelectorAll('.item-comment-page__read-more')
let allNodInReadMore=[];

// open modal

readMoreButtons.forEach(readMoreButton=>{
    
allNodInReadMore = [...allNodInReadMore,...readMoreButton.querySelectorAll('*'), readMoreButton]
    readMoreButton.addEventListener('click',e=>{
        comment_modal.classList.add('comment-modal-open');
        comment_page.classList.add('body-on')
    })
})
// close modal
closeButtonComment.addEventListener('click',e=>{
    comment_modal.classList.remove('comment-modal-open');
    comment_page.classList.remove('body-on')
})




let spaceUnAllowed= [...comment_modal.querySelectorAll('*'),comment_modal,...allNodInReadMore];

window.addEventListener('click',e=>{
  if(!spaceUnAllowed.includes(e.target)){
    comment_modal.classList.remove('comment-modal-open');
    comment_page.classList.remove('body-on')
  }
})




