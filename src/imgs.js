const launchImg = document.querySelector('.launch-img');
const spaceportImg = document.querySelector('.spaceport-img');
const capsuleImg = document.querySelector('.capsule-img');

changeImgs();
function changeImgs() {
    if (window.innerWidth >= 720) {
        launchImg.src = "image-launch-vehicle-portrait.76a8ca33.jpg";
        spaceportImg.src = "image-spaceport-portrait.2a87f40b.jpg";
        capsuleImg.src = "image-space-capsule-portrait.228a0c11.jpg";
    } else {
        launchImg.src = "image-launch-vehicle-landscape.b5b11063.jpg";
        spaceportImg.src = "image-spaceport-landscape.d80d886d.jpg";
        capsuleImg.src = "image-space-capsule-landscape.76a75fbf.jpg";
    };
}

window.addEventListener('resize', changeImgs);