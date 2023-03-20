const BankAccount = require('./bankAccount')
describe('bankAccount', () => {
  it('checks balance is 0 upon opening account', () => {
    const account = new BankAccount();
    expect(account.showBalance()).toBe(0);
  });
  it('checks balance', () => {
    const account = new BankAccount();
    account.despositMoney(500);
    expect(account.showBalance()).toBe(500);
  });
  
});