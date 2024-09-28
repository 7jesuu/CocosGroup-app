import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateCocosDto } from './create-cocos.dto';
import { IsString, Length } from 'class-validator';

export class UpdateCocosDto extends PartialType(CreateCocosDto) {
  @ApiProperty({
    description: 'Название записи',
    example: 'Updated Title',
  })
  @IsString()
  @Length(1, 255)
  title?: string;
}
