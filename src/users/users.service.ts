import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserModel } from './models/user.model';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly users: Model<any>) {}
  async create({ name }: CreateUserDto) {
    console.log(name);
    const data = await this.users.create({ name });
    return { message: 'Success', data };
  }

  async findAll() {
    const users = await this.users.find();
    return { message: 'Success', users };
  }

  async findOne(id: string) {
    const user = await this.users.findById(id);
    return { message: 'Success', user };
  }

 async  update(id: string, {name}: UpdateUserDto) {
   const data = await this.users.findByIdAndUpdate(id,{name})
   return { message: 'Success', data };
  }

  async remove(id: string) {
   await this.users.findByIdAndDelete(id)
   return {message : "Successfully removed"};
  }
}
