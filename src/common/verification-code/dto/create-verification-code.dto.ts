import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsDateString, IsOptional, IsEnum } from 'class-validator';
import { VerificationCodeType, VerificationStatus } from '@prisma/client';

export class CreateVerificationCodeDto {
  @ApiProperty({
    description: 'Unique identifier for the verification code',
    example: 'cuid-generated-id',
  })
  @IsString()
  id: string;

  @ApiProperty({
    description: 'ID of the user to whom the verification code belongs',
    example: 'user-id',
  })
  @IsString()
  userId: string;

  @ApiProperty({
    description: 'Verification code for the user',
    example: '123456',
  })
  @IsString()
  code: string;

  @ApiProperty({
    description: 'Type of the verification code (e.g., ACCOUNT_ACTIVATION)',
    enum: VerificationCodeType,
    default: VerificationCodeType.ACCOUNT_ACTIVATION,
  })
  @IsEnum(VerificationCodeType)
  type: VerificationCodeType;

  @ApiProperty({
    description:
      'Current status of the verification code (e.g., PENDING, VERIFIED)',
    enum: VerificationStatus,
    default: VerificationStatus.PENDING,
  })
  @IsEnum(VerificationStatus)
  status: VerificationStatus;

  @ApiProperty({
    description: 'Expiration date of the verification code',
    example: '2025-03-18T12:00:00Z',
  })
  @IsDateString()
  expireAt: string;

  @ApiProperty({
    description: 'Date and time when the verification code was issued',
    example: '2025-03-18T12:00:00Z',
    default: new Date().toISOString(),
  })
  @IsDateString()
  issuedAt: string;

  @ApiProperty({
    description:
      'Date and time when the verification code was verified (optional)',
    example: '2025-03-18T12:30:00Z',
    required: false,
  })
  @IsOptional()
  @IsDateString()
  verifiedAt?: string;
}
