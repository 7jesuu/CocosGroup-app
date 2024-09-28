import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateCocosDto {
  @ApiProperty({
    description: 'Название записи',
    example: 'Example Title',
  })
  @IsNotEmpty()
  @IsString()
  @Length(1, 255)
  title: string;
}
