import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsBoolean, IsDate, IsOptional } from 'class-validator';

export class CreateNotificationDto {
  @ApiProperty({
    example: '123456',
    description: 'User ID associated with the notification',
  })
  @IsString()
  userId: string;

  @ApiProperty({
    example: 'Your order has been shipped.',
    description: 'Notification message',
  })
  @IsString()
  message: string;

  @ApiProperty({
    example: false,
    description: 'Indicates if the notification has been read',
  })
  @IsBoolean()
  @IsOptional()
  read?: boolean = false;

  @ApiProperty({
    example: '2024-03-18T00:00:00.000Z',
    description: 'Creation timestamp',
    required: false,
  })
  @IsOptional()
  @IsDate()
  createdAt?: Date;
}
