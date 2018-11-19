
// PART 1
snakewaterMontana = {
    paleontologist: "Dr. Alan Grant",
    depth: "10 meters",
    specimen: "Velociraptor"
  };

/*  1. Create a variable called guestOfHonor 
    and assign it's value to the name of the paleontologist at Snakewater, Montana. */

  var guestOfHonor = "Dr. Alan Grant";

/*  2. Access the value of the specimen found in Snakewater, Montana, and 
    store it in a variable called cleverGirl.
*/  

 var cleverGirl = snakewaterMontana.specimen;




// PART 2

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


// 1. Store the array of specimens of this site into a variable called nicaraguanSpecimens.

  var nicaraguanSpecimens = nicaragua.specimens;

// 2. Make a variable called favoriteSpecimen and assign it's value to your favorite dinosaur within nicaraguanSpecimens.

  var favoriteSpecimen = nicaragua.specimens[0];

// Add 250000 to the annual budget of this site.

  nicaragua.annualBudget += 250000;
  console.log(favoriteSpecimen);




  // PART 3

  hammondsMines = {
    buenosAires: {
      depth: "400 meters",
      annualBudget: 1000000,
      specimens: [
        "Dilophosaurus",
        "Brachiosaurus",
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

// 1. Access the depth of John Hammond's mine in Mexico.
// 2. Store the depth of the Mexican mine into an appropriately named variable.

  var mexico_depth = hammondsMines.mexico.depth;

// 3. Access the annual budget for Hammond's mine in Buenos Airies.
// 4. Store the annual budget for Hammond's mine in Buenos Aires into an appropriately named variable..

  var annualBudget_buenosAires = hammondsMines.buenosAires.annualBudget;

// 5. Access the dinosaur DNA specimens found in Buenos Aires.
// 6. Insert Nicaragua into hammondsMines.
  hammondsMines.buenosAires.specimens = "Nicaragua";

// 7. Create three variables to store the annual budgets for each mine into them.
  var annualBudget_nicaragua = nicaragua.annualBudget; 
  var annualBudget_buenosAires = hammondsMines.buenosAires.annualBudget;
  var annualBudget_mexico = hammondsMines.mexico.annualBudget ;

/* 8. Create a new reasonably named variable to track the total annual cost of operation for 
the mines by adding the previously stored budgets.
 */

 var  annual_cost =  annualBudget_nicaragua + annualBudget_buenosAires + annualBudget_mexico;

// 9. Access the "Parasaurolophus" specimen.

  hammondsMines.mexico.specimens[1];

  

