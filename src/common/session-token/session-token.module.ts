import { Module } from '@nestjs/common';
import { SessionTokenService } from './session-token.service';
import { SessionTokenController } from './session-token.controller';

@Module({
  controllers: [SessionTokenController],
  providers: [SessionTokenService],
})
export class SessionTokenModule {}
