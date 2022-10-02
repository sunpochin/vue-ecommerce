var ctx;
let size = 38;
let w;
let h;
let arr = [];

function ball() {
	this.x = r(w - 160) + 60;
	this.y = r(h - 160) + 60;
	this.r = r(30) + 10;
	this.color = '#' + 'ff0000'.toString(16);
	this.xSpeed = r(2) + 1;
	this.ySpeed = r(2) + 1;
}

ball.prototype.show = function () {
	this.run();
	drawCircle(this.x, this.y, this.r, this.color);
};

// setInterval(() => {
// 	ctx.clearRect(0, 0, w, h);
// 	for (let i = 0; i < arr.length; i++) {
// 		arr[i].show();
// 	}
// }, 10);

ball.prototype.run = function () {
	if (this.x - this.r <= 0 || this.x + this.r >= w) {
		this.xSpeed = -this.xSpeed;
	}
	this.x = this.x + this.xSpeed;
	if (this.y - this.r <= 0 || this.y + this.r >= h) {
		this.xSpeed = -this.xSpeed;
	}
	this.y = this.y + this.ySpeed;
};

function drawCircle(x, y, r, color) {
	ctx.beginPath();
	ctx.arc(x, y, r, 0, Math.PI * 2);
	ctx.fillStyle = color;
	ctx.fill();
}

function r(num) {
	return parseInt(Math.random() * num);
}

function start() {
	for (let i = 0; i < size; i++) {
		let Ball = new ball();
		arr.push(Ball);
		Ball.show();
	}
}

function init(ctx1, w1, h1) {
	ctx = ctx1;
	w = w1;
	h = h1;
}

export { init, start };
