//Raed Alarfaj
//W01D02 HW
//Trevor Preston

//part 1
snakewaterMontana = {
    paleontologist: "Dr. Alan Grant",
    depth: "10 meters",
    specimen: "Velociraptor"
}

//1.
var guestOfHonor = snakewaterMontana.paleontologist;
//2.
var cleverGirl = snakewaterMontana.specimen;

console.log(guestOfHonor);
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

//1.
var nicaraguanSpecimens = nicaragua.specimens;
console.log("Nicaraguan specimens: " + nicaraguanSpecimens[1]);
//2.
var favoriteSpecimen = nicaraguanSpecimens[0];
console.log("My favorite specimen: " + favoriteSpecimen);
//3.
nicaragua.annualBudget += 250000;
console.log("Nicaragua's updated annual budget: " + nicaragua.annualBudget);


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
};

//1.
console.log(hammondsMines.mexico.depth);
//2.
var mexicanMineDepth = hammondsMines.mexico.depth;
//3.
console.log(hammondsMines.buenosAires.annualBudget);
//4.
var buenosAiresMineBudget = hammondsMines.buenosAires.annualBudget;
//5.
console.log(hammondsMines.buenosAires.specimens);
//6.
hammondsMines.nicaragua = nicaragua;
console.log("Full hammondsMines object: " + JSON.stringify(hammondsMines, null, 2));
//7.
var hammondsBuenosAiresBudget = hammondsMines.buenosAires.annualBudget;
var hammondsMexicoBudget = hammondsMines.mexico.annualBudget;
var hammondsNicaraguaBudget = hammondsMines.nicaragua.annualBudget;
//8.
var totalHammondsBudget = hammondsBuenosAiresBudget + hammondsMexicoBudget + hammondsNicaraguaBudget;
//9.
console.log(hammondsMines.mexico.specimens[1]);