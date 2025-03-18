import { Test, TestingModule } from '@nestjs/testing';
import { ParcelDeliveryService } from './parcel-delivery.service';

describe('ParcelDeliveryService', () => {
  let service: ParcelDeliveryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ParcelDeliveryService],
    }).compile();

    service = module.get<ParcelDeliveryService>(ParcelDeliveryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
