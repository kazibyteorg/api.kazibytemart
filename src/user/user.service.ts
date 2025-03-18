import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(_CreateUserDto: CreateUserDto) {
    const existingUser = await this.prisma.user.findUnique({
      where: {name: CreateUserDto.name};
    })
  }
}
