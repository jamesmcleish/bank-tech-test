const BankAccount = require('./bankAccount')
describe('bankAccount', () => {
  it('checks balance is 0 upon opening account', () => {
    const account = new BankAccount();
    expect(account.balance).toBe(0);
  });
});