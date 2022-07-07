

let playVideoButton= document.querySelector('.video-page-bottom__video-btn')

let url='https://www.youtube.com/watch?v=VXx7pDwlf_8';
let codeUrl;

if(url.includes('watch')){
 let urlElt= url.split('watch?v=');
 codeUrl= urlElt[urlElt.length-1];
 url='https://www.youtube.com/embed/'+codeUrl;
}

playVideoButton.addEventListener('click',e=>{
    $.fancybox.open({
        src  : url,
        type : 'iframe',
        opts : {
            afterShow : function( instance, current ) {
                console.info( 'done!' );
            }
        }
    });
})