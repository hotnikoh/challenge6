/**
 * Tulis sebuah program untuk menampilkan angka genap dari 1 hingga 20
 */


/**
 * Tulis sebuah program yang menghitung jumlah dari angka 1 hingga 100.
 */


/**
 * Pola Segitiga Naik
 * Tampilkan pola segitiga asteriks sebagai berikut untuk n = 5. Contoh:

*
**
***
****
*****

 */


/**
 * Pola Segitiga Terbalik
 * Tampilkan pola segitiga asteriks terbalik sebagai berikut untuk n = 5. Contoh:
 
*****
****
***
**
*

 */


/**
 * Pola Berlian
 * Tampilkan pola segitiga asteriks berlian sebagai berikut untuk n = 5. Contoh:
 
    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *


 */


/**
 * Pola Segitiga Bilangan
 * Tampilkan pola segitiga dengan angka dengan asteriks sebagai pemisah:

1
1*2
1*2*3
1*2*3*4
1*2*3*4*5

 */

//soal no 1

for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}

//soal no 2
console.log("============");

let total = 0;

for (let i = 1; i <= 100; i++) {
  total += i;
}
console.log(total);

//soal no 3
console.log("============");

let bintang = ""
for (let i=0; i<=5; i++){
    for (j=0; j<i; j++){
        bintang += "*";
    }
    bintang += "\n"
}
console.log(bintang)

//soal no 4
console.log("=============");

let bintang2 = ""
for (let k=5; k>=0; k--){
    for(l=0; l<k; l++){
        bintang2 += "*";
    }
    bintang2 += "\n"
}
console.log(bintang2);