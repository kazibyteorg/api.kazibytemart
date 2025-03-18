import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateSellerDto {
  @ApiProperty({
    description: 'The name of the seller',
    example: 'Seller Name',
  })
  @IsString()
  name: string;
}
