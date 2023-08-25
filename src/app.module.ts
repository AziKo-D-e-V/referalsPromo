import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { CompaniesModule } from './companies/companies.module';
import { PromocodesModule } from './promocodes/promocodes.module';

@Module({
  imports: [
    UsersModule,
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/promocode'),
    ConfigModule.forRoot(),
    CompaniesModule,
    PromocodesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
