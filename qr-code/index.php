<?php
$waktu = getdate(date("U"));
$namaHari = ["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"];
$namaBulan = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
$hari = $namaHari[$waktu['wday']];
$tanggal = $waktu['mday'];
$bulan = $namaBulan[$waktu['mon']];
$tahun = $waktu['year'];

$kodeQR = "$hari, $tanggal $bulan $tahun";
echo "$kodeQR";
?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compitable" content="ie-edge" />
    <title>QR Code Generator</title>

    <link rel="stylesheet" href="style.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.css" integrity="sha256-QVBN0oT74UhpCtEo4Ko+k3sNo+ykJFBBtGduw13V9vw=" crossorigin="anonymous" />
    <script src="qrcode.min.js"></script>
  </head>
  <body>
    <div class="cont">
      <div class="">
        <div class="ui input">
          <input type="text" placeholder="Search..." value="<?=$kodeQR;?>" />
        </div>
        <button class="ui primary button" onclick="genQR();">Generate QR Code</button>
      </div>
      <div class="qrcode">
        <canvas id="canvas">canvas</canvas>
      </div>
    </div>

    <script src="script.js"></script>
  </body>
</html>
