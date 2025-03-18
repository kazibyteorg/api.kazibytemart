import { Test, TestingModule } from '@nestjs/testing';
import { SessionTokenController } from './session-token.controller';
import { SessionTokenService } from './session-token.service';

describe('SessionTokenController', () => {
  let controller: SessionTokenController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SessionTokenController],
      providers: [SessionTokenService],
    }).compile();

    controller = module.get<SessionTokenController>(SessionTokenController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
