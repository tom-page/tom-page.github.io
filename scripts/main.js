

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/krishnan.png') {
      myImage.setAttribute('src','images/lads.png');
    } else {
      myImage.setAttribute('src','images/krishnan.png');
    }
}
