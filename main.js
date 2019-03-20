var inquirer = require("inquirer");

function CharacterGen(name, profession, gender, age, strength, hp) {
  this.name = name;
  this.profession = profession;
  this.gender = gender;
  this.age = age;
  this.strength = strength;
  this.hp = hp;
}

function isAlive(character) {
  if (character.hp > 0) {
    console.log(character.hp);
    return true;
  }
}

function attack(character, target) {
  target.hp = parseInt(target.hp) - parseInt(character.strength);
}

function levelUp(character) {
  character.age = parseInt(character.age) + 1;
  character.strength = parseInt(character.strength) + 5;
  character.hp - parseInt(character.hp) + 25;
}

console.log("Welcome to Age of sporEGO");

inquirer
  .prompt([
    {
      type: "list",
      name: "menu",
      choices: ["Create Character", "Attack", "Level Up"]
    }
  ])
  .then(main => {
    if (main.menu === "Create Character") {
      inquirer
        .prompt([
          {
            type: "input",
            name: "name",
            message: "Name of Character: "
          },

          {
            type: "input",
            name: "profession",
            message: "What is thou class?: "
          },
          {
            type: "list",
            name: "gender",
            choices: ["Male", "Female"]
          },
          {
            type: "input",
            name: "age",
            message: "Age: "
          }
        ])
        .then(generator => {
          new CharacterGen(
            generator.name,
            generator.profession,
            generator.gender,
            generator.age,
            parseInt(5),
            parseInt(25)
          );
        });
    }
    if (main.menu === "Attack") {
      inquirer
        .prompt([
          {
            type: "input",
            name: "attacker",
            message: "Who is attacker? "
          },
          {
            type: "input",
            name: "defender",
            message: "Who is defender?"
          }
        ])
        .then(attacking => {
          attack(attacking.attacker, attacking.defender);
        });
    }
    if (main.menu === "Level Up") {
      inquirer
        .prompt([
          {
            type: "input",
            name: "levelTarget",
            message: "Who is leveling up? "
          }
        ])
        .then(userInput => {
          userInput.levelTarget.levelUp();
        });
    }
  });
