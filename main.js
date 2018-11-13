//Yahya's solution 


//PART I:- 
console.log('PART I');
console.log('--------');
snakewaterMontana = {
    paleontologist: "Dr. Alan Grant",
    depth: "10 meters",
    specimen: "Velociraptor"
  }
var guestOfHonor = snakewaterMontana.paleontologist; // accessing the name and assiging it to the variable
console.log(guestOfHonor); // printing the result to the console.

var cleverGirl = snakewaterMontana.specimen;
console.log(cleverGirl); 



//PART II :-
console.log(' ');
console.log('PART II');
console.log('-------');
console.log(' ');
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
  var nicaraguanSpecimens = nicaragua.specimens; //assigning the value of the array to the giving variable.
  console.log(nicaraguanSpecimens); // priting . . 

  var favoriteSpecimen = nicaragua.specimens[3]; // assining my favour dinasour to the variable 
  console.log(favoriteSpecimen); // that should print "Velociraptor"
 
  nicaragua.annualBudget += 250000; // adds 250000 to annualBudget
  console.log(nicaragua.annualBudget); // printing the result after evaluating and reassining the var

//PART III :- 
console.log(' ');
console.log('PART III');
console.log('-------');
console.log(' ');
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

  depthOfMexico = hammondsMines.mexico.depth; // accessing both objects and getting to the depth key. "mexico"
  console.log(depthOfMexico); //printing it to the console

  var budgetOfBuenosAires = hammondsMines.buenosAires.annualBudget; // storing the value of the key annualBudget to the new var
    console.log(budgetOfBuenosAires);
    console.log(hammondsMines.buenosAires.specimens);
    hammondsMines.nicaragua = nicaragua;
    console.log(hammondsMines.nicaragua);

    var NAB = nicaragua.annualBudget; // NAB = nicaragua annualBudget 
    var BAN = hammondsMines.buenosAires.annualBudget;
    var MAB = hammondsMines.mexico.annualBudget;

console.log(NAB,' ', BAN, ' ', MAB);

totalAnnualBudget = NAB + BAN + MAB;
console.log(totalAnnualBudget);

console.log(hammondsMines.mexico.specimens[1]);