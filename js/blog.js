let closeButtonBlog= document.querySelector('.blog-bottom__close-button')
let blogBottom= document.querySelector('.blog-bottom')
let openBlogsButton= document.querySelector('.blog-page__link')
let body = document.body, 
    html = document.documentElement;
let arcticleBlogTemplate= document.querySelector('.blog-bottom-article');
let blogArticles= document.querySelectorAll('.item-blog');

let articleCloseButton= document.querySelector('.blog-bottom__close');



// height of scrollbar
let heightScrollBar = Math.max( body.scrollHeight, body.offsetHeight,html.clientHeight, html.scrollHeight, html.offsetHeight );


// set down blog-bottom block
closeButtonBlog.addEventListener('click',e=>{
    window.scroll({
        top:0,
        left:0,
        behavior: 'smooth'
    })
 
})

// set up blog-bottom block
openBlogsButton.addEventListener('click',e=>{
    window.scroll({
        top:heightScrollBar,
        left:0,
        behavior: 'smooth'
    })

 
})

// open article with id
blogArticles.forEach((articleItem) => {
    articleItem.addEventListener('click',function(e){
      blogBottom.classList.add('hide-section')
      arcticleBlogTemplate.classList.add('show-section')
      window.scroll({
        top:heightScrollBar,
        left:0,
        behavior: 'smooth'
    })
    })
});



