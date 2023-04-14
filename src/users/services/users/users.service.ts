import { Injectable } from '@nestjs/common';
import { SerializedUser, User } from 'src/users/types/User';
import { plainToClass } from 'class-transformer';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      username: 'danny danny',
      password: 'danny',
    },
    {
      username: 'riyan riyan',
      password: 'riyan',
    },
    {
      username: 'makoy makoy',
      password: 'makoy',
    },
    {
      username: 'harry harry',
      password: 'harry',
    },
  ];

  getUsers() {
    // return this.users.map((user) => plainToClass(SerializedUser, user));
    return this.users.map((user) => new SerializedUser(user));
  }

  getUserByUsername(username: string) {
    return this.users.find((user) => user.username === username);
  }
}
