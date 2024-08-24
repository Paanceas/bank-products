import { IsString, IsNotEmpty, IsEnum } from 'class-validator';
import { ClientType } from '../enums/client-type.enum';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  readonly type: string;

  @IsString()
  @IsNotEmpty()
  readonly accountNumber: string;

  @IsString()
  @IsNotEmpty()
  readonly clientId: string;

  @IsEnum(ClientType)
  @IsNotEmpty()
  readonly clientType: ClientType;
}
