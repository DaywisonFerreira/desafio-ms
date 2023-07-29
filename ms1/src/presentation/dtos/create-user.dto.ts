import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';

class AddressDTO {
  @ApiProperty({ description: 'Street address', example: '123 Main Street' })
  @IsString()
  @IsNotEmpty()
  street: string;

  @ApiProperty({ description: 'City', example: 'New York' })
  @IsString()
  @IsNotEmpty()
  city: string;

  @ApiProperty({ description: 'State', example: 'NY' })
  @IsString()
  @IsNotEmpty()
  state: string;

  @ApiProperty({ description: 'Postal code', example: '10001' })
  @IsString()
  @IsNotEmpty()
  postalCode: string;

  @ApiProperty({ description: 'Country', example: 'USA' })
  @IsString()
  @IsNotEmpty()
  country: string;
}

class PhoneNumberDTO {
  @ApiProperty({ description: 'Type of phone number', example: 'home' })
  @IsString()
  @IsNotEmpty()
  type: string;

  @ApiProperty({ description: 'Phone number', example: '555-1234' })
  @IsString()
  @IsNotEmpty()
  number: string;
}

export class CreateUserDto {
  @ApiProperty({ description: 'Name of the user', example: 'John Doe' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'Email address of the user',
    example: 'john.doe@example.com',
  })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({ description: 'Age of the user', example: 30 })
  @IsNotEmpty()
  @IsInt()
  age: number;

  @ApiProperty({ type: AddressDTO })
  @ValidateNested({ each: true })
  @Type(() => AddressDTO)
  address: AddressDTO;

  @ApiProperty({ type: [PhoneNumberDTO], required: false })
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => PhoneNumberDTO)
  phoneNumbers?: PhoneNumberDTO[];

  @ApiProperty({ description: 'Whether the user is active', example: true })
  @IsNotEmpty()
  @IsBoolean()
  isActive: boolean;
}
