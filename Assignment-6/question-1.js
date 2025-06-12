// Q1. Create a class BankAccount with properties balance and owner and methods deposit(), withdraw(), and displayBalance().

class BankAccount {
  constructor(balance, owner) {
    this.balance = balance;
    this.owner = owner;
  }
  deposit(depositMoney) {
    if (depositMoney > 0) {
      this.balance += depositMoney;
      return `Your account is credited with amount ${depositMoney}.`;
    } else {
      return `Please enter an appropriate amount.`;
      
    }
  }
  withdraw(withdrawMoney) {
    if (withdrawMoney > 0 && withdrawMoney <= this.balance) {
      this.balance -= withdrawMoney;
      return `Your account is debited with amount ${withdrawMoney}.`;
    } else {
      return `Your balance is low.`;
    }
  }
  displayBalance() {
    return `Your balance is ${this.balance}`;
  }
}

const myAccount = new BankAccount(4000, "Dhuruv");
console.log(myAccount.deposit(500));
console.log(myAccount.withdraw(1000));
console.log(myAccount.displayBalance());

