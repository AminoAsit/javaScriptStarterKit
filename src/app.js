console.log("Merhaba Kodlama.io")

//JS type safe değildir
//let değişken tanımlamak için kullanılır
let dolarBugun = 9.30
let dolarDun = 9.20
dolarDun = "9.20"
{
    let dolarDun = 9.10
}

console.log(dolarDun)

const euroDun = 11.2
//euroDun = 11 //Bunu bu şekilde yazamıyoruz, const sabit bir değer oluşturur sadece

console.log(euroDun)

//Birden fazla veriyi aynı yerde tutmak istiyorum bunun için array kullanılır
//camelCasing Değişkenin ilk harfi küçük, 2.kelimelerinin ilk harfi büyük
//PascalCasing Değişkenin ilk ve 2.kelimelerinin ilk harfi büyük

let konutKredileri = ["Konut Kredisi","Emlak Konut Kredisi","Kamu Konut Kredisi","Özel Konut Kredisi"]

//for - Döngü, Elimizdeki veriyi dolaşmaya yarar

console.log("<ul>")
for(let i = 0; i<konutKredileri.length;i++){
    console.log("<li>"+konutKredileri[i]+"</li>")
}
console.log("</ul>")

console.log(konutKredileri)