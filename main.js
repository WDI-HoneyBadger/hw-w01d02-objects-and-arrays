snakewaterMontana = {
    paleontologist: "Dr. Alan Grant",
    depth: "10 meters",
    specimen: "Velociraptor"
  }

  var guestOfHonor = snakewaterMontana.paleontologist;
  console.log(guestOfHonor);

  var cleverGirl = snakewaterMontana.specimen;
  console.log(cleverGirl);

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
  console.log(nicaraguanSpecimens);

  var favoriteSpecimen = nicaraguanSpecimens [1] ;
  console.log(favoriteSpecimen);

  var nicaraguaAnnualBudget = nicaragua.annualBudget + 250000 ;
  console.log(nicaraguaAnnualBudget);


 hammondsMines = {
  buenosAires: {
    depth: "400 meters",
    annualBudget: 1000000,
    specimens: [
      "Dilophosaurus",
      "Brachiosaurus",
      "Nicaragua"
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

  //1. Access the depth of John Hammond's mine in Mexico.
  console.log(hammondsMines.mexico.depth);

  //2. Store the depth of the Mexican mine into an appropriately named variable.
  var mexicoDepth = hammondsMines.mexico.depth;

  //3. Access the annual budget for Hammond's mine in Buenos Airies.
  console.log(hammondsMines.buenosAires.annualBudget);

  //4. Store the annual budget for Hammond's mine in Buenos Aires into an appropriately named variable..
var newAnnualBudget = hammondsMines.buenosAires.annualBudget;
 // 5. Access the dinosaur DNA specimens found in Buenos Aires.
 console.log(hammondsMines.buenosAires.specimens);

  //6. Insert Nicaragua into hammondsMines
  hammondsMines['nicaragua'] = nicaragua;
  console.log(hammondsMines);

  //7. Create three variables to store the annual budgets for each mine into them.
  var buenosAiresAnnualBudget = hammondsMines.buenosAires.annualBudget;
  var mexicoAnnualBudget = hammondsMines.mexico.annualBudget;
  var nicaraguaAnnualBudget = hammondsMines.nicaragua.annualBudget;

  //8. Create a new reasonably named variable to track the total annual cost of operation for the mines by adding the previously stored budgets.
 var budgetForAll =  buenosAiresAnnualBudget+ mexicoAnnualBudget + nicaraguaAnnualBudget;
  //9. Access the "Parasaurolophus" specimen.
  console.log(hammondsMines.mexico.specimens[1]);







 //var mexicoDepth = "350 meters";
 //console.log(mexicoDepth);

 //var buenosAiresAnnualBudget = 1000000;
 //console.log(buenosAiresAnnualBudget);









  
  




