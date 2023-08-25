import { Injectable } from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import {InjectModel} from "@nestjs/mongoose"
import {Model} from "mongoose"
@Injectable()
export class CompaniesService {
  constructor(@InjectModel("Market") private readonly companies : Model<any>) {}
  async create({name}: CreateCompanyDto) {
    const data = await this.companies.create({name})
    return {message : "Succesfully created", data }
  }

  async findAll() {
    return await this.companies.find();
  }

 async  findOne(id: string) {
    return await this.companies.findById(id);
  }

 async  update(id: string, {name}: UpdateCompanyDto) {
   const data = await this.companies.findByIdAndUpdate(id, {name})
    return {message : "Updated", data }
  }

  async remove(id: string) {
    await this.companies.findByIdAndDelete(id);
    return {message : "Removed"}
  }
}
