import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  MinLength,
  IsEnum,
  IsBoolean,
} from 'class-validator';
import { Role, AccountStatus } from '@prisma/client';

export class CreateAuthDto {
  @ApiProperty({ example: 'John Doe', description: 'User full name' })
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: 'user@example.com',
    description: 'User email address',
  })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'securepassword', description: 'User password' })
  @IsNotEmpty()
  @MinLength(6)
  password: string;

  @ApiProperty({ example: 'USER', enum: Role, description: 'User role' })
  @IsEnum(Role)
  role?: Role = Role.USER;

  @ApiProperty({ example: false, description: 'Whether the user is verified' })
  @IsBoolean()
  verified?: boolean = false;

  @ApiProperty({
    example: 'PENDING',
    enum: AccountStatus,
    description: 'Account status',
  })
  @IsEnum(AccountStatus)
  status?: AccountStatus = AccountStatus.PENDING;
}
