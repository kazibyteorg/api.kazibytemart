import { PartialType } from '@nestjs/swagger';
import { CreateSessionTokenDto } from './create-session-token.dto';

export class UpdateSessionTokenDto extends PartialType(CreateSessionTokenDto) {}
