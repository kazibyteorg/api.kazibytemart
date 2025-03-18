import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsEnum, IsDate } from 'class-validator';
import { LoginAttempt } from '@prisma/client';

export class CreateLoginHistoryDto {
  @ApiProperty({
    example: '123456',
    description: 'User ID associated with the login history',
  })
  @IsString()
  userId: string;

  @ApiProperty({
    example: '192.168.1.1',
    description: 'IP address of the login attempt',
    required: false,
  })
  @IsOptional()
  @IsString()
  ip?: string;

  @ApiProperty({
    example: 'Mozilla/5.0',
    description: 'User agent string',
    required: false,
  })
  @IsOptional()
  @IsString()
  userAgent?: string;

  @ApiProperty({
    example: 'MacBook Pro',
    description: 'Device used for login',
    required: false,
  })
  @IsOptional()
  @IsString()
  device?: string;

  @ApiProperty({
    example: 'New York, USA',
    description: 'Login location',
    required: false,
  })
  @IsOptional()
  @IsString()
  location?: string;

  @ApiProperty({ example: 'SUCCESS', description: 'Login attempt status' })
  @IsEnum(LoginAttempt)
  attempt: LoginAttempt;

  @ApiProperty({
    example: '2024-03-18T00:00:00.000Z',
    description: 'Login timestamp',
  })
  @IsDate()
  loggedAt: Date;
}
