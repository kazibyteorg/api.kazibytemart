import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsDateString, IsBoolean, IsOptional } from 'class-validator';

export class CreatePasswordResetDto {
  @ApiProperty({
    description: 'Unique identifier for the password reset',
    example: 'cuid-generated-id',
  })
  @IsString()
  id: string;

  @ApiProperty({
    description: 'ID of the user who requested the password reset',
    example: 'user-id',
  })
  @IsString()
  userId: string;

  @ApiProperty({
    description: 'Unique token for password reset',
    example: 'reset-token-12345',
  })
  @IsString()
  token: string;

  @ApiProperty({
    description: 'Expiration date and time of the password reset token',
    example: '2025-03-18T12:00:00Z',
  })
  @IsDateString()
  expireAt: string;

  @ApiProperty({
    description: 'Date and time when the password reset token was issued',
    example: '2025-03-18T12:00:00Z',
    default: new Date().toISOString(),
  })
  @IsDateString()
  issuedAt: string;

  @ApiProperty({
    description:
      'Date and time when the password reset token was used (optional)',
    example: '2025-03-18T12:30:00Z',
    required: false,
  })
  @IsOptional()
  @IsDateString()
  usedAt?: string;

  @ApiProperty({
    description: 'Indicates whether the password reset token has been used',
    example: false,
  })
  @IsBoolean()
  isUsed: boolean;
}
