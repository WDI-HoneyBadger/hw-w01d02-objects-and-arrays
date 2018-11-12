// Part 1
snakewaterMontana = {
    paleontologist: "Dr. Alan Grant",
    depth: "10 meters",
    specimen: "Velociraptor"
}
  // 1
  var guestOfHonor = snakewaterMontana.name;
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

  // 1
  var nicaraguanSpecimens = nicaragua.specimens;
  // 2
  var favoriteSpecimen = nicaragua.specimens[0];
  // 3
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

  // 1
  console.log(hammondsMines.mexico.depth);
  // 2
  var depthOnMexican = hammondsMines.mexico.depth;
  // 3
  console.log(hammondsMines.buenosAires.annualBudget);
  // 4
  var annualBudgetnBuenosAires = hammondsMines.buenosAires.annualBudget;
  // 5
  console.log(hammondsMines.buenosAires.specimens);
  // 6
  hammondsMines['nicaragua'] = nicaragua;
  // 7
  var annualBudgetOfB = hammondsMines.buenosAires.annualBudget;
  var annualBudgetOfM = hammondsMines.mexico.annualBudget;
  var annualBudgetOfN = hammondsMines.nicaragua.annualBudget;
  // 8
  var totalAnnualBudget =  annualBudgetOfB + annualBudgetOfM + annualBudgetOfN;
  // 9
  console.log(hammondsMines.mexico.specimens[1]);