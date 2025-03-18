import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateBrokerDto {
  @ApiProperty({
    description: 'The name of the broker',
    example: 'John Doe',
  })
  @IsString()
  name: string;
}
