import { Module } from '@nestjs/common';
import { ParcelDeliveryService } from './parcel-delivery.service';
import { ParcelDeliveryController } from './parcel-delivery.controller';

@Module({
  controllers: [ParcelDeliveryController],
  providers: [ParcelDeliveryService],
})
export class ParcelDeliveryModule {}
