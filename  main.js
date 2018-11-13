# Digging for Dinosaurs with John Hammond

![](https://www.shakefire.com/sites/default/files/uploads/images/jp2.jpg)

## Introduction
Hello and welcome to Jurassic Park! You have been brought on to manage the dig sites for Dr. John Hammond. No expense has been spared, and the data on each mine is currently stored in the javascript objects below.

## Setup
- Fork this repo.
- Clone the fork in your `wdi/homework` directory

## Completion
Complete all 3 parts.

## Part 1

```javascript
snakewaterMontana = {
  paleontologist: "Dr. Alan Grant",
  depth: "10 meters",
  specimen: "Velociraptor"
}
```

  1. Create a variable called guestOfHonor and assign it's value to the name of the paleontologist at Snakewater, Montana.
 var guestOfHonor = snakewaterMontana.paleontologist;
  2. Access the value of the specimen found in Snakewater, Montana, and store it in a variable called cleverGirl.
 var cleverGirl = snakewaterMontana.specimen;
 console.log(cleverGirl);

## Part 2


```javascript

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

```

  1. Store the array of specimens of this site into a variable called nicaraguanSpecimens.
 nicaraguanSpecimens = pecimens [
      "Tyrannosaurus Rex",
      "Stegosaurous",
      "Triceratops",
      "Velociraptor" ]
    
  2. Make a variable called favoriteSpecimen and assign it's value to your favorite dinosaur within nicaraguanSpecimens.
  var favoriteSpecimen = nicaraguanSpecimens [0];

  3. Add 250000 to the annual budget of this site.
  nicaragua.annualBudget = += 250000;

## Part 3

```javascript
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
```

  1. Access the depth of John Hammond's mine in Mexico.
console.log(hammondsMines.mexico.depth);

 
 

  2. Store the depth of the Mexican mine into an appropriately named variable.
  var element = hammondsMines.Mexican.depth;

  3. Access the annual budget for Hammond's mine in Buenos Airies.
 console.log(hammondsMines.buenosAires.annualBudget);
  4. Store the annual budget for Hammond's mine in Buenos Aires into an appropriately named variable..
  var elem = hammondsMines.buenosAires.annualBudget;

  5. Access the dinosaur DNA specimens found in Buenos Aires.

  6. Insert Nicaragua into hammondsMines
  hammondsMines= nicaragua.nicaragua;
  7. Create three variables to store the annual budgets for each mine into them.
   var bdgets1; var bdgets2; var bdgets3;
  8. Create a new reasonably named variable to track the total annual cost of operation for the mines by adding the previously stored budgets.
  var totalCost = hammondsMines.annualBudget;
  9. Access the "Parasaurolophus" specimen.
  hammondsMines.specimens[1];
## Extra Resources
- [Javascript Objects](http://javascriptissexy.com/javascript-objects-in-detail/)
- [AirBnB style guide](https://github.com/airbnb/javascript) for writing your JavaScript.


