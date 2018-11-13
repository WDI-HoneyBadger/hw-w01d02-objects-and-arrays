
// 1

snakewaterMontana = {
    paleontologist: "Dr. Alan Grant",
    depth: "10 meters",
    specimen: "Velociraptor"
  };

  var guestOfHonor = "Dr. Alan Grant";
  var cleverGirl = snakewaterMontana.specimen;

//2
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
  var favoriteSpecimen = "Tyrannosaurus Rex";
  nicaragua.annualBudget = 250000 ;

  
  // 3

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

  var mexico_depth = hammondsMines.mexico.depth;


  var annualBudget_buenosAires = hammondsMines.buenosAires.annualBudget;

  hammondsMines.buenosAires.specimens = "Nicaragua";

  var annualBudget_nicaragua = nicaragua.annualBudget;

  var annualBudget_buenosAires = hammondsMines.buenosAires.annualBudget;

  var annualBudget_mexico = hammondsMines.mexico.annualBudget ;

  var  annual_cost =  annualBudget_nicaragua + annualBudget_buenosAires + annualBudget_mexico;

  hammondsMines.mexico.specimens[1];