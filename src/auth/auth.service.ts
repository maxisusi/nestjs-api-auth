import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  signup() {
    return { msg: 'Sign up Service' };
  }

  signin() {
    return { msg: 'Sign in Service' };
  }
}
