// function BankAccount(name, branch, initialBalance = 0) {
//   this.name = name;
//   this.balance = initialBalance;
//   this.branch = branch;
//   this.account = Date.now();
// }

// let johnAccountInfo = new BankAccount("John Doe", "Noida");
// let mukeshAccountInfo = new BankAccount("Mukesh maurya", "Noida", 1000);
// // console.log(johnAccountInfo);
// // console.log(mukeshAccountInfo);

// BankAccount.prototype.deposit = function (amount) {
//   console.log("this=>", this);
//   this.balance += amount;
// };
// BankAccount.prototype.withdrawal = function (amount) {
//   this.balance -= amount;
// };
// class BankAccount {
//   constructor(name, branch, initialBalance = 0) {
//     this.name = name;
//     this.branch = branch;
//     this.balance = initialBalance;
//   }
// }

// let Rohan_bankAccount = new BankAccount("Rohan", "Noida", 0);
// let Vijay_bankAccount = new BankAccount("Vijay", "Noida", 1200);
// // console.log(Rohan_bankAccount);
// Vijay_bankAccount.deposit(500);
// console.log(Vijay_bankAccount);

/**
 * @description Class based constructor
 */

// class BankAccount {
//   name;
//   accountNum;
//   #balance;
//   constructor(name, balance = 0) {
//     this.name = name;
//     this.accountNum = Date.now();
//     this.#balance = balance;
//   }

//   deposit(amount) {
//     this.#balance += amount;
//   }
//   withdraw(amount) {
//     this.#balance -= amount;
//   }

//   set balance(amount) {
//     this.#balance = amount;
//   }
//   get balance() {
//     return this.#balance;
//   }
// }

// class SavingAccount extends BankAccount {
//   constructor(name, balance) {
//     super(name, balance);
//   }
//   takePersonalLoan(amount) {
//     console.log(`taking personal loan ${amount}`);
//   }
// }
// const RakeshAccount = new BankAccount("Rakesh", 100);
// console.log("🚀 ~ RakeshAccount:", RakeshAccount);
// RakeshAccount.deposit(300);
// console.log("🚀 ~ RakeshAccount:", RakeshAccount);

// const MukeshSavingAccount = new SavingAccount("Mukesh", 900);
// MukeshSavingAccount.takePersonalLoan(50000);
// MukeshSavingAccount.deposit(400);
// console.log(MukeshSavingAccount);
// MukeshSavingAccount.withdraw(200);

// MukeshSavingAccount.balance = 1400;
// MukeshSavingAccount.deposit(400);
// console.log(MukeshSavingAccount.balance);
// console.log(MukeshSavingAccount.balance);

/**
 * @description Static property and methods
 */
