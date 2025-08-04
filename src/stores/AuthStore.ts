import { makeAutoObservable } from "mobx";

export class AuthStore {
  isLoggedIn = false;
  constructor() {
    makeAutoObservable(this);
  }

  toggleIsLoggedIn = () => {
    return (this.isLoggedIn = !this.isLoggedIn);
  };
}
const authStore = new AuthStore();
export default authStore;
