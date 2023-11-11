const canvas = document.getElementsByClassName('rain')[0];
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const c = canvas.getContext('2d');

const randomNum = (max, min) => Math.floor(Math.random() * max) + min;

function RainDrops(x, y, end, speed, opacity) {
    this.x = x;
    this.y = y;
    this.end = end;
    this.speed = speed;
    this.opacity = opacity;

    this.draw = function () {
        c.beginPath();
        c.moveTo(this.x, this.y);
        c.lineTo(this.x, this.y - this.end);
        c.lineWidth = 1;
        c.strokeStyle = `rgba(255, 255, 255, ${this.opacity})`;
        c.stroke();
    };

    this.update = function () {
        const rainEnd = window.innerHeight + 100;
        if (this.y >= rainEnd) {
            this.y = this.end - 100;
        } else {
            this.y = this.y + this.speed;
        }
        this.draw();
    };

}

const rainArray = [];

for (let i = 0; i < 250; i++) {
    const rainXLocation = Math.floor(Math.random() * window.innerWidth) + 1;
    const rainYLocation = Math.random() * -500;
    const randomRainHeight = randomNum(10, 2);
    const randomSpeed = randomNum(20, 1);
    const randomOpacity = Math.random() * 0.5;

    rainArray.push(new RainDrops(rainXLocation, rainYLocation, randomRainHeight, randomSpeed, randomOpacity));
}

const animateRain = () => {
    requestAnimationFrame(animateRain);
    c.clearRect(0, 0, window.innerWidth, window.innerHeight);

    for (let i = 0; i < rainArray.length; i++) {
        rainArray[i].update();
    }
};

animateRain();
