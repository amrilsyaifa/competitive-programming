// https://github.com/restuwahyu13/competitive-programming/blob/master/Exercises/Soal-ke-1.md
// // Javascript split function
// const tesString = "123$456$789";

// String.prototype.splitCustom = function (value) {
//     var newArray = [];
//     var string = "";
//     if (value.length > 0) {
//         for (let i = 0; i < this.length; i++) {
//             if (this[i] !== value) {
//                 string = string + this[i];
//             }
//             if (this[i] === value || this.length === i + 1) {
//                 newArray.push(string);
//                 string = "";
//             }
//         }
//     } else {
//         for (let i = 0; i < this.length; i++) {
//             newArray.push(this[i]);
//         }
//     }

//     return newArray;
// };

// console.log(tesString.splitCustom(""));

// // Javascript join function

// const tesArray = ["L", "a", "m", "b", "o", "r", "g", "i", "n", "i"];

// Array.prototype.joinCustom = function (value) {
//     var newString = "";
//     for (let i = 0; i < this.length; i++) {
//         newString = newString + (this[i] + value);
//     }
//     return newString;
// };

// console.log(tesArray.joinCustom(""));

// // 1.growUpNumber
// // Buatlah sebuah fungsi untuk perhitungan mundur dari sebuah angka yang diambil dari parameternya,
// // outputnya harus berupa angka yang menghitung mundur sesuai dengan digit angka yang diberikan sampai dengan index ke 0,
// // jadi buatlah sebuah fungsi untuk soal berikut ini dan outputnya harus mengembalikan sebuah Array seperti dibawah ini.

// // Output:
// // growUpNumber(5) ➞ [5, 4, 3, 2, 1, 0]
// // growUpNumber(3) ➞ [3, 2, 1, 0]
// // growUpNumber(0) ➞ []

// // Answer:

// const firstValue = 5
// const secondValue = 3
// const thirdValue = 0

// function growUpNumber(value) {
//     var array =[]
//     for(let i = value; i >= 0; i--) {
//         array.push(i)
//     }
//     return array
// }
// console.log(growUpNumber(firstValue))
// console.log(growUpNumber(secondValue))
// console.log(growUpNumber(thirdValue))

// // 2.isMatchIdentity
// // Buatlah sebuah fungsi untuk mengecek setiap huruf yang menggunakan huruf Vowels, apakah ada sebuah String yang mengandung
// // karakter yang identik sama, jika ada maka buatlah sebuah fungsi yang hanya megembalikan karakter yang identik sama, jika
// // karakternya identik sama maka akan mengembalikan nilai true dan jika karakternya tidak identik sama maka akan mengembalikan
// // nilai false, jadi buatlah sebuah fungsi untuk soal berikut ini dan outputnya harus mengembalikan sebuah Boolean seperti dibawah ini.

// // Output:
// // isMatchIdentity("aaaaaa") ➞ true
// // isMatchIdentity("aabbbaaa") ➞ false
// // isMatchIdentity("ccccc") ➞ true

// // Answer:

// const firstString = "aaaaaa"
// const secondString = "aabbbaaa"
// const thirdString = "ccccc"

// function isMatchIdentity(value) {
//     var valueArray = value.split("");
//     var isTrue = true;
//     for(let i = 0; i < valueArray.length - 1; i++) {
//         if(valueArray[i] !== valueArray[i + 1]) {
//             isTrue = false;
//         }
//     }
//     return isTrue
// }

// console.log(isMatchIdentity(firstString))
// console.log(isMatchIdentity(secondString))
// console.log(isMatchIdentity(thirdString))

// // 3.alphabetCharacter
// // Buatlah sebuah fungsi untuk mengurutkan masing - masing huruf sesuai dengan urutan sebuah Alfabet pada umumnya yaitu dari A-Z,
// // jadi buatlah sebuah fungsi untuk soal berikut ini dan outputnya harus mengembalikan sebuah String seperti dibawah ini.

// // Output:
// // alphabetCharacter("lamborgini") ➞ "abgiilmnor"
// // alphabetCharacter("hacker") ➞ "acehkr"

// // Answer:

// const charFirst = "lamborgini"
// const charSecond = "hacker"
// const charThird = "amrilsyaifayasin"

// function alphabetCharacter(value) {
//     var array = value.split("")
//     var isRepeat = true;
//     while(isRepeat) {
//         isRepeat= false
//         for(let i = 0; i < array.length -1; i++) {
//             if(array[i] > array[i + 1]) {
//                 isRepeat = true
//                 let temp = array[i + 1]
//                 array[i + 1] = array [i]
//                 array[i] = temp
//             }
//         }
//     }

//     return array.join("")
// }

// console.log(alphabetCharacter(charFirst))
// console.log(alphabetCharacter(charSecond))
// console.log(alphabetCharacter(charThird))

// // 4.existsHigherNumber

// // Buatlah sebuah fungsi apakah ada digit angka yang lebih besar didalam sebuah Array jika ada maka, buatlah sebuah fungsi yang
// // mengembalikan true atau false, jika ada salah satu digit angka dari sebuah Array yang lebih besar dari N atau yang sama dengan N,
// // jadi buatlah sebuah fungsi untuk soal berikut ini dan outputnya harus mengembalikan sebuah Boolean seperti dibawah ini.

// // Output:
// // existsHigherNumber([8, 4, 20, 32, 1], 10) ➞ true
// // existsHigherNumber([1, 3, 7, 4, 6], 8) ➞ false
// // existsHigherNumber([], 1) ➞ false

// // Answer:

// const arr1 = [8, 4, 20, 32, 1]
// const arr2 = [1, 3, 7, 4, 6]
// const arr3 = []

// function existsHigherNumber(array, n) {
//     var isHigherNumber = false
//     for(let i = 0; i < array.length; i++) {
//         if(array[i] >= n) {
//             isHigherNumber = true
//         }
//     }
//     return isHigherNumber
// }

// console.log(existsHigherNumber(arr1, 10))
// console.log(existsHigherNumber(arr2, 8))
// console.log(existsHigherNumber(arr3, 1))

// // 5.howManyAlphabet

// // Buatlah sebuah fungsi yang mengambil sebuah bilangan bulat, yang dimana bilangan bulatnya dialokasikan menjadi panjang huruf dari
// // sebuah Alfabet yaitu huruf A dari kata LAMBORGINI, jadi buatlah sebuah fungsi untuk soal berikut ini dan outputnya harus
// // mengembalikan sebuah String seperti dibawah ini.

// // INPUT:
// // LAMBORGINI

// // Output:
// // howManyAlphabet(7) ➞ "Laaaaaaamborgini"
// // howManyAlphabet(2) ➞ "Laamborgini"
// // howManyAlphabet(10) ➞ "Laaaaaaaaaaborgini"

// // Answer:

// const baseString = "LAMBORGINI";

// function howManyAlphabet(base, length) {
//     var baseString = base.splitCustom("");
//     var isRepeat = true;
//     var stringA = "";
//     for (let a = 0; a < length; a++) {
//         stringA = stringA + "a";
//     }
//     while (isRepeat) {
//         isRepeat = false;
//         for (let i = 0; i < baseString.length; i++) {
//             if (i > 0 && baseString[i] !== baseString[i].toLowerCase()) {
//                 baseString[i] = baseString[i].toLowerCase();
//                 isRepeat = true;
//             } else if (
//                 baseString[i].toLowerCase() === "a" &&
//                 baseString[i].toLowerCase() !== baseString[i + 1].toLowerCase()
//             ) {
//                 baseString[i] = stringA;
//                 isRepeat = true;
//             }
//         }
//     }
//     return baseString.joinCustom("");
// }

// console.log(howManyAlphabet(baseString, 7));
// console.log(howManyAlphabet(baseString, 2));
// console.log(howManyAlphabet(baseString, 10));

// 6.isPalidrome\
// Buatlah sebuah fungsi untuk menentukan Palindrome seperti kata-kata berikut dibawah ini, Palidrome identik dengan 
// penulisan karakter huruf yang maju mundur, jika huruf Palidromenya cocok maka akan mengembalikan sebuah nilai true 
// dan jika huruf Palidromenya tidak cocok maka akan mengembalikan sebuah nilai false, jadi buatlah sebuah fungsi 
// untuk soal berikut ini dan outputnya harus mengembalikan sebuah Boolean seperti dibawah ini.

// Output:
// isPalidrome("kakak") ➞ true
// isPalidrome("adik") ➞ false
// isPalidrome("sos") ➞ true
// isPalidrome("lawak") ➞ false

// function isPalidrome(value) {
//     let valueToString = value.split("")
//     let newString = []
//     for(let i = valueToString.length -1 ; i >= 0; i--) {
//         newString.push(valueToString[i])
//     }
//     return value === newString.join("")
//     console.log('isi ', newString)
// }

// console.log(isPalidrome("adik"))


// 7.removeCaracter

// Buatlah sebuah fungsi apakah ada sebuah Array String dengan kata-kata acak, yang dimana program anda tidak mau 
// menerima kata-kata tersebut yang dimulai dengan awalan huruf "C" kapital, anda harus menghapus kata-kata tersebut
// yang memliki awalan huruf "C" kapital, jadi buatlah sebuah fungsi untuk soal berikut ini dan outputnya harus 
// mengembalikan sebuah Array seperti dibawah ini.

// Output:

// removeCaracter(["Kambing", "Chapung",  "Kalong"]) ➞ ["Kambing", "Kalong"]
// removeCaracter(["ayam", "kuda", "badak"] ➞ ["ayam", "kuda", "badak"]
// removeCaracter(["Cacing", "Bebek", "Cicak", "Beruang"]) ➞ ["Beruang", "Bebek"]

// function removeCaracter(array) {
//     let newArray = []
//     array.map((val) =>{
//         let stringToArray = val.split("")
//         if(stringToArray[0] !== "C") {
//             newArray.push(val)
//         }
//     })

//     return newArray
// }

// console.log(removeCaracter(["Cacing", "Bebek", "Cicak", "Beruang"]))

// 8.matchDictonary

// Buatlah sebuah fungsi apakah ada beberapa kata - kata didalam sebuah Array yang cocok dengan inisialnya, 
// jika ada maka anda harus mengembalikan nilai tersebut yang kata - katanya cocok dengan inisialnya yang berada 
// didalam sebuah Array tersebut, jadi buatlah sebuah fungsi untuk soal berikut ini dan outputnya harus mengembalikan 
// sebuah Array seperti dibawah ini.

// Output:

// matchDictonary("ku", ["kuda", "kurus", "kece", "kucel"]) ➞ ["kuda", "kurus"]
// matchDictonary("di", ["diman", "dih", "debora", "deh", 'die']) ➞ ["diman", "dih", "die"]
// matchDictonary("ci", ["ayam", "kampus", "memang", "beda"]) ➞ []

// function matchDictonary(key, array) {
//     const newArray = []
//     for(let i =0; i < array.length; i++) {
//         if(array[i].includes(key)) {
//             newArray.push(array[i])
//         }
//     }
//     return newArray
// }

// matchDictonary("ku", ["kuda", "kurus", "kece", "kucel"])


// 9.additiveInverse

// Buatlah sebuah fungsi untuk menghitung matematik dengan mengunakan pola Additive Inverse seperti angka 
// berikut dibawah ini, Additive Inverse sangat identik dengan pertukaran angka dari Plus ke Mines begitu juga 
// sebaliknya, jadi buatlah sebuah fungsi untuk soal berikut ini dan outputnya harus mengembalikan sebuah Array 
// seperti dibawah ini.

// Output:

// additiveInverse([12, -7, -1, 3, 5]) ➞ [-12, 7, 1, -3, -5]
// additiveInverse([0, -3, 4, 1, 2]) ➞ [0, 3, -4, -1, -2]
// additiveInverse([-5, -25, 35]) ➞ [5, 25, -35]

// function additiveInverse (array) {
//     let newArray=[]
//     for(let i = 0; i < array.length; i++) {
//         if(array[i] === 0) {
//             newArray.push(array[i])
//         }else if(array[i] > 0) {
//             newArray.push(-array[i])
//         }else if(array[i] < 0) {
//             newArray.push(array[i] * (-1))
//         }
//     }

//     return newArray
// }

// console.log(additiveInverse([-5, -25, 35]))

// 10.reverseBool

// Buatlah sebuah fungsi untuk menentukan sebuah nilai apakah type datanya itu sebuah Boolean atau bukan, 
// jika type datanya Boolean dan bernilai true maka anda harus mengembalikan nilai false begitu juga sebaliknya, 
// atau jika type datanya bukan sebuah Boolean maka anda harus mengembalikan nilai "bukan boolean", jadi buatlah 
// sebuah fungsi untuk soal berikut ini dan outputnya harus mengembalikan sebuah String | Boolean seperti dibawah ini.

// Output:

// reverseBool(true) ➞ false
// reverseBool(false) ➞ true
// reverseBool({}) ➞ "bukan boolean"
// reverseBool(null) ➞ "bukan boolean"

// function reverseBool(value) {
//     if(typeof value === 'boolean') {
//         return !value
//     }else {
//         return "bukan boolean"
//     }
// }

// console.log(reverseBool(null))