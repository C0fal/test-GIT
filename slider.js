let aPhoto = document.querySelector('.active-photo');
let preview = document.querySelectorAll('.preview-list a');



for ( let activeimg of preview ) {
    activeimg.onclick = function(evt) {
        evt.preventDefault();
        
        aPhoto.src = activeimg.href;
        document.querySelector('.preview-list a.active-item').classList.remove('active-item');
        activeimg.classList.add('active-item');
    };
};

