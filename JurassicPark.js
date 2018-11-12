//Part 1
var snakewaterMontana = {
    palentologist: "Dr. Alan Grant",
    depth: "10 meters",
    specimen: "Velociraptor"
}

    // 1-1
var guestOfHonor = snakewaterMontana.palentologist;

    //1-2
console.log(snakewaterMontana.specimen);
var cleverGirl = snakewaterMontana.specimen;

//Part 2
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

    //2-1
var nicaraguanSpecimens = nicaragua.specimens;

    //2-2
var favoriteSpecimen = nicaraguanSpecimens[3];

    //2-3
nicaragua.annualBudget = 250000;

//Part 3
var hammondsMines = {
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

    //3-1 
console.log(hammondsMines.mexico.depth);
    
    //3-2
var mexicoDepth = hammondsMines.mexico.depth;

    //3-3 
console.log(hammondsMines.buenosAires.annualBudget);  
    
    //3-4
var annualBudgetBuenosAires = hammondsMines.buenosAires.annualBudget;

    //3-5
console.log(hammondsMines.buenosAires.specimens);

     //3-6
hammondsMines.nicaragua = nicaragua;

     //3-7
var nicaraguaAnnualBudget = hammondsMines.nicaragua.annualBudget;

var buenosAiresAnnualBudget = hammondsMines.buenosAires.annualBudget;

var mexicoAnnualBudget = hammondsMines.mexico.annualBudget;

     //3-8
var totalAnnualBudget = mexicoAnnualBudget + buenosAiresAnnualBudget + nicaraguaAnnualBudget;

    //3-9
console.log(hammondsMines.mexico.specimens[1]);

