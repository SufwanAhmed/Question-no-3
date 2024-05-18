// lower Case
let personName : string = "Sufwan Ahmed";
console.log("lowerCase:",personName.toLowerCase());
// upper case
console.log("uppercase:",personName.toLocaleUpperCase());
// Title case
console.log("Titlecase:",personName.replace(/\bw/g,c=>c.toUpperCase()));
