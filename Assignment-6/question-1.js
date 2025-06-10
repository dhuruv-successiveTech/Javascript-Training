class BankAccount {
  constructor(balance, owner) {
    this.balance = balance;
    this.owner = owner;
  }
  deposit(depositMoney) {
    if (depositMoney > 0) {
      this.balance += depositMoney;
      console.log(`Your account is credited with amount ${depositMoney}`);
    } else {
      console.log(`Please enter an appropriate amount`);
      return;
    }
  }
  withdraw(withdrawMoney) {
    if (withdrawMoney > 0 && withdrawMoney<this.balance) {
      this.balance -= withdrawMoney;
      console.log(`Your account is debited with amount ${withdrawMoney}`);
    } else {
      console.log(`Your balance is low`);
      return;
    }
  }
  displayBalance() {
    console.log(`Your balance is ${this.balance}`);
  }
}


const myAccount = new BankAccount(4000,"Dhuruv")
myAccount.withdraw(5000)