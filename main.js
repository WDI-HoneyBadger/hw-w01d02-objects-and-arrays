
snakewaterMontana = {
    paleontologist: "Dr. Alan Grant",
    depth: "10 meters",
    specimen: "Velociraptor"
  }
//........PART 1.........//

  var guestOfHonor = {paleontologist: "Dr. Alan Grant",}
  var cleverGirl = snakewaterMontana.specimen;
  console.log(cleverGirl);
//.......................//

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
//........PART 2.........//
var nicaraguanSpecimens = nicaragua["specimen"]
var favoriteSpecimen = nicaragua.specimens[2];
console.log(favoriteSpecimen);
nicaragua.annualBudget =(250000)

console.log(nicaragua["annualBudget"]);
//.........................//

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


//........PART 3.........//
//1
hammondsMines.mexico.depth;
//2
var hammondsMiness = hammondsMines.mexico.depth
 console.log(hammondsMiness)
//3
 hammondsMines.buenosAires.annualBudget
 console.log( hammondsMines.buenosAires.annualBudget)

//4
 var annualBudgett = hammondsMines.buenosAires.annualBudget
 console.log(annualBudgett)
 hammondsMines.buenosAires.annualBudget
//5
hammondsMines.buenosAires.specimens[0]
//6
hammondsMines["nicaragua"] = {
  depth: "200 meters",
  annualBudget: 1500000,
  specimens: [
    "Tyrannosaurus Rex",
    "Stegosaurous",
    "Triceratops",
    "Velociraptor"
  ]
}


console.log(hammondsMines)
 //7
 var storeAnual1 = hammondsMines.buenosAires.annualBudget;
 var storeAnual2 = hammondsMines.mexico.annualBudget;
 var storeAnual3 = hammondsMines.nicaragua.annualBudget;
 
 //8
 var totalAnnualCost = storeAnual1+ storeAnual2 + storeAnual3
 console.log(totalAnnualCost)


//9
hammondsMines.mexico.specimens[1];
console.log(hammondsMines.mexico.specimens[1])
 