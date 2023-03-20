class BankAccount{
  constructor(){
    this.balance = 0
    this.statement = []
  }
  showBalance = () => {
    return this.balance
  }
  despositMoney = (deposit) => {
    this.balance = this.balance + deposit
  }
}

module.exports = BankAccount;
