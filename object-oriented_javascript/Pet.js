class Pet {
  constructor(animal, age, breed, sound) {
    this.animal = animal;
    this.age = age;
    this.breed = breed;
    this.sound = sound;
  }
  
  get activity() {
    const today = new Date();
    const hour = today.getHours();
    
    if(hour > 8 && hour <=20) {
      return 'playing';
    } else {
      return 'sleeping';
    }
  }
  
  get owner() {
    return this._owner;
  }
  
  set owner(owner) {
    this._owner = owner;
    console.log(`setter called: ${owner}`);
  }
  
  speak() {
    console.log(this.sound);
  }
}


class Owner {
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }
  
  set phone(phone) {
    const phoneNormalised = phone.replace(/[^0-9]/g, '');
    this._phone = phoneNormalised;
  }

  get phone() {
    return this._phone;
  }
}

const ernie = new Pet('dog', '1', 'pug', 'Yip yip!');
const max = new Pet('dog', '3', 'rhodesian ridgeback', 'Woof woof!');

ernie.owner = new Owner('Kyle', '4c Brommersvlei Road');
ernie.owner.phone = '(067) 1746-400';

console.log(ernie.owner.name);
console.log(ernie.owner.phone);