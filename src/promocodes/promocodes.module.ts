import { Module } from '@nestjs/common';
import { PromocodesService } from './promocodes.service';
import { PromocodesController } from './promocodes.controller';
import {MongooseModule} from "@nestjs/mongoose"
import { PromoSchema } from './models/promos.model';
@Module({
  imports : [MongooseModule.forFeature([{schema : PromoSchema, name : "CodesPromo"}])],
  controllers: [PromocodesController],
  providers: [PromocodesService],
})
export class PromocodesModule {}
