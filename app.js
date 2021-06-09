var ime = "Micko";
var spol = "m";
var vrsta = "mačka";
var boja = "crno-bijela";
var godine = 13;
if (spol == "m") {
    console.log(ime, "is a good boy");
}
if (spol == "ž") {
    console.log(ime, "is a good girl");
}
var bonus = ime.concat(' je ', boja, ' ', vrsta, ' i ima', ' ', godine, ' godina', '.', ' Živio Micko još 100 godina!!!');
console.log(bonus);
