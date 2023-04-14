import { IsNotEmpty } from 'class-validator';

export class createAddressDto {
  @IsNotEmpty()
  line1: string;

  line2: string;

  @IsNotEmpty()
  zip: number;

  @IsNotEmpty()
  city: string;

  @IsNotEmpty()
  state: string;
}
