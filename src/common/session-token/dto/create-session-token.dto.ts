import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsDate } from 'class-validator';

export class CreateSessionTokenDto {
  @ApiProperty({
    example: 'unique-token-123456',
    description: 'Unique session token',
  })
  @IsString()
  token: string;

  @ApiProperty({
    example: '123456',
    description: 'User ID associated with the session',
  })
  @IsString()
  userId: string;

  @ApiProperty({
    example: '2024-12-31T23:59:59.000Z',
    description: 'Expiration date and time of the session token',
  })
  @IsDate()
  expiresAt: Date;
}
