import { Injectable, Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './interfaces/jwt-payload.interface';
import { UserService } from './user/user.service';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService, private readonly usersService: UserService) {
  }

  async createToken(user: JwtPayload) {
    const token = this.jwtService.sign(user);
    return {
      expiresIn: 3600,
      token,
    };
  }

  async validateUser(payload: JwtPayload): Promise<any> {
    // put some validation logic here
    // for example query user by id/email/username
    return await this.usersService.findOneByAccount(payload.account);
  }
}
