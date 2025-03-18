import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ParcelDeliveryService } from './parcel-delivery.service';
import { CreateParcelDeliveryDto } from './dto/create-parcel-delivery.dto';
import { UpdateParcelDeliveryDto } from './dto/update-parcel-delivery.dto';

@Controller('parcel-delivery')
export class ParcelDeliveryController {
  constructor(private readonly parcelDeliveryService: ParcelDeliveryService) {}

  @Post()
  create(@Body() createParcelDeliveryDto: CreateParcelDeliveryDto) {
    return this.parcelDeliveryService.create(createParcelDeliveryDto);
  }

  @Get()
  findAll() {
    return this.parcelDeliveryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.parcelDeliveryService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateParcelDeliveryDto: UpdateParcelDeliveryDto,
  ) {
    return this.parcelDeliveryService.update(+id, updateParcelDeliveryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.parcelDeliveryService.remove(+id);
  }
}
