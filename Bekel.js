var myCanvas = document.getElementById("canvas");
var ctx = myCanvas.getContext("2d");
myCanvas.width = myCanvas.scrollWidth;
myCanvas.height = myCanvas.scrollHeight;

var canvasW = myCanvas.width;
var canvasH = myCanvas.height;

//objeck / struktur bluprint
function bulat(x, y, r, w, kanan, kiri, atas, bawah, speed) {
    //variabel
    this.x = x;
    this.y = y;
    this.r = r;
    this.w = w;
    this.kanan = kanan;
    this.kiri = kiri;
    this.atas = atas;
    this.bawah = bawah;

    //variabel render
    this.render = function () {
        ctx.fillStyle = this.w;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgb(255,255,0)'; //warna garis lingkaran
        ctx.stroke();
        ctx.fill();

        if (this.kanan) {
            this.x += speed;
        }
        if (this.kiri) {
            this.x -= speed;
        }

        if (this.bawah) {
            this.y += speed;
        }
        if (this.atas) {
            this.y -= speed;
        }

        //pengecekan garis canvas
        if (this.x + this.r > canvasW) {
            this.kanan = false;
            this.kiri = true;
        } else if (this.x - this.r < 0) {
            this.kanan = true;
            this.kiri = false;
        }
        if (this.y + this.r > canvasH) {
            this.bawah = false;
            this.atas = true;
        } else if (this.y - this.r < 0) {
            this.bawah = true;
            this.atas = false;
        }
    }
}
//object baru bulat atau bluprint dari object bulat diatas


var bulat1 = new bulat(100, 100, 100, "red", true, false, false, true, 2);
var bulat2 = new bulat(300, 300, 50, "green", false, true, true, false, 4);
var bulat3 = new bulat(200, 200, 70, "blue", true, false, false, true, 3);
var bulat4 = new bulat(400, 100, 60, "red", false, true, false, true, 2);
var bulat5 = new bulat(150, 150, 80, "green", true, false, true, false, 6);
var bulat6 = new bulat(200, 180, 90, "blue", false, true, false, true, 5);
var bulat7 = new bulat(250, 290, 70, "red", false, true, false, true, 5);
var bulat8 = new bulat(350, 490, 90, "green", false, true, false, true, 5);



//animasi
function animasi() {
    ctx.save();
    ctx.clearRect(0, 0, canvasW, canvasH);

    ctx.globalAlpha = 0.7;
    bulat1.render();
    bulat2.render();
    bulat3.render();
    bulat4.render();
    bulat5.render();
    bulat6.render();
    bulat7.render();
    bulat8.render();

    ctx.restore();
}
setInterval(animasi, 5);