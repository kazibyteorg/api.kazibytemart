import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SessionTokenService } from './session-token.service';
import { CreateSessionTokenDto } from './dto/create-session-token.dto';
import { UpdateSessionTokenDto } from './dto/update-session-token.dto';

@Controller('session-token')
export class SessionTokenController {
  constructor(private readonly sessionTokenService: SessionTokenService) {}

  @Post()
  create(@Body() createSessionTokenDto: CreateSessionTokenDto) {
    return this.sessionTokenService.create(createSessionTokenDto);
  }

  @Get()
  findAll() {
    return this.sessionTokenService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sessionTokenService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSessionTokenDto: UpdateSessionTokenDto) {
    return this.sessionTokenService.update(+id, updateSessionTokenDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sessionTokenService.remove(+id);
  }
}
