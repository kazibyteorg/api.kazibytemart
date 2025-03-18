import { Test, TestingModule } from '@nestjs/testing';
import { ParcelDeliveryController } from './parcel-delivery.controller';
import { ParcelDeliveryService } from './parcel-delivery.service';

describe('ParcelDeliveryController', () => {
  let controller: ParcelDeliveryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ParcelDeliveryController],
      providers: [ParcelDeliveryService],
    }).compile();

    controller = module.get<ParcelDeliveryController>(ParcelDeliveryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
