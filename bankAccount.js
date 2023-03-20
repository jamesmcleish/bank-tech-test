class BankAccount{
  constructor(){
    this.balance = 0
    this.statement = []
  }
  showBalance = () => {
    return this.balance
  }

}

module.exports = BankAccount;
