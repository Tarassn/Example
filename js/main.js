
let heroSlider = {
    slides:['images/layer1.png','images/layer2.png','images/layer3.png','images/layer4.png'],
    frame:0,
    set: function(image) {
        document.getElementById("hero").style.backgroundImage = "url("+image+")";
    },
    start: function() {
        this.set(this.slides[this.frame]);
    },
    left: function() {
        this.frame--;
        if(this.frame < 0) this.frame = this.slides.length-1;
        this.set(this.slides[this.frame]);
        this.resetTimer();
    },
    right: function() {
        this.frame++;
        if(this.frame === this.slides.length) this.frame = 0;
        this.set(this.slides[this.frame]);
        this.resetTimer();
    },
    timer: setInterval(function() {
        heroSlider.right();
    },5000),
    resetTimer: function() {
        clearInterval(this.timer);
        this.timer = setInterval(function () {
            heroSlider.right();
        }, 5000)
    }
};
let carouselSlider = {
    field: document.getElementById("popular-test-list"),
    slide:0,
    set: function () {
        for(let i = 0; i < document.getElementById("popular-test-list").children.length; i++) {
            document.getElementById("popular-test-list").children[i].className = "popular-test-box test-box" + (this.slide+1);
            this.slide++;
        }
    },
    left: function() {
        this.slide -=6;
        if(this.slide < 0) this.slide = 6;
        this.set();
        this.resetTimer();
    },
    right: function() {
        if(this.slide >= 9) this.slide = 0;
        this.set();
        this.resetTimer();
    },
    timer: setInterval(function() {
            carouselSlider.right();
        },6000),
    resetTimer: function() {
        clearInterval(this.timer);
        this.timer = setInterval(function() {
            carouselSlider.right();
        },6000)
    }

};
window.onload = function() {
    heroSlider.start();
    heroSlider.timer;
    carouselSlider.set();
    carouselSlider.timer;
};