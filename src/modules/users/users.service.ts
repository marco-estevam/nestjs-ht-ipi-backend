import { Injectable, Inject } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Model } from 'mongoose';
import { Users } from './interfaces/users.interface'


@Injectable()
export class UsersService {
  constructor(
    @Inject('USERS_MODEL') private readonly usersModel: Model<Users>,
  ) {}

  create() {
    let data = {
      name: "user5",
      age: 55,
      cep: "38183000",
    }

    return this.usersModel.create(data);
  }

  findAll() {
    return this.usersModel.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
