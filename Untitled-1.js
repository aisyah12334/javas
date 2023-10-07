// Contoh penggunaan if dan else
var nilai = 75;
if (nilai >= 70) {
  console.log("Anda lulus");
} else {
  console.log("Anda tidak lulus");
}

// Contoh penggunaan nested if
var usia = 18;
if (usia >= 18) {
  if (usia < 21) {
    console.log("Anda sudah dewasa, tapi belum boleh minum alkohol");
  } else {
    console.log("Anda boleh minum alkohol");
  }
}

// Contoh penggunaan switch case
var hari = "Senin";
switch (hari) {
  case "Senin":
    console.log("Hari kerja");
    break;
  case "Sabtu":
  case "Minggu":
    console.log("Hari libur");
    break;
  default:
    console.log("Hari tidak valid");
}

// Contoh penggunaan for statement
for (var i = 0; i < 5; i++) {
  console.log("Iterasi ke-" + i);
}

// Contoh penggunaan while
var angka = 1;
while (angka <= 5) {
  console.log(angka);
  angka++;
}

// Contoh penggunaan do while
var x = 1;
do {
  console.log("Angka: " + x);
  x++;
} while (x <= 5);

// Contoh penggunaan function
function tambah(a, b) {
  return a + b;
}

var hasil = tambah(5, 3);
console.log("Hasil penambahan: " + hasil);
