// Part 1
var snakewaterMontana = {
    paleontologist: "Dr. Alan Grant",
    depth: "10 meters",
    specimen: "Velociraptor"
  };

// Part 1.1
var guestOfHonor = snakewaterMontana.paleontologist;
// Part 1.2
var cleverGirl = snakewaterMontana.specimen;
  
// part 2
var nicaragua = {
        depth: "200 meters",
        annualBudget: 1500000,
        specimens: [
        "Tyrannosaurus Rex",
        "Stegosaurous",
        "Triceratops",
        "Velociraptor"
        ]
    };

// Part 2.1
var nicaraguanSpecimens = nicaragua.specimens;

// Part 2.1
var favoriteSpecimen = nicaraguanSpecimens[2];

// Part 2.3
nicaragua.annualBudget = nicaragua.annualBudget + 250000;

// Part 3
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
  };

  // Part 3.1
  hammondsMines.mexico.depth;

  // Part 3.2
  var hammondsMinesMexicoDepth = hammondsMines.mexico.depth;

  // Part 3.3
  hammondsMines.buenosAires.annualBudget;

  // Part 3.4
  var annualBudgetInBuenosAires = hammondsMines.buenosAires.annualBudget;

  // Part 3.5
  hammondsMines.buenosAires.specimens;

  // Part 3.6
  hammondsMines.nicaragua = nicaragua;
  console.log(hammondsMines);

  // Part 3.7
  // the annual budget of BuenosAires has been defined in 3.4 as annualBudgetInBuenosAires
  var annualBudgetInMexico = hammondsMines.mexico.annualBudget;
  var annualBudgetInNicaragua = hammondsMines.nicaragua.annualBudget;

  // Part 3.8
  var hammondsMinesTotalAnnualCost = annualBudgetInBuenosAires + annualBudgetInMexico + annualBudgetInNicaragua

  // Part 3.9
  hammondsMines.mexico.specimens[1];