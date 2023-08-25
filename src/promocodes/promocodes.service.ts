import { Injectable } from '@nestjs/common';
import { CreatePromocodeDto } from './dto/create-promocode.dto';
import { UpdatePromocodeDto } from './dto/update-promocode.dto';
import {InjectModel} from "@nestjs/mongoose"
import {Model} from "mongoose"
@Injectable()
export class PromocodesService {
  constructor(@InjectModel("CodesPromo") private readonly promos : Model<any>  ) {}; 
  async create({name, companyId, userId}: CreatePromocodeDto) {
    const data = await this.promos.create({promo:name, companyId, userId})
    return {message : "Successfully created", data}
  }

  async findAll() {
    
    const data = await this.promos.find().populate('markets')
    return {data};
  }

  findOne(id: number) {
    return `This action returns a #${id} promocode`;
  }

  update(id: number, updatePromocodeDto: UpdatePromocodeDto) {
    return `This action updates a #${id} promocode`;
  }

  remove(id: number) {
    return `This action removes a #${id} promocode`;
  }
}
