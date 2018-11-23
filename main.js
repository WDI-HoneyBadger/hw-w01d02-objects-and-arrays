snakewaterMontana = {
    paleontologist: "Dr. Alan Grant",
    depth: "10 meters",
    specimen: "Velociraptor"
  }
  //part 1
  var guestOfHonor = snakewaterMontana.paleontologist;
    console.log(guestOfHonor);

  
  //2

var cleverGirl = snakewaterMontana.specimen;
console.log(cleverGirl);

  //part 2

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
//1 
var nicaraguanSpecimens = nicaragua.specimens;
console.log(nicaraguanSpecimens);
//2
var favoriteSpecimen = nicaraguanSpecimens;
console.log(nicaraguanSpecimens[1]);

//3

console.log(nicaragua.annualBudget + 250000);


//part 3

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
//1
  console.log(hammondsMines.mexico.depth);
  //2

  //3
  console.log(hammondsMines.buenosAires.annualBudget);

//4
var newBudget = hammondsMines.buenosAires.annualBudget;
console.log(newBudget);
//5
hammondsMines.buenosAires.specimens.push('DNA');
console.log(hammondsMines.buenosAires.specimens);


//6 
hammondsMines.nicaragua = nicaragua;
console.log(hammondsMines);


//7 
var newB = hammondsMines.buenosAires.annualBudget;
console.log(newB);
var newB2 = hammondsMines.mexico.annualBudget;
console.log(newB2);
var newB3 = hammondsMines.nicaragua.annualBudget;
console.log(newB3);

// 8 
var totalAnnualBudget = [newB, newB2, newB3];
console.log(totalAnnualBudget);

//9 
console.log(hammondsMines.mexico.specimens[1]);




  //console.log(annualBudget[buenosAires]);
  //console.log(buenosAires[specimen]);

  //var annualBudget = [250000, 1000000, 900000];
  //var totalAnnualBudget = {
    
  //}
  
