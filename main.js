// Part 1
snakewaterMontana = {
  paleontologist: "Dr. Alan Grant",
  depth: "10 meters",
  specimen: "Velociraptor"
}
// 1
var guestOfHonor = snakewaterMontana.paleontologist;
// 2
var cleverGirl = snakewaterMontana.specimen;
console.log(cleverGirl);


// Part 2
nicaragua = {
  depth: "200 meters",
  annualBudget: 1500000,
  specimens: [
    "Tyrannosaurus Rex",
    "Stegosaurous",
    "Triceratops",
    "Velociraptor"
  ]
}
// 1. Store the array of specimens of this site into a variable called nicaraguanSpecimens.

var nicaraguanSpecimens = nicaragua.specimens;

// 2. Make a variable called favoriteSpecimen and assign it's value to your favorite dinosaur within nicaraguanSpecimens.

var favoriteSpecimen = nicaragua.specimens[0];

// Add 250000 to the annual budget of this site.
nicaragua.annualBudget = nicaragua.annualBudget + 250000;


// Part 3
hammondsMines = {
  buenosAires: {
    depth: "400 meters",
    annualBudget: 1000000,
    specimens: [
      "Dilophosaurus",
      "Brachiosaurus"
    ]
  },
  mexico: {
    depth: "350 meters",
    annualBudget: 900000,
    specimens: [
      "Gallimimus",
      "Parasaurolophus"
    ]
  }
}


//1 
console.log(hammondsMines.mexico.depth);

//2
var mexicoDepth = hammondsMines.mexico.depth;

//3 
console.log(hammondsMines.buenosAires.annualBudget);

//4
var annualBudgetBuenosAires = hammondsMines.buenosAires.annualBudget;

//5
console.log(hammondsMines.buenosAires.specimens);

//6
hammondsMines.nicaragua = nicaragua;

//7
var Budget1 = hammondsMines.nicaragua.annualBudget;

var Budget2 = hammondsMines.buenosAires.annualBudget;

var Budget3 = hammondsMines.mexico.annualBudget;

//8
var total = Budget3 + Budget2 + Budget1;

//9
console.log(hammondsMines.mexico.specimens[1]);