import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateParcelDeliveryDto {
  @ApiProperty({
    description: 'The tracking number of the parcel',
    example: 'TRK123456789',
  })
  @IsString()
  trackingNumber: string;

  @ApiProperty({
    description: 'The delivery address of the parcel',
    example: '123 Main St, Springfield, IL',
  })
  @IsString()
  address: string;

  @ApiProperty({
    description: 'The status of the parcel delivery',
    example: 'Shipped',
  })
  @IsString()
  status: string;
}
