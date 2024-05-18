// lower Case
var personName = "Sufwan Ahmed";
console.log("lowerCase:", personName.toLowerCase());
// upper case
console.log("uppercase:", personName.toLocaleUpperCase());
// Title case
console.log("Titlecase:", personName.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
