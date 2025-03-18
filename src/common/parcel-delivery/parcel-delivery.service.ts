import { Injectable } from '@nestjs/common';
import { CreateParcelDeliveryDto } from './dto/create-parcel-delivery.dto';
import { UpdateParcelDeliveryDto } from './dto/update-parcel-delivery.dto';

@Injectable()
export class ParcelDeliveryService {
  create(createParcelDeliveryDto: CreateParcelDeliveryDto) {
    return 'This action adds a new parcelDelivery';
  }

  findAll() {
    return `This action returns all parcelDelivery`;
  }

  findOne(id: number) {
    return `This action returns a #${id} parcelDelivery`;
  }

  update(id: number, updateParcelDeliveryDto: UpdateParcelDeliveryDto) {
    return `This action updates a #${id} parcelDelivery`;
  }

  remove(id: number) {
    return `This action removes a #${id} parcelDelivery`;
  }
}
