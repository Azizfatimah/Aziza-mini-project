// Exercise: Bank Account Object

const bankAccount = {
  owner: "Aziza",
  balance: 1000,

  deposit: function(amount) {
    this.balance += amount;
    console.log(`Deposited: ${amount}`);
  },

  withdraw: function(amount) {
    if (amount > this.balance) {
      console.log("Insufficient funds");
    } else {
      this.balance -= amount;
      console.log(`Withdrew: ${amount}`);
    }
  },

  checkBalance: function() {
    console.log(`Current balance: ${this.balance}`);
  }
};

// Test the object
bankAccount.checkBalance();
bankAccount.deposit(500);
bankAccount.withdraw(200);
bankAccount.checkBalance();