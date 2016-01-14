"use strict";

function convert(number) { 
    var roman = new Array(); 
    roman = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"]; 
	
    var decimal = new Array(); 
    decimal = [1000,900,500,400,100,90,50,40,10,9,5,4,1]; 
	
    var romanNumeral = ""; 
    for (var i=0; i<roman.length; i++) { 
      while (number >= decimal[i]) {  
        number -= decimal[i]; 
        romanNumeral += roman[i]; 
		console.log(i)
      } 
    } 
    return romanNumeral; 
}

console.log(convert(10));
console.log(convert(18));
console.log(convert(29));
console.log(convert(47));
console.log(convert(654));
console.log(convert(1001));