import { User } from "@/domain/user/entity/user";
import { appAPI } from "../../store/appAPI";
import { uuidv4 } from "zod";
//TODO: mock server which will return data
export const userAPI = appAPI.injectEndpoints({
  endpoints: (build) => ({
    getUsers: build.query<User[], void>({
      query: () => `users`,
      transformResponse(baseQueryReturnValue, meta, arg) {
        return [{ email: "visnyakov98@gmail.com", id: uuidv4().toString(), name: "Vlad" }];
      },
    }),
  }),
  overrideExisting: false,
});
