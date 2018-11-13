snakewaterMontana = {
    paleontologist: "Dr. Alan Grant",
    depth: "10 meters",
    specimen: "Velociraptor"
}
// part 1.1 Create a variable
var guestOfHonor = snakewaterMontana.paleontologist ;

//part 1.2
console.log(snakewaterMontana.specimen);

nicaragua = {
    depth: "200 meters",
    ç: 1500000,
    specimens: [
      "Tyrannosaurus Rex",
      "Stegosaurous",
      "Triceratops",
      "Velociraptor"
    ]
  } 

  //part 2.1
  var nicaraguanSpecimens = nicaragua.specimens;

//part 2.2 
var favoriteSpecimen = nicaragua.specimens[0];

// part 2.3 
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

  // part 3.1
  console.log(hammondsMines.mexico.depth);

// part 3.2
var hammondName = hammondsMines.mexico.depth ;

// part 3.3
console.log(hammondsMines.buenosAires.annualBudget);

// part 3.4
var hammondBuAnn = hammondsMines.buenosAires.annualBudget ;

// part 3.5
console.log(hammondsMines.buenosAires.specimens);

// part 3.6
hammondsMines['nicaragua'] = nicaragua ;

// part 3.7
var annualBudget1 = hammondsMines.nicaragua.annualBudget;
var annualBudget2 = hammondsMines.buenosAires.annualBudget;
var annualBudget3= hammondsMines.mexico.annualBudget;

// part 3.8

var totalAnnualBudget = annualBudget1 + annualBudget2 + annualBudget3 ;
s
// part 3.9
console.log(hammondsMines.mexico.specimens[1]);