class BankAccount{
  constructor(){
    this.balance = 0
    this.statement = []
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
}

module.exports = BankAccount;
