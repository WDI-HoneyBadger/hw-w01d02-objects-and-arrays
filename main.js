 snakewaterMontana = {
    paleontologist: "Dr. Alan Grant",
    depth: "10 meters",
    specimen: "Velociraptor"
  }

var guestOfhonor = snakewaterMontana.paleontologist;
var cleverGirl = snakewaterMontana.specimen ;

console.log(guestOfhonor);
console.log(cleverGirl);

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

  nicaragua.annualBudget += 250000;
  var nicaraguanSpecimens = nicaragua.specimens;

  console.log(nicaraguanSpecimens);

  var favoriteSpecimen = "Troodon";

  console.log(favoriteSpecimen);
  console.log(nicaragua.annualBudget);
//Var favoriteSpecimen



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
  var mexico = (hammondsMines.mexico);

  console.log(hammondsMines.mexico.depth);
  console.log(hammondsMines.buenosAires.depth);

  var DepthofMex = hammondsMines.mexico.depth;

  console.log(hammondsMines.buenosAires.annualBudget);

  var hammondBeunosAnnual = hammondsMines.buenosAires.annualBudget;

  console.log(hammondsMines.buenosAires.specimens);

hammondsMines.nicaragua = nicaragua
console.log(hammondsMines);
var mexicoBudget = hammondsMines.mexico.annualBudget;
var buenosAiresBudget = hammondsMines.buenosAires.annualBudget;
var nicaraguaBudget = hammondsMines.nicaragua.annualBudget;

var totalOfBudget =[mexicoBudget + buenosAiresBudget+ nicaraguaBudget];
console.log(mexicoBudget);
console.log(buenosAiresBudget);
console.log(nicaraguaBudget);
console.log(totalOfBudget);
console.log(mexico.specimens[1]);
