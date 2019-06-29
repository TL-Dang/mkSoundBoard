//Detecting GUI buttons
var numberOfAudioButtons = document.querySelectorAll(".audio").length;

for (var i = 0; i < numberOfAudioButtons; i++) {
    document.querySelectorAll(".audio")[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}

//Detecting keyboard buttons
//key tells what keyboard key is being pressed

document.addEventListener("keyup", function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key) {

    switch (key) {
        case "a":
            var comeHere = new Audio("./assets/audio/mk3-Come_Here.mp3");
            comeHere.play();
            break;

        case "s":
            var dunDun = new Audio("./assets/audio/mk3-DunDun.mp3");
            dunDun.play();
            break;

        case "d":
            var flawless = new Audio("./assets/audio/mk3-Flawless_Victory.mp3");
            flawless.play();
            break;

        case "f":
            var overHere = new Audio("./assets/audio/mk3-GetOverHere.mp3");
            overHere.play();
            break;

        case "j":
            var outstanding = new Audio("./assets/audio/mk3-Outstanding.mp3");
            outstanding.play();
            break;

        case "k":
            var skLaugh = new Audio("./assets/audio/mk3-SK_Laugh.mp3");
            skLaugh.play();
            break;

        case "l":
            var toasty = new Audio("./assets/audio/mk3-Toasty.mp3");
            toasty.play();
            break;

        case "o":
            var wat = new Audio("./assets/audio/mk3-wat.mp3");
            wat.play();
            break;

        default: console.log(buttonInnerHTML);
    }

}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed")

    // removes button styling for animation animation effect 
    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 1000);
}