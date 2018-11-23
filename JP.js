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

  nicaraguanSpecimens = [nicaragua.specimens];
  console.log(nicaraguanSpecimens);
  var favoriteSpecimen = nicaraguanSpecimens;
  console.log(nicaraguanSpecimens[0]);


  nicaragua.annualBudget = 250000;



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

  var depthOfMine = hammondsMines.mexico.depthOfMine;
  var annualBudgetBuenosAires = hammondsMines.nicaragua.annualBudget;

  console.log(hammondsMines.buenosAires.specimens);

  hammondsMines.push(nicaragua);

  var buenosAriesBudget = hammondsMines.buenosAires.annualBudget;
  var mexicobudget = hammondsMines.mexico.annualBudget;
  var nicaraguabudget = hammondsMines.nicaragua.annualBudget;



  totalMineAnnualBudget = buenosAriesBudget + mexicobudget + nicaraguabudget;
  



  