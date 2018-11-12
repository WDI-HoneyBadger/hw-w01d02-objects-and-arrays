
//Part 1

 snakewaterMontana = {
    paleontologist: "Dr. Alan Grant",
    depth: "10 meters",
    specimen: "Velociraptor"
  }

  //1:1
  var guestOfHonor = snakewaterMontana.paleontologist;
  console.log(guestOfHonor);

  //2:1
  var cleverGirl = snakewaterMontana.specimen;
  console.log(cleverGirl);


//Part 2

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

  //1:2
  var nicaraguanSpecimens =  nicaragua.specimens;
  console.log(nicaraguanSpecimens);

  //2:2
  var favoriteSpecimen = nicaragua.specimens[1];
  console.log(favoriteSpecimen);

  //3:2
  var nicaraguaAnnualBudget = nicaragua.annualBudget + 250000; 
  console.log(nicaraguaAnnualBudget);


//Part 3

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

//1:3
console.log(hammondsMines.mexico.depth);

//2:3
var mexicanDepth = hammondsMines.mexico.depth;
console.log(mexicanDepth);

//3:3
console.log(hammondsMines.buenosAires.annualBudget);

//4:3
var hammondsBudgetBuenosAiries = hammondsMines.buenosAires.annualBudget;
console.log(hammondsBudgetBuenosAiries);

//5:3
console.log(hammondsMines.buenosAires.specimens);

//6:3
hammondsMines->nicaragua = nicaragua;

//7:3
var buenosAiresAnnualBudget = hammondsMines.buenosAires.annualBudget;
console.log(buenosAiresAnnualBudget);
var mexicoAnnualBudget = hammondsMines.mexico.annualBudget;
console.log(mexicoAnnualBudget);
var nicaraguaAnnualBudget = hammondsMines.nicaragua.annualBudget;
console.log(nicaraguaAnnualBudget);

//8:3
var hammondsTotalBudgets = buenosAiresAnnualBudget + mexicoAnnualBudget + nicaraguaAnnualBudget;
console.log(hammondsTotalBudgets);

//9:3
console.log(hammondsMines.mexico.specimens[1]); 