import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class OAuthGuard extends AuthGuard('oauth2') {
  handleRequest(err, user) {
    if (err || !user) {
      throw (
        err || new UnauthorizedException('Invalid token or not authenticated')
      );
    }
    return user;
  }
}
