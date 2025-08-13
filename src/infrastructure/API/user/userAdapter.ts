import { User, UserArraySchema } from "@/domain/user/entity/user";
import { IUserRepository } from "@/domain/user/repository/IUserRepository";
import { store } from "../../store/store";
import { userAPI } from "./userApiData";
import z, { uuidv4 } from "zod";

export class UserAdapter implements IUserRepository {
  async getUsers(): Promise<User[]> {
    //TODO: mock server which will return data
    // const { data: users } = await store.dispatch(userAPI.endpoints.getUsers.initiate());
    // const result = UserArraySchema.safeParse(users);
    // if (!result.success) {
    //   throw new Error("error");
    // } else {
    //   return result.data;
    // }
    return [{ email: "visnyakov98@gmail.com", id: uuidv4().toString(), name: "Vlad" }];
  }
}
