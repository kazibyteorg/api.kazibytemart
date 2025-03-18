import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsDateString, IsNumber, IsPositive } from 'class-validator';

export class CreateInvoiceDto {
  @ApiProperty({
    description: 'The invoice number',
    example: 'INV123456',
  })
  @IsString()
  invoiceNumber: string;

  @ApiProperty({
    description: 'The total amount of the invoice',
    example: 150.75,
  })
  @IsNumber()
  @IsPositive()
  totalAmount: number;

  @ApiProperty({
    description: 'The date when the invoice was issued',
    example: '2025-03-18T12:00:00Z',
  })
  @IsDateString()
  dateIssued: string;
}
