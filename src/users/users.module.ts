import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModel, userschema } from './models/user.model';

@Module({
  imports : [MongooseModule.forFeature([{schema : userschema, name : "User" }])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
