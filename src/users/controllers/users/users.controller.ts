import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  UseInterceptors,
} from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { UsersService } from 'src/users/services/users/users.service';
import { SerializedUser } from 'src/users/types/User';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @Get()
  getAllUsers() {
    return this.usersService.getUsers();
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get(':username')
  getUserByUsername(@Param('username') username: string) {
    const user = this.usersService.getUserByUsername(username);
    if (user) {
      //Below both method works fine but the 2nd way is nestJs way

      // return plainToClass(SerializedUser, user);    // 1st way

      return new SerializedUser(user); // 2nd way
    }
    return new HttpException('user not found', HttpStatus.BAD_REQUEST);
  }
}
