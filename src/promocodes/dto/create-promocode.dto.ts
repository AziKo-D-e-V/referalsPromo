import {IsString, IsNotEmpty} from "class-validator"

export class CreatePromocodeDto {
    @IsString()
    @IsNotEmpty()
    name : string;

    @IsString()
    @IsNotEmpty()
    companyId : string
    
    @IsString()
    @IsNotEmpty()
    userId : string
}
