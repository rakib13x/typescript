{
  //**-------------------------Getter and Setter -----------------------------*/
  class BankAccount {
    public readonly id: number;
    public name: string;
    //*private _balance: number;//it can't be inherited to it's child*/
    protected _balance: number;

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }

    // addDeposit(amount: number) {
    //   this._balance = this._balance + amount;
    // }
    set deposit(amount: number) {
      this._balance = this._balance + amount;
    }

    //*getBalance() {return this._balance }//one can do the same thing with getter
    get Balance() {
      return this._balance;
    }
  }

  const goribManusherAccount = new BankAccount(111, "mr. gorib", 20);
  // goribManusherAccount.addDeposit(300);
  goribManusherAccount.deposit = 50;

  const myBalance = goribManusherAccount.Balance;
  console.log(myBalance);
}
