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

}

class PasswordManager {

}

class TodoList {

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
