snakewaterMontana = {
    paleontologist: "Dr. Alan Grant",
    depth: "10 meters",
    specimen: "Velociraptor"
  }
  
  var guestOfHonor = snakewaterMontana.paleontologist;
  
  var cleverGirl = snakewaterMontana.specimen;

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

  var nicaraguanSpecimens = nicaragua.specimens;

  var favoriteSpecimen = nicaragua.specimens[0];

  nicaragua.annualBudget = nicaragua.annualBudget + 250000;

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

hammondsMines.mexico.depth;

console.log(hammondsMines.mexico.depth);

var mexicoDepth = hammondsMines.mexico.depth;

hammondsMines.buenosAires.annualBudget;

console.log(hammondsMines.buenosAires.annualBudget);

var annBudget = hammondsMines.buenosAires.annualBudget;

hammondsMines.buenosAires.specimens;

console.log(hammondsMines.buenosAires.specimens);

hammondsMines['nicaragua'] = nicaragua;

var bueBudget = hammondsMines.buenosAires.annualBudget;
var mecBudget = hammondsMines.mexico.annualBudget;
var nicBudget = hammondsMines.nicaragua.annualBudget;

var total = bueBudget + mecBudget + nicBudget;

hammondsMines.mexico.specimens[1];

console.log(hammondsMines.mexico.specimens[1]);

