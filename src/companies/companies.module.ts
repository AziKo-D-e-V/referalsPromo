import { Module } from '@nestjs/common';
import { CompaniesService } from './companies.service';
import { CompaniesController } from './companies.controller';
import {MongooseModule} from "@nestjs/mongoose"
import { CompanySchema } from './dto/models/company.model';
@Module({
 imports  : [MongooseModule.forFeature([{name : "Market", schema : CompanySchema}])] ,
 controllers: [CompaniesController],
  providers: [CompaniesService],
})
export class CompaniesModule {}
