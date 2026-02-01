import { IsEmail, IsNotEmpty, IsString, IsNumber, IsOptional, Min } from 'class-validator';

export class ContactFormDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  phone: string;

  @IsNotEmpty()
  @IsString()
  message: string;
}

export class EstimateFormDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  phone: string;

  @IsNotEmpty()
  @IsString()
  location: string;

  @IsNotEmpty()
  @IsString()
  serviceType: string;

  @IsNotEmpty()
  @IsString()
  roofType: string;

  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  roofArea: number;

  @IsNotEmpty()
  @IsString()
  urgency: string;

  @IsNotEmpty()
  @IsString()
  preferredContact: string;

  @IsOptional()
  @IsString()
  description?: string;
}

export class QuickContactDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  phone: string;

  @IsNotEmpty()
  @IsString()
  message: string;
}
