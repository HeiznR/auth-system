import { GetUsersUseCase } from "@/application/user/getUsersUseCase";
import { User } from "@/domain/user/entity/user";
import { UserAdapter } from "@/infrastructure/API/user/userAdapter";
import React, { useEffect, useState } from "react";

export const UserPage = () => {
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    const userRepository = new UserAdapter();
    const getUsersUseCase = new GetUsersUseCase(userRepository);
    const fetchUsers = async () => {
      const users = await getUsersUseCase.initiate();
      setUsers(users);
    };
    fetchUsers();
  }, []);

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
};
