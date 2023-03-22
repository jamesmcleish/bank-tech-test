class BankAccount{
  constructor(){
    this.balance = 0
    this.statement = "date || credit || debit || balance"
  }
  showBalance = () => {
    return this.balance
  };
  despositMoney = (depositAmount) => {
    this.balance = this.balance + depositAmount
    this.addToStatement(depositAmount, 'deposit')
  };
  withdrawMoney = (withdrawalAmount) => {
    this.balance = this.balance - withdrawalAmount
    this.addToStatement(withdrawalAmount, 'withdrawal')

  };
  showStatement = () => {
    return this.statement
  }
  addToStatement = (amount, type) => {
    this.statement = this.statement + `\n` + `${Date.now()} || || ${amount}.00 || ${this.balance}.00`;
  }
}

module.exports = BankAccount;