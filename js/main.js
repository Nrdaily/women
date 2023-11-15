let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnail = document.querySelectorAll('.thumbnail');
let hero = document.getElementById('hero');

let backgroundImg = new Array(
    './assets/girls21.jpg',
    './assets/girls22.jpg',
    './assets/girls23.jpg',
    './assets/girls24.jpg',
    './assets/girls25.jpg',
);

let i = 0;
next.onclick = function(){
    if(i < 4){
        hero.style.backgroundImage = 'url("'+ backgroundImg[i+1] +'")';
        thumbnail[i+1].classList.add('active');
        thumbnail[i].classList.remove('active');
        i++;
    }
}
prev.onclick = function(){
    if(i > 0){
        hero.style.backgroundImage = 'url("'+ backgroundImg[i-1] +'")';
        thumbnail[i-1].classList.add('active');
        thumbnail[i].classList.remove('active');
        i--;
    }
}
