class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
  getArea() {
    return this.length * this.width;
  }
  getPerimeter() {
    return this.length * 2 + this.width * 2;
  }
  isSquare() {
    if (this.length == this.width) {
      return true;
    } else {
      return false;
    }
  }
}

class Vehicle {
  constructor(type, capacity, color) {
    this.type = type;
    this.capacity = capacity;
    if (!color) {
      this.color = "black";
    } else {
      this.color = color;
    }
  }
  passengers = [];
  paint(color) {
    this.color = color;
    return color;
  }
  addPassenger(passenger) {
    if (this.passengers.length < this.capacity) {
      this.passengers.push(passenger);
      return this.passengers.length;
    } else {
      return -1;
    }
  }
}

class PasswordManager {
  #password;
  constructor(password) {
    this.#password = password;
  }
  checkPassword(attempt) {
    if (attempt === this.#password) {
      return true;
    } else {
      return false;
    }
  }
  setPassword(oldPassword, newPassword) {
    if (oldPassword === this.#password) {
      this.#password = newPassword;
      return true;
    } else {
      return false
    }
  }
}

class TodoList {
  #toDo = [];
  constructor(title) {
    this.title = title;
  }
  addItem(description) {
    this.#toDo.push(description);
    return this.#toDo.length;
  }
  removeItem(description) {
    const itemToRemove = this.#toDo.indexOf(description);
    if (itemToRemove != -1) {
      const removedItem = this.#toDo.splice(itemToRemove, 1)
      return removedItem[0];
    } else {
      return null;
    }
  }
  getItems() {
    return [...this.#toDo];
  }
}

class BankAccount {

}

module.exports = {
  Rectangle,
  Vehicle,
  PasswordManager,
  TodoList,
  BankAccount,
};
