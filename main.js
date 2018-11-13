//part1
 snakewaterMontana = {
    paleontologist: "Dr. Alan Grant",
    depth: "10 meters",
    specimen: "Velociraptor"
  }
  var guestOfHonor = snakewaterMontana.paleontologist;
  var cleverGirl = snakewaterMontana.specimen ;
  console.log(cleverGirl);
  //part2
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
var favoriteSpecimen = nicaragua.specimens[3];
var addNicaAnnBuddet = nicaragua.annualBudget + 250000;
console.log(addNicaAnnBuddet);

  //part3
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
  console.log(hammondsMines.mexico.depth);

  var depthOfMexico = hammondsMines.mexico.depth ; 
  console.log(depthOfMexico);

  console.log(hammondsMines.buenosAires.annualBudget);

  var annualBudgetForHammonsaMines = hammondsMines.buenosAires.annualBudget ;
  console.log(annualBudgetForHammonsaMines);

  console.log(hammondsMines.buenosAires.specimens);
  
   hammondsMines['nicaragua'] = nicaragua;
  console.log(hammondsMines);

var nicaraguaAnnualBudget = hammondsMines.nicaragua.annualBudget;
console.log(nicaraguaAnnualBudget);
var hammondsMinesBuenosAiresAnnualBudget = hammondsMines.buenosAires.annualBudget;
console.log(hammondsMinesBuenosAiresAnnualBudget);

var hmmondsMinesexicoannualBudget = hammondsMines.mexico.annualBudget;
console.log(hmmondsMinesexicoannualBudget);
var total = nicaraguaAnnualBudget + hammondsMinesBuenosAiresAnnualBudget + hmmondsMinesexicoannualBudget
console.log(total);

 console.log(hammondsMines.mexico.specimens[1]);

  

  
