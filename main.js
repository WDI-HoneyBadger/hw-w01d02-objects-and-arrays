//---------------------Part1-----------------//
snakewaterMontana = {
    paleontologist: "Dr. Alan Grant",
    depth: "10 meters",
    specimen: "Velociraptor"
  }

  var guestOfHonor = snakewaterMontana.paleontologist;
  var cleverGirl = snakewaterMontana.specimen('Velociraptor');

  //----------------------Part2---------------//

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
var favoriteSpecimen = nicaragua.specimens([1]);

//var annBud = nicaragua.annualBudget;

function addBudget(){
    return nicaragua.annualBudget +250000;
}

//----------------------Part3---------------//
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

  var depthMine = hammondsMines.mexico.depth;//1

var depth = depthMine;//2

var annual = hammondsMines.buenosAires.annualBudget;//3
 var Budget = annual;//4

 var spec = mexico.specimen([1]);//9