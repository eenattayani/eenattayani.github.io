var tanggal = new Date();
var bulan = ["jan","feb","mar","apr","mei","jun","jul","agu","sep","okt","nov","des"];
document.getElementById("tanggal").innerHTML = tanggal.getDate() + " " + bulan[tanggal.getMonth()] + " " + tanggal.getFullYear();

const body = document.querySelector('body');
body.onload = pilihKomoditas;

const select = document.querySelector('#komoditas');
select.onchange = pilihKomoditas;

const berita = document.querySelector('header marquee');

berita.onmouseover = berita.stop;
berita.onmouseout = berita.start;