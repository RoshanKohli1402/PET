const myPet = new Pet("Buddy");

console.log(myPet.getStatus());

myPet.feed();
console.log("After feeding:");
console.log(myPet.getStatus());

myPet.play();
console.log("After playing:");
console.log(myPet.getStatus());
