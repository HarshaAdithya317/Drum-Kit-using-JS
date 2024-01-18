for (i=0; i<document.querySelectorAll('.drum').length;i++){
    document.querySelectorAll('.drum')[i].addEventListener('click', handleClick);
}
function handleClick(){
    var a=this.innerHTML
    makeSound(a);
    buttonAnimation(a);
}
document.addEventListener('keypress',keyFxn);
function keyFxn(event){
    var b= event.key ;
    makeSound(b);
    buttonAnimation(b);
}
function makeSound(c){
    switch (c) {
        case "w":
            var audio=new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case "a":
            var audio=new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        case "s":
            var audio=new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case "d":
            var audio=new Audio('sounds/tom-4.mp3');
            audio.play();
            break;
        case "j":
            var audio=new Audio('sounds/snare.mp3');
            audio.play();
            break;
        case "k":
            var audio=new Audio('sounds/crash.mp3');
            audio.play();
            break;
        case "l":
            var audio=new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
        default:
            console.log(c)
            break;
    }
}

function buttonAnimation(x){
    var f = document.querySelector("."+ x);
    f.classList.add("pressed");
    setTimeout(function(){
        f.classList.remove("pressed");
    },100)
}