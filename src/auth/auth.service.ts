import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}
  signup(dot: AuthDto) {
    return { msg: 'Sign up Service' };
  }

  signin() {
    return { msg: 'Sign in Service' };
  }
}
