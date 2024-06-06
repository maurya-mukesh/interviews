// function BankAccount(name, branch, initialBalance = 0) {
//   this.name = name;
//   this.balance = initialBalance;
//   this.branch = branch;
//   this.account = Date.now();
// }

// let johnAccountInfo = new BankAccount("John Doe", "Noida");
// let mukeshAccountInfo = new BankAccount("Mukesh maurya", "Noida", 1000);
// console.log(johnAccountInfo);
// console.log(mukeshAccountInfo);

class BankAccount {
  constructor(name, branch, initialBalance = 0) {
    this.name = name;
    this.branch = branch;
    this.balance = initialBalance;
  }
}

let Rohan_bankAccount = new BankAccount("Rohan", "Noida", 0);
let Vijay_bankAccount = new BankAccount("Vijay", "Noida", 1200);
console.log(Rohan_bankAccount);
console.log(Vijay_bankAccount);
