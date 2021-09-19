// 1.isFibonacci

// 1.Buatlah sebuah fungsi untuk merubah angka bilangan bulat menggunakan perhitungan matematik Fibonacci
// seperti output dibawah ini, Fibonacci sangat identik dengan penjumlahan digit angka dari nilai sebelumnya,
// jadi buatlah sebuah fungsi untuk soal berikut ini dan outputnya harus mengembalikan sebuah Array seperti dibawah
// ini.

// Output:
// isFibonacci(3) ➞ [1, 2]
// isFibonacci(8) ➞ [1, 2, 3, 5, 8, 13, 21]

// function isFibonacci(value) {
//     let newValue = []
//     let base = 0
//     for(let i = 0; i < value; i++) {
//         if(base <=0) {
//             base++
//         }else {
//             newValue.push(base)
//             let firstValue = newValue[newValue.length-2] === undefined ? base : newValue[newValue.length-2]
//             let secondValue = newValue[newValue.length-1] === undefined ? base : newValue[newValue.length-1]
//             base = firstValue + secondValue
//         }
//     }
//     return newValue
// }

// console.log(isFibonacci(8))

// 2.isBubleSort

// Buatlah sebuah fungsi Array dengan nilai acak seperti dibawah ini, yang dimana nanti Array tersebut harus
// diurutkan nilainya sesuai dengan urutan angkanya menggunakan algorithm BubleShort, jadi buatlah sebuah fungsi
// untuk soal berikut ini dan outputnya harus mengembalikan sebuah Array seperti dibawah ini.

// Output:
// isBubleSort([303, 6, 90, 21, 33, 80, 212]) ➞ [6, 21, 33, 80, 90, 212, 303]
// isBubleSort([101, 1002, 0, 212, 12, 4, 10]) ➞ [0, 4, 10, 12, 101, 212, 1002]

// function isBubleSort (array) {
//     let isRepeat = true
//     while(isRepeat) {
//         isRepeat = false
//         for(let i = 0; i < array.length; i++) {
//             if(array[i] > array [i + 1]) {
//                 let tempValue = array[i+1]
//                 array[i + 1] = array[i]
//                 array[i] = tempValue
//                 isRepeat = true
//             }
//         }
//     }
//     return array
// }

// console.log(isBubleSort([303, 6, 90, 21, 33, 80, 212]))

// 3.calcDeterminant

// Buatlah sebuah fungsi untuk menghitung kalkulasi determinant matrix berikut, yang dimana nilai tersebut akan
// dihitung dengan metode menyilang seperti huruf X seperti berikut AD - BC, jadi buatlah sebuah fungsi untuk
// soal berikut ini dan outputnya harus mengembalikan sebuah Number seperti dibawah ini.

// Output:
// calcDeterminant([[1, 2], [3, 4]]) ➞ -2
// calcDeterminant([[5, 3], [3, 1]]) ➞ -4
// calcDeterminant([[1, 1], [1, 1]]) ➞ 0

// function calcDeterminant(array) {
//     return array.length == 1
//         ? array[0][0]
//         : array.length == 2
//         ? array[0][0] * array[1][1] - array[0][1] * array[1][0]
//         : array[0].reduce(
//               (r, e, i) =>
//                   r +
//                   (-1) ** (i + 2) *
//                       e *
//                       calcDeterminant(
//                           array.slice(1).map((c) => c.filter((_, j) => i != j))
//                       ),
//               0
//           );
// }

// console.log(
//     calcDeterminant([
//         [1, 1], [1, 1]
//     ])
// );

// 4.middleEarth

// Buatlah sebuah fungsi untuk memeriksa sebuah String apakah Ari dan Danang itu posisinya saling berdekatan,
// jika mereka posisinya saling berdekatan didalam sebuah Array, jika benar anda harus megembalikan nilai true dan
// jika salah maka anda harus megembalikan nilai false, jadi buatlah sebuah fungsi untuk soal berikut ini dan
// outputnya harus mengembalikan sebuah Boolean seperti dibawah ini.

// Output:
// middleEarth(['Ari', 'Danang', 'Jamal']) ➞ true
// middleEarth(['Susi', 'Ari', 'Danang', 'Jono']) ➞ true
// middleEarth(['Okta', 'Ari', 'Beben', 'Danang']) ➞ false
// middleEarth(['Ruben', 'Ari', 'Restu', 'Danang', 'Arif']) ➞ false

// function middleEarth(value) {
//     let isBerdekatan = false
//     for(let i = 0; i<value.length; i++) {
//         if((value[i] === "Ari" || value[i] === "Danang") && (value[i + 1] === "Ari" || value[i + 1] === "Danang")) {
//             isBerdekatan = true
//         }
//     }

//     return isBerdekatan
// }
// console.log(middleEarth(['Susi', 'Ari', 'Danang', 'Jono']))

// 5.firstAndLast

// Buatlah sebuah fungsi untuk menentukan karakter String dibawah ini menggunakan cara Leksikografis, Leksikografis
// adalah cabang ilmu bahasa yang mempelajari tentang teknik penyusunan kamus berdasarkan huruf pertama Alfabet,
// jadi buatlah sebuah fungsi untuk soal berikut ini dan outputnya harus mengembalikan sebuah Array seperti
// dibawah ini.

// Output:
// firstAndLast("another") ➞ ["aehnort", "tronhea"]
// firstAndLast("welcome") ➞ ["ceelmow", "womleec"]
// firstAndLast("anonymous") ➞ ["amnnoosuy", "yusoonnma"]

// function sortStringAsc(value) {
//     let stringToArray = value.split("");
//     let isRepeat = true;
//     while (isRepeat) {
//         isRepeat = false;
//         for (let i = 0; i < stringToArray.length; i++) {
//             if (stringToArray[i] > stringToArray[i + 1]) {
//                 let tempString = stringToArray[i];
//                 stringToArray[i] = stringToArray[i + 1];
//                 stringToArray[i + 1] = tempString;
//                 isRepeat = true;
//             }
//         }
//     }
//     return stringToArray;
// }

// function arrayReveat(array) {
//     let newArray = [];
//     for (let i = array.length - 1; i >= 0; i--) {
//         newArray.push(array[i]);
//     }
//     return newArray
// }

// function firstAndLast(string) {
//     let resultStringAsc = sortStringAsc(string);
//     let resultArrayReveat = arrayReveat(resultStringAsc);
//     return [resultStringAsc.join(""), resultArrayReveat.join("")];
// }

// console.log(firstAndLast("anonymous"));

// 6.uniqueStyles

// Buatlah sebuah fungsi ada berapa banyak karakter unik pada genre musik berikut ini yang ada didalam sebuah 
// Array, yang harus anda lakukan hanyalah mengambil beberapa karakter unik yang tidak memiliki duplicate, 
// kemudian kembalikan jumlah panjang karakter yang berada didalam sebuah Array tersebut, jadi buatlah sebuah 
// fungsi untuk soal berikut ini dan outputnya harus mengembalikan sebuah Number seperti dibawah ini.

// Output:

// uniqueStyles(["Dangdut, Rock", "Keroncong, Heavy Metal", "Techno, Rege", "Pop, Disco", "Arimbi, Techno, Metal"]) ➞ 10
// uniqueStyles(["Rege", "Rap, Funk", "Grunge, Dangdut, Hip Hop, Rap", "Keroncong","Rege"]) ➞ 7
// uniqueStyles(["Arimbi", "Arimbi", "Arimbi"]) ➞ 1

// function filterDataArray(array) {
//     let newArray = []
//     for(let i = 0; i < array.length; i++) {
//         let stringToArray = array[i].split(", ")
//         for(let j = 0; j < stringToArray.length; j++) {
//             newArray.push(stringToArray[j])
//         }
//     }

//     return newArray
// }

// function sortArray (array) {
//     let isRepeat = true
//     while(isRepeat) {
//         isRepeat = false
//         for(let i = 0; i < array.length; i++) {
//             if(array[i] > array[i+1]) {
//                 let temp = array[i]
//                 array[i] = array[i + 1]
//                 array[i + 1] = temp
//                 isRepeat = true
//             }
//         }
//     }
//     return array
// }

// function uniqueStyles(array) {
//     let resultArrayFilter = filterDataArray(array)
//     let resultSortArray = sortArray(resultArrayFilter)
//     let isRepeat = true
//     while(isRepeat) {
//         isRepeat = false
//         for(let i = 0; i < resultSortArray.length; i++) {
//             console.log( resultSortArray[i+1])
//             if(resultSortArray[i] === resultSortArray[i+1]) {
//                 resultSortArray.splice(i, 1)
//                 isRepeat = true
//             }
//         }
//     }
//     return resultSortArray.length
// }

// console.log(uniqueStyles(["Arimbi", "Arimbi", "Arimbi"]))

// 7.lookAndSay

// Buatlah sebuah fungsi untuk mengandakan sebuah angka, dimana nantinya angka akan dikelompokan menjadi dua 
// type bagian yaitu Odd dan Even, jika angkanya termasuk type Odd maka akan mengembalikan nilai "salah" 
// dan jika angkanya termasuk type Even maka akan mengembalikan nilai baru, untuk setiap group akan memiliki 2 
// digit angka kemudian gabungkan digit angka terakhir yang sama jumlah nya dengan digit angka yang pertama,
// jadi buatlah sebuah fungsi untuk soal berikut ini dan outputnya harus mengembalikan sebuah Number seperti 
// dibawah ini.


// Outputnya:

// lookAndSay(95) ➞ 555555555
// lookAndSay(1213141516171819) ➞ 23456789
// lookAndSay(786497) ➞ 8888888444444777777777
// lookAndSay(231) ➞ "salah"

// 8.sumDigProd

// Buatlah sebuah fungsi yang mengambil digit angka sebagai argumentnya, kemudian ubahlah nilai tersebut 
// menjadi sebuah bilangan bulat, kemudian ambil sub-nilai terkecil dari nilai bilangan bulat tersebut hingga 
// nilainya tersisa 1 digit angka, jadi buatlah sebuah fungsi untuk soal berikut ini dan outputnya harus 
// mengembalikan sebuah Number seperti dibawah ini.

// Output

// sumDigProd(16, 28) ➞ 6
// sumDigProd(167, 167, 167, 167, 167, 3) ➞ 8
// sumDigProd(26, 497, 62, 841) ➞ 6
// sumDigProd(98526, 54, 863, 156489, 45, 6156) ➞ 2
// sumDigProd(123, -99) ➞ 8