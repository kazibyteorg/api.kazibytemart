import { PartialType } from '@nestjs/swagger';
import { CreateParcelDeliveryDto } from './create-parcel-delivery.dto';

export class UpdateParcelDeliveryDto extends PartialType(CreateParcelDeliveryDto) {}
