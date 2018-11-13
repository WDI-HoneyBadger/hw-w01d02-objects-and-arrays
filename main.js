snakewaterMontana = {
    paleontologist: "Dr. Alan Grant",
    depth: "10 meters",
    specimen: "Velociraptor"
  }
  var guestOfHonor = 'paleontologist';
  var cleverGirl = (snakewaterMontana['specimen']);
  var NameofPatSM = (snakewaterMontana['paleontologist']);
console.log(cleverGirl);
console.log(NameofPatSM); 
 

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
  var Newspecimens = nicaragua.specimens ;
  var nicaraguanSpecimens = (Newspecimens);
  var favoriteSpecimen = " Dilophosaurus ";
  var AnnualBudget = nicaragua.annualBudget += 250000 ;
console.log(favoriteSpecimen);
console.log(nicaraguanSpecimens);
console.log(AnnualBudget); 

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
  var depth = (' hammondsMines[mexico] ' + depth);
  var mexico = (hammondsMines.mexico);
  var buenosAires = (hammondsMines.buenosAires)
var BudofBueniAires = hammondsMines.buenosAires.annualBudget;
console.log(mexico.depth);
console.log( buenosAires.depth);
var DNA =  (buenosAires.specimens);
console.log(DNA);


hammondsMines.nicaragua = nicaragua;
console.log(hammondsMines);

var mexicoBud = mexico.annualBudget;
var buenosAiresBud = buenosAires.annualBudget;
var nicaraguaBud = nicaragua.annualBudget;

var totalannualBudget = [mexico.annualBudget + buenosAires.annualBudget + nicaragua.annualBudget];
console.log(mexicoBud);
console.log(buenosAiresBud);
console.log(nicaraguaBud);
console.log(totalannualBudget);
console.log(mexico.specimens[1]);

