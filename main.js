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
