// if1

// let berilganSon = prompt("son kiriting:");

// if (berilganSon > 0) {
//     berilganSon = parseInt(berilganSon) + 1;
// }

// console.log("xosil bo'lgan son: " + berilganSon);




// if2

// let berilganSon = prompt("butun son kiriting:");

// if (berilganSon > 0) {
//     berilganSon = parseInt(berilganSon) + 1;
// } else if (berilganSon < 0) {
//     berilganSon = parseInt(berilganSon) - 2;
// } else {
//     berilganSon = 10;
// }

// console.log("xosil bo'lgan son: " + berilganSon);



// if3

// let number1 = prompt("birinchi sonni kiriting:");
// let number2 = prompt("ikkinchi sonni kiriting:");
// let number3 = prompt("uchinchi sonni kiriting:");

// let musbatSon = 0;
// let manfiySon = 0;

// if (number1 > 0) {
//     musbatSon++;
// } else if (number1 < 0) {
//     manfiySon++;
// }

// if (number2 > 0) {
//     musbatSon++;
// } else if (number2 < 0) {
//     manfiySon++;
// }

// if (number3 > 0) {
//     musbatSon++;
// } else if (number3 < 0) {
//     manfiySon++;
// }

// console.log("Musbat sonlar soni: " + musbatSon);
// console.log("Manfiy sonlar soni: " + manfiySon);




// if4


// let number1 = prompt("Birinchi sonni kiriting:");
// let number2 = prompt("Ikkinchi sonni kiriting:");

// let kattaSon;

// if (number1 > number2) {
//     kattaSon = number1;
// } else {
//     kattaSon = number2;
// }

// console.log("Eng katta son: " + kattaSon);



// if5

// let number1 = prompt("birinchi sonni kiriting:");
// let number2 = prompt("ikkinchi sonni kiriting:");

// let kichikSon;

// if (number1 < number2) {
//     kichikSon = number1;
// } else {
//     kichikSon = number2;
// }

// console.log("eng kichik son: " + kichikSon);






// if6

// let number1 = prompt("birinchi sonni kiriting:");
// let number2 = prompt("ikkinchi sonni kiriting:");

// number1 = parseInt(number1);
// number2 = parseInt(number2);

// let kattaSon, kichikSon;

// if (number1 > number2) {
//     kattaSon = number1;
//     kichikSon = number2;
// } else {
//     kattaSon = number2;
//     kichikSon = number1;
// }
// console.log(" katta son: " + kattaSon);
// console.log(" kichik son: " + kichikSon);




// if7

// let A = parseFloat(prompt("A ni kiriting:"));
// let B = parseFloat(prompt("B ni kiriting:"));

// if (A >= B) {
//     let temp = A;
//     A = B;
//     B = temp;
// }
// let natija = A + B

// console.log("A = " + A);
// console.log("B = " + B);
// console.log(natija);


// if8


// let A = parseInt(prompt("A ni kiriting:"));
// let B = parseInt(prompt("B ni kiriting:"));
// let natija = A + B;


// if (A !== B) {
//     let yigindi = A + B;
//     A = yigindi;
//     B = yigindi;

// console.log("A = " + A);
// console.log("B = " + B);

// } else {
//     A = 0;
//     B = 0;
//     console.log(0);
//     console.log("A va B ni qiymati = " + natija);

// }






// if9

// let A = parseInt(prompt("A ni kiriting:"));
// let B = parseInt(prompt("B ni kiriting:"));
// let natija = ( A + B );


// if (A !== B) {
//     if (A > B) {
//         console.log("A = " + A);
//     } else {
//         A < B;
//         console.log("B = " + B);
//     }
// } else {
//     A = 0;
//     B = 0;
//     console.log(0);
//     console.log("A va B ni qiymati: " + natija);

// }



// if10

// let number1 = parseFloat(prompt("birinchi sonni kiriting:"));
// let number2 = parseFloat(prompt("ikkinchi sonni kiriting:"));
// let number3 = parseFloat(prompt("uchinchi sonni kiriting:"));

// let kichikSon;

// if (number1 < number2 && number1 < number3) {
//     kichikSon = number1;
// } else if (number2 < number1 && number2 < number3) {
//     kichikSon = number2;
// } else {
//     kichikSon = number3;
// }

// console.log("Eng kichik son: " + kichikSon);



// if11

// let number1 = parseFloat(prompt("Birinchi sonni kiriting:"));
// let number2 = parseFloat(prompt("Ikkinchi sonni kiriting:"));
// let number3 = parseFloat(prompt("Uchinchi sonni kiriting:"));

// let middleNumber;

// if ((number1 >= number2 && number1 <= number3) || (number1 >= number3 && number1 <= number2)) {
//     middleNumber = number1;
// } else if ((number2 >= number1 && number2 <= number3) || (number2 >= number3 && number2 <= number1)) {
//     middleNumber = number2;
// } else {
//     middleNumber = number3;
// }

// console.log("middle number: " + middleNumber);


// if12


// let son1 = parseFloat(prompt("Birinchi sonni kiriting:"));
// let son2 = parseFloat(prompt("Ikkinchi sonni kiriting:"));
// let son3 = parseFloat(prompt("Uchinchi sonni kiriting:"));

// let yigindi1 = son1 + son2;
// let yigindi2 = son2 + son3;
// let yigindi3 = son1 + son3;

// let engKattaYigindi = Math.max(yigindi1, yigindi2, yigindi3);
// let ikkinchiSon;

// if (engKattaYigindi === yigindi1) {
//     ikkinchiSon = son3;

// } else if (engKattaYigindi === yigindi2) {
//     ikkinchiSon = son1;
// } else {
//     ikkinchiSon = son2;
// }

// console.log("Eng katta yig'indi: " + engKattaYigindi);




// if13


// let A = parseFloat(prompt("A ni kiriting:"));
// let B = parseFloat(prompt("B ni kiriting:"));
// let C = parseFloat(prompt("C ni kiriting:"));
// let natija = ( A + B + C);

// if (A > B) {
//     let temp = A;
//     A = B;
//     B = temp;

// }
// else
// {
//     console.log(natija);
// }
// if (B > C) {
//     temp = B;
//     B = C;
//     C = temp;
// }


// console.log("A = " + A);
// console.log("B = " + B);
// console.log("C = " + C);


// if15



// let son1 = parseInt(prompt("Birinchi sonni kiriting:"));
// let son2 = parseInt(prompt("Ikkinchi sonni kiriting:"));
// let son3 = parseInt(prompt("Uchinchi sonni kiriting:"));
// let son4 = parseInt(prompt("To'rtinchi sonni kiriting:"));

// let firstNumber, secondNumber, thirdNumber, fourthNumber;

// if (son1 === son2) {
//     firstNumber = son1;
//     secondNumber = son2;
//     thirdNumber = son3;
//     fourthNumber = son4;
// } else if (son1 === son3) {
//     firstNumber = son1;
//     secondNumber = son3;
//     thirdNumber = son2;
//     fourthNumber = son4;
// } else if (son1 === son4) {
//     firstNumber = son1;
//     secondNumber = son4;
//     thirdNumber = son2;
//     fourthNumber = son3;
// } else if (son2 === son3) {
//     firstNumber = son2;
//     secondNumber = son3;
//     thirdNumber = son1;
//     fourthNumber = son4;
// } else if (son2 === son4) {
//     firstNumber = son2;
//     secondNumber = son4;
//     thirdNumber = son1;
//     fourthNumber = son3;
// } else if (son3 === son4) {
//     firstNumber = son3;
//     secondNumber = son4;
//     thirdNumber = son1;
//     fourthNumber = son2;
// }

// console.log("Uchtasi o'zaro teng bo'lgan sonlar: " + firstNumber + ", " + secondNumber + ", " + thirdNumber);
// console.log("Qolgan sonning tartib raqami: " + fourthNumber);





// if16

// function calculateFunction(x) {
//     if (x <= 0) {
//         return -x;
//     } else if (0 < x && x < 2) {
//         return Math.pow(x, 2);
//     } else {
//         return 4;
//     }
// }

// let x = parseFloat(prompt("x ni kiriting:"));

// let result = calculateFunction(x);

// console.log("Natija: " + result);






// if17


// function analyzeNumber( son) {
//     if ( son >= 1 &&  son <= 999) {
//         let length =  son.toString().length;

//         if (length == 2 &&  son % 2 === 0) {
//             return "Ikki xonali juft son";
//         } else if (length == 3 &&  son % 2 !== 0) {
//             return "Uch xonali toq son";
//         } else {
//             return "va hkz";
//         }
//     } else {
//         return "Noto'g'ri son kiritildi";
//     }
// }

// let son = parseInt(prompt("1-999 oraliqdagi son kiriting:"));

// console.log(analyzeNumber(son));



// case1

// let k = parseInt(prompt("Baho sonini kiriting:"));

// if (k >= 1 && k <= 5) {
//     switch (k) {
//         case 1:
//             console.log("Yomon");
//             break;
//         case 2:
//             console.log("Qoniqarsiz");
//             break;
//         case 3:
//             console.log("Qoniqarli");
//             break;
//         case 4:
//             console.log("Yahshi");
//             break;
//         case 5:
//             console.log("A'lo");
//             break;
//     }
// } else {
//     console.log("Xato");
// }




// case2

// let oy = parseInt(prompt("Oy raqamini kiriting:"));

// if (oy >= 1 && oy <= 12) {
//     switch (oy) {
//         case 1:
//         case 2:
//         case 12:
//             console.log("Qish");
//             break;
//         case 3:
//         case 4:
//         case 5:
//             console.log("Bahor");
//             break;
//         case 6:
//         case 7:
//         case 8:
//             console.log("Yoz");
//             break;
//         case 9:
//         case 10:
//         case 11:
//             console.log("Kuz");
//             break;
//     }
// } else {
//     console.log("Noto'g'ri oy raqami kiritildi");
// }



// case3

// let oy = parseInt(prompt("Oy raqamini kiriting (1-12):"));

// if (oy >= 1 && oy <= 12) {
//     switch (oy) {
//         case 1:
//         case 3:
//         case 5:
//         case 7:
//         case 8:
//         case 10:
//         case 12:
//             console.log("Bu oyda 31 kun bor.");
//             break;
//         case 4:
//         case 6:
//         case 9:
//         case 11:
//             console.log("Bu oyda 30 kun bor.");
//             break;
//         case 2:
//             console.log("Bu oyda 28 kun bor.");
//             break;
//     }
// } else {
//     console.log("Noto'g'ri oy raqami kiritildi");
// }


// case4

// let birlik = parseInt(prompt("Uzunlik birliklarini tanlang:\n1 - Desimetr\n2 - Kilometr\n3 - Metr\n4 - Millimetr\n5 - Santimetr"));
// let uzunlik = parseFloat(prompt("Kesma uzunligi:"));

// switch (birlik) {
//     case 1:
//         uzunlik /= 10.0;  
//     case 2:
//         uzunlik *= 1000.0;  
//         break;
//     case 3:
       
//         break;
//     case 4:
//         uzunlik /= 1000.0;  
//     case 5:
//         uzunlik /= 100.0;  
//         break;
//     default:
//         console.log("Noto'g'ri uzunlik birliği tanlandi.");
//         break;
// }

// console.log("Kesma uzunligi metrlarda: " + uzunlik.toFixed(4) + " metr");


// case5

// let birlik = parseInt(prompt("Og'irlik birliklarini tanlang:\n1 - Kilogramm\n2 - Milligramm\n3 - Gramm\n4 - Tonna\n5 - Sentner"));
// let ogirlik = parseFloat(prompt("Og'irlik qiymati:"));

// switch (birlik) {
//     case 1:
//         break;
//     case 2:
//         ogirlik /= 1000000.0; 
//         break;
//     case 3:
//         ogirlik /= 1000.0;  
//         break;
//     case 4:
//         ogirlik *= 1000.0;  
//         break;
//     case 5:
//         ogirlik *= 100.0;  
//         break;
//     default:
//         console.log("Noto'g'ri og'irlik birliği tanlandi.");
//         break;
// }

// console.log("Og'irlik kilogrammda: " + ogirlik.toFixed(4) + " kilogram");





// case7

// let kun = parseInt(prompt("Kunni kiriting:"));
// let oy = parseInt(prompt("Oy raqamini kiriting:"));

// if ((oy >= 1 && oy <= 12) && (kun >= 1 && kun <= 31)) {
//     if ((oy == 1 || oy == 3 || oy == 5 || oy == 7 || oy == 8 || oy == 10 || oy == 12) && (kun >= 1 && kun <= 31)) {
//         if (kun < 31) {
//             kun++;
//         } else {
//             kun = 1;
//             if (oy < 12) {
//                 oy++;
//             } else {
//                 oy = 1;
//             }
//         }
//     } else if ((oy == 4 || oy == 6 || oy == 9 || oy == 11) && (kun >= 1 && kun <= 30)) {
//         if (kun < 30) {
//             kun++;
//         } else {
//             kun = 1;
//             oy++;
//         }
//     } else if (oy == 2) {
//         if ((kun >= 1 && kun <= 28) || (kun == 29 && ((yil(oy) && kun == 29) || (!yil(oy) && kun == 28)))) {
//             if (kun < (yil(oy) ? 29 : 28)) {
//                 kun++;
//             } else {
//                 kun = 1;
//                 oy++;
//             }
//         }
//     }

//     console.log("Sanadan keyingi kun: " + kun + ", oy: " + oy);
// } else {
//     console.log("Noto'g'ri kun yoki oy raqami kiritildi.");
// }

// function yil(oy) {
//     return (oy % 4 == 0 && oy % 100 != 0) || (oy % 400 == 0);
// }






// cse10

// let funcSize = parseInt(prompt("Masala sonini kiriting (10-40):"));

// let words = generatsiyaQil(funcSize);

// console.log(funcSize + " masala uchun mos so'zlar:");
// console.log(words.join(", "));

// function generatsiyaQil(funcSize) {
//     let words = [];
//     let firstWord = "masala";
    
//     for (let i = 1; i <= funcSize; i++) {
//         let word = firstWord;
        
//         if (i === 10 || i === 20 || i === 30) {
//             word += "ta";
//         } else if (i % 10 === 3 || i % 10 === 4) {
//             word += "ta";
//         } else {
//             word += "lar";
//         }
        
//         words.push(word);
//     }
    
//     return words;
// }


// case11

let son = parseInt(prompt("100-999 oraliqdagi sonni kiriting:"));

if (son >= 100 && son <= 999) {
    let birliklar = ["", "bir", "ikki", "uch", "to'rt", "besh", "olti", "yetti", "sakkiz", "to'qqiz"];
    let onliklar = ["", "o'n", "yigirma", "o'ttiz", "qirq", "ellik", "oltmish", "yetmish", "sakson", "to'qson"];
    let yuzliklar = ["", "bir yuz", "ikki yuz", "uch yuz", "to'rt yuz", "besh yuz", "olti yuz", "yetti yuz", "sakkiz yuz", "to'qqiz yuz"];

    let yuzlar = Math.floor(son / 100);
    let onlik = Math.floor((son % 100) / 10);
    let birlik = son % 10;

    let soz = yuzliklar[yuzlar];
    
    if (onlik > 0) {
        soz += " " + onliklar[onlik];
    }

    if (birlik > 0) {
        soz += " " + birliklar[birlik];
    }

    console.log(son + " - \"" + soz.trim() + "\"");
} else {
    console.log("Noto'g'ri son kiritildi.");
}


