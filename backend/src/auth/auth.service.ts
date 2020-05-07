import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { User } from 'src/users/interfaces/user.interface';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(accessToken: string, refreshToken: string): Promise<any> {
    const user = await this.usersService.createUserByAccessToken(accessToken);

    return user;
  }

  async login(user: User) {
    const payload = { username: user.displayName, sub: user._id };

    return {
      accessToken: this.jwtService.sign(payload),
    };
  }
}
