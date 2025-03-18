import { Injectable } from '@nestjs/common';
import { CreateSessionTokenDto } from './dto/create-session-token.dto';
import { UpdateSessionTokenDto } from './dto/update-session-token.dto';

@Injectable()
export class SessionTokenService {
  create(createSessionTokenDto: CreateSessionTokenDto) {
    return 'This action adds a new sessionToken';
  }

  findAll() {
    return `This action returns all sessionToken`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sessionToken`;
  }

  update(id: number, updateSessionTokenDto: UpdateSessionTokenDto) {
    return `This action updates a #${id} sessionToken`;
  }

  remove(id: number) {
    return `This action removes a #${id} sessionToken`;
  }
}
