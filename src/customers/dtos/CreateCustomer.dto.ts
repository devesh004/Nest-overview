import { Type } from 'class-transformer';
import {
  IsEmail,
  IsNotEmpty,
  IsNumberString,
  ValidateNested,
  IsNotEmptyObject,
} from 'class-validator';
import { createAddressDto } from './createAddress.dto';

export class CreateCustomerDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  id: number;

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => createAddressDto)
  address: createAddressDto;
}
