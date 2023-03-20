class BankAccount{
  constructor(){
    this.balance = 0
    this.statement = "date || credit || debit || balance"
  }
  showBalance = () => {
    return this.balance
  };
  despositMoney = (deposit) => {
    this.balance = this.balance + deposit
  };
  withdrawMoney = (withdrawal) => {
    this.balance = this.balance - withdrawal
  };
  showStatement = () => {
    return this.statement
  }
}

module.exports = BankAccount;