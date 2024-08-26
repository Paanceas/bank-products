import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class AuthService {
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {}

  async getAccessToken(code: string) {
    const response = await lastValueFrom(
      this.httpService.post(
        this.configService.get<string>('OAUTH2_TOKEN_URL'),
        {
          grant_type: 'authorization_code',
          client_id: this.configService.get<string>('OAUTH2_CLIENT_ID'),
          client_secret: this.configService.get<string>('OAUTH2_CLIENT_SECRET'),
          redirect_uri: this.configService.get<string>('OAUTH2_CALLBACK_URL'),
          code,
        },
        {
          headers: { 'Content-Type': 'application/json' },
        },
      ),
    );
    return response.data;
  }
}
