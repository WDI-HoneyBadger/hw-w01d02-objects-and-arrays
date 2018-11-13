var snakewaterMontana = {
  paleontologist: "Dr. Alan Grant",
  depth: "10 meters",
  specimen: "Velociraptor"
}

var guestOfHonor = snakewaterMontana.paleontologist;
var cleverGirl = snakewaterMontana.specimen;

//console.log(guestOfHonor);
//console.log(cleverGirl);


var nicaragua = {
  depth: "200 meters",
  annualBudget: 1500000,
  specimens: [
    "Tyrannosaurus Rex",
    "Stegosaurous",
    "Triceratops",
    "Velociraptor"
  ]
}

var nicaraguanSpecimens = nicaragua.specimens;
//console.log(nicaraguanSpecimens);

var favoriteSpecimen = nicaragua.specimens[1];
//console.log(favoriteSpecimen);
nicaragua.annualBudget = nicaragua.annualBudget + 250000 ;

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

console.log(hammondsMines.mexico['depth']);

var mexicanMineDepth = hammondsMines.mexico['depth'];

console.log(hammondsMines.buenosAires['annualBudget']);
var BuenosAiresAnnualBudget = hammondsMines.buenosAires['annualBudget'];

console.log(hammondsMines.buenosAires['specimens']);

hammondsMines.nicaragua = nicaragua;
console.log(hammondsMines);

var annualBudget1 = hammondsMines.mexico['annualBudget'];
var annualBudget2 = hammondsMines.buenosAires['annualBudget'];
var annualBudget3 = hammondsMines.nicaragua['annualBudget'];

var totalAnnualCost = annualBudget1 + annualBudget2 + annualBudget3;
console.log(totalAnnualCost);

console.log(hammondsMines.mexico.specimens[1]);






