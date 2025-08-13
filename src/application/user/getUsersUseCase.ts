import { IUserRepository } from "@/domain/user/repository/IUserRepository";

export class GetUsersUseCase {
  constructor(private userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }
  async initiate() {
    return await this.userRepository.getUsers();
  }
}
