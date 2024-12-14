//Start Integer
//Integer misollar 1-10 (6chi misolni ishlolmadim)

// Integer1
// Uch xonali son berilgan. Oldin uni birliklar xonasidagi raqamini, so'ng o'nliklar xonasidagi raqamini chiqaruvchi dastur tuzilsin.
function integer1(number) {
    let birliklar = number % 10;
    let onliklar = Math.floor((number % 100) / 10); 
    console.log("Birliklar:", birliklar);
    console.log("O'nliklar:", onliklar);
}

// Integer2
// Uch xonali son berilgan. Uning raqamlar yig'indisini aniqlovchi dastur tuzilsin.
function integer2(number) {
    let birliklar = number % 10;
    let onliklar = Math.floor((number % 100) / 10);
    let yuzliklar = Math.floor(number / 100);
    let sum = birliklar + onliklar + yuzliklar;
    console.log("Raqamlar yig'indisi:", sum);
}

// Integer3
// Uch xonali son berilgan. Uning raqamlarini teskari tartibda yozishdan hosil bo'lgan sonni aniqlovchi dastur tuzilsin.
function integer3(number) {
    let birliklar = number % 10;
    let onliklar = Math.floor((number % 100) / 10);
    let yuzliklar = Math.floor(number / 100);
    let teskari = birliklar * 100 + onliklar * 10 + yuzliklar;
    console.log("Teskari son:", teskari);
}

// Integer4
// Uch xonali son berilgan. Uning o'nliklar xonasidagi raqam bilan yuzliklar xonasidagi raqamni almashtirishdan hosil bo'lgan sonni aniqlovchi dastur tuzilsin.
function integer4(number) {
    let birliklar = number % 10;
    let onliklar = Math.floor((number % 100) / 10);
    let yuzliklar = Math.floor(number / 100);
    let yangiSon = onliklar * 100 + yuzliklar * 10 + birliklar;
    console.log("Yangi son:", yangiSon);
}

// Integer5
// Uch xonali son berilgan. Uning o'nliklar xonasidagi raqam bilan birliklar xonasidagi raqamni almashtirishdan hosil bo'lgan sonni aniqlovchi dastur tuzilsin.
function integer5(number) {
    let birliklar = number % 10;
    let onliklar = Math.floor((number % 100) / 10);
    let yuzliklar = Math.floor(number / 100);
    let yangiSon = yuzliklar * 100 + birliklar * 10 + onliklar;
    console.log("Yangi son:", yangiSon);
}

//  Integer6 biroz qiyinlik qildi.

// Integer7
// Kun boshidan boshlab N sekund vaqt o'tdi. Kun boshidan boshlab qancha to'la minut o'tganini aniqlovchi dastur tuzilsin.
function integer6(N) {
    let minut = Math.floor(N / 60);
    console.log("To'la minutlar:", minut);
}

// Integer8
// Kun boshidan boshlab N sekund vaqt o'tdi. Kun boshidan boshlab qancha to'la soat o'tganini aniqlovchi dastur tuzilsin.
function integer7(N) {
    let soat = Math.floor(N / 3600); // To'la soatlar
    console.log("To'la soatlar:", soat);
}

// Integer9
// Kun boshidan boshlab N sekund vaqt o'tdi. Kun boshidan boshlab qancha minut va sekund o'tganini aniqlovchi dastur tuzilsin.
function integer8(N) {
    let minut = Math.floor(N / 60); 
    let sekund = N % 60;
    console.log("To'la minutlar:", minut);
    console.log("Qoldiq sekundlar:", sekund);
}

// Integer9
// Kun boshidan boshlab N sekund vaqt o'tdi. Kun boshidan boshlab qancha soat va sekund o'tganini aniqlovchi dastur tuzilsin.
function integer9(N) {
    let soat = Math.floor(N / 3600); 
    let sekund = N % 3600;
    console.log("To'la soatlar:", soat);
    console.log("Qoldiq sekundlar:", sekund);
}

//Finish Integer



//Start boolean
// Boolean1 A soni musbatmi?
let A = 5; // Misol uchun
if (A > 0) {
  console.log("A soni musbat");
} else {
  console.log("A soni musbat emas");
}

// Boolean2 A soni toq sonmi?
A = 7; // Misol uchun
if (A % 2 === 1) {
  console.log("A soni toq son");
} else {
  console.log("A soni toq son emas");
}

// Boolean3 A > 2 va B <= 3
A = 4; // Misol uchun
let B = 2;
if (A > 2 && B <= 3) {
  console.log("A > 2 va B <= 3");
} else {
  console.log("A > 2 va B <= 3 shartlari bajarilmadi");
}

// Boolean4 A <= B <= C
A = 1; // Misol uchun
B = 2;
let C = 3;
if (A <= B && B <= C) {
  console.log("A <= B <= C");
} else {
  console.log("A <= B <= C shartlari bajarilmadi");
}

// Boolean5 A va B sonlarining har ikkisi ham yoki toq son yoki juft son
A = 4; // Misol uchun
B = 8;
if ((A % 2 === 0 && B % 2 === 0) || (A % 2 === 1 && B % 2 === 1)) {
  console.log("A va B sonlarining har ikkisi ham yoki toq son yoki juft son");
} else {
  console.log("A va B sonlari bir xil emas (juft yoki toq emas)");
}

// Boolean6 A, B, C sonlarining hech bo'lmaganda bittasi musbat
A = -1; // Misol uchun
B = -2;
C = 3;
if (A > 0 || B > 0 || C > 0) {
  console.log("A, B, C sonlarining hech bo'lmaganda bittasi musbat");
} else {
  console.log("A, B, C sonlarining hammasi manfiy");
}

// Boolean7 Ushbu sonning barcha raqamlari har xil
let number = 123; // Misol uchun
let birlik = number % 10;
let onlik = Math.floor((number % 100) / 10);
let yuzlik = Math.floor(number / 100);
if (birlik !== onlik && birlik !== yuzlik && onlik !== yuzlik) {
  console.log("Ushbu sonning barcha raqamlari har xil");
} else {
  console.log("Sonning raqamlarida takrorlanish bor");
}

// Boolean8 Berilgan uchta butun sonlarning hech bo'lmaganda 2 tasi biriga teng
A = 5; // Misol uchun
B = 5;
C = 3;
if (A === B || A === C || B === C) {
  console.log("Berilgan uchta butun sonlarning hech bo'lmaganda 2 tasi biriga teng");
} else {
  console.log("Uchta sonning hech biri teng emas");
}

//End Boolean
