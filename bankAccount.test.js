const BankAccount = require('./bankAccount')
describe('bankAccount', () => {
  it('checks balance is 0 upon opening account', () => {
    const account = new BankAccount();
    expect(account.showBalance()).toBe(0);
  });
  it('deposits money and checks balance', () => {
    const account = new BankAccount();
    account.despositMoney(500);
    expect(account.showBalance()).toBe(500);
  });
  it('withdraws money and checks balance', () => {
    const account = new BankAccount();
    account.withdrawMoney(500);
    expect(account.showBalance()).toBe(-500);
  });
  it('returns an empty statement when showStatement is called', () => {
    const account = new BankAccount();
    expect(account.showStatement()).toBe("date || credit || debit || balance")
  });
  it('returns a statement with one deposit listed', () => {
    const account = new BankAccount();
    account.despositMoney(1000);
    let date = Date.now();
    expect(account.showStatement()).toBe(`date || credit || debit || balance
${date} || 1000.00 || || 1000.00`)
  });
  it('returns a multi line statement after multiple desposits/withdrawals', () => {
    const account = new BankAccount();
    account.despositMoney(1000);
    account.despositMoney(2000);
    account.withdrawMoney(500);
    let date = Date.now();
    expect(account.showStatement()).toBe(`date || credit || debit || balance
${date} || 1000.00 || || 1000.00
${date} || 2000.00 || || 3000.00
${date} || || 500.00 || 2500.00`
)});
});
