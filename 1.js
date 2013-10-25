var age = 27;
var death_age = 85;
var packs_of_cigarettes = 0.5;

var years_left = death_age - age;
var days_left = years_left * 365;
var total_cigs = days_left * packs_of_cigarettes;

var result = "I would have smoked " + total_cigs.toLocaleString() + " more packs of cigarettes in my lifetime had I continued.";

console.log((days_left/2).toLocaleString());
console.log(result);
alert(result);

if (total_cigs < days_left) {
    alert('Congratulations! You quit in time! And you saved $' + (total_cigs*8).toLocaleString() + '!');
} else {
    console.log("Wow! A pack a day... you might not live to " + death_age);
}


