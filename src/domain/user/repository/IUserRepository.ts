import { User } from "../entity/user";

export interface IUserRepository {
  getUsers(): Promise<User[]>;
}
