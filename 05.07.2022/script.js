const now = new Date();
const dayTime = now.getHours();

if (dayTime >= 6 && dayTime < 12) {
  alert("Sabahiniz xeir , xos gunler! ");
} else {
  alert("axsaminiz xeir yaxsisiniz inasallah!");
}

var array1 = ["Eli", "Huseyin", "Jahangir"];
var array2 = ["Pasha", "Melek"];
for (let index = 0; index < array1.length; index++) {
  array2.push(array1[index]);
}
console.log(array2);
