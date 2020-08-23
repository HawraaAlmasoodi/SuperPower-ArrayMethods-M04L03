const superheroes = [
    {
        name: "Batman",
        publisher: "DC Comics",
        alter_ego: "Bruce Wayne",
        first_appearance: "Detective Comics #27",
        weight: "210"
    },
    {
        name: "Superman",
        publisher: "DC Comics",
        alter_ego: "Kal-El",
        first_appearance: "Action Comics #1",
        weight: "220"
    },
    {
        name: "Flash",
        publisher: "DC Comics",
        alter_ego: "Jay Garrick",
        first_appearance: "Flash Comics #1",
        weight: "195"
    },
    {
        name: "Green Lantern",
        publisher: "DC Comics",
        alter_ego: "Alan Scott",
        first_appearance: "All-American Comics #16",
        weight: "186"
    },
    {
        name: "Green Arrow",
        publisher: "DC Comics",
        alter_ego: "Oliver Queen",
        first_appearance: "All-American Comics #16",
        weight: "195"
    },
    {
        name: "Wonder Woman",
        publisher: "DC Comics",
        alter_ego: "Princess Diana",
        first_appearance: "The Incredible Hulk #180",
        weight: "165"
    },
    {
        name: "Blue Beetle",
        publisher: "DC Comics",
        alter_ego: "Dan Garret",
        first_appearance: "Mystery Men Comics #1",
        weight: "145"
    },
    {
        name: "Spider Man",
        publisher: "Marvel Comics",
        alter_ego: "Peter Parker",
        first_appearance: "Amazing Fantasy #15",
        weight: "167"
    },
    {
        name: "Captain America",
        publisher: "Marvel Comics",
        alter_ego: "Steve Rogers",
        first_appearance: "Captain America Comics #1",
        weight: "220"
    },
    {
        name: "Iron Man",
        publisher: "Marvel Comics",
        alter_ego: "Tony Stark",
        first_appearance: "Tales of Suspense #39",
        weight: "250"
    },
    {
        name: "Thor",
        publisher: "Marvel Comics",
        alter_ego: "Thor Odinson",
        first_appearance: "Journey into Myster #83",
        weight: "200"
    },
    {
        name: "Hulk",
        publisher: "Marvel Comics",
        alter_ego: "Bruce Banner",
        first_appearance: "The Incredible Hulk #1",
        weight: "1400"
    },
    {
        name: "Wolverine",
        publisher: "Marvel Comics",
        alter_ego: "James Howlett",
        first_appearance: "The Incredible Hulk #180",
        weight: "200"
    },
    {
        name: "Daredevil",
        publisher: "Marvel Comics",
        alter_ego: "Matthew Michael Murdock",
        first_appearance: "Daredevil #1",
        weight: "200"
    },
    {
        name: "Silver Surfer",
        publisher: "Marvel Comics",
        alter_ego: "Norrin Radd",
        first_appearance: "The Fantastic Four #48",
        weight: "unknown"
    }
]

let namesSuperheroes = function (arr) {
    return arr.map(hero => {
        return hero.name;
    });
};
console.log("Names: ", namesSuperheroes(superheroes));

let lightSuperheroes = function (arr) {
    return arr.filter(hero => {
        return hero.weight < 190;
    })
}

console.log("Light Superheroes ", lightSuperheroes(superheroes));

let weightSuperheroesIs200 = function (arr) {
    return arr.filter(hero => {
        return hero.weight == 200;
    }).map(hero => {
        return hero.name;
    });
};

console.log("Names of heroes who their weight is 200:", weightSuperheroesIs200(superheroes));

let listOfComics = function (arr) {
    return arr.map(hero => {
        return hero.first_appearance;
    });
};
console.log("List of Comics: ", listOfComics(superheroes));

let heroesDCComics = function (arr) {
    return arr.filter(hero => {
        return hero.publisher == "DC Comics";
    });
};

console.log("heroes of DC Comics", heroesDCComics(superheroes));

let heroesMarvelComics = function (arr) {
    return arr.filter(hero => {
        return hero.publisher == "Marvel Comics";
    });
};

console.log("heroes of Marvel Comics", heroesMarvelComics(superheroes));

let totalWeightDC = function (arr) {
    return arr.map(hero => {
        return parseInt(hero.weight, 10);
    }).reduce((total, currentWeight) => {
        return total + currentWeight;
    });
};

console.log("Total Weight DC:", totalWeightDC(heroesDCComics(superheroes)));


let totalWeightMarvel = function (arr) {
    return arr.map(hero => {
        if (isNaN(hero.weight)) {
            return 0;
        } else {
            return parseInt(hero.weight, 10);
        }
    }).reduce((total, currentWeight) => {
        return total + currentWeight;
    });
};

console.log("Total Weight Marvel:", totalWeightMarvel(heroesMarvelComics(superheroes)));

/*let totalWeightMarvel = function (arr) {
    return arr.map(hero => {
        return hero.weight !== "unknown" ? parseInt(hero.weight, 10) : 0;
    }).reduce((total, currentWeight) => {
        return total + currentWeight;
    }, 0);
};

console.log("Total Weight Marvel:", totalWeightMarvel(heroesMarvelComics(superheroes)));*/