// src/auth/auth.service.ts
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-oauth2';

@Injectable()
export class AuthService extends PassportStrategy(Strategy) {
  constructor() {
    super({
      authorizationURL: process.env.OAUTH2_AUTHORIZATION_URL,
      tokenURL: process.env.OAUTH2_TOKEN_URL,
      clientID: process.env.OAUTH2_CLIENT_ID,
      clientSecret: process.env.OAUTH2_CLIENT_SECRET,
      callbackURL: process.env.OAUTH2_CALLBACK_URL,
      scope: 'openid profile email',
      passReqToCallback: false, // No pasamos req a validate
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: any,
    done: (error: any, user?: any) => void,
  ) {
    try {
      const user = { accessToken, profile };
      if (!user) {
        throw new UnauthorizedException();
      }
      done(null, user);
    } catch (err) {
      done(err, false);
    }
  }
}
