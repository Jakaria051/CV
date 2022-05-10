const img = document.querySelector('.profile-img');

var requestFullscreen = (e) => {
    if(e.requestFullscreen) {
        e.requestFullscreen();
    }else {
        console.log('something wrong ....',e);
    }
}

img.addEventListener('click',function(e){
    e.preventDefault();
    requestFullscreen(img);
});

