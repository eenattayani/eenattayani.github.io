var tanggal = new Date();
var bulan = ["jan","feb","mar","apr","mei","jun","jul","agu","sep","okt","nov","des"];
document.getElementById("tanggal").innerHTML = tanggal.getDate() + " " + bulan[tanggal.getMonth()] + " " + tanggal.getFullYear();

