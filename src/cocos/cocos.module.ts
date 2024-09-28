import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CocosService } from './cocos.service';
import { CocosController } from './cocos.controller';
import { Cocos } from './entities/cocos.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cocos])],
  controllers: [CocosController],
  providers: [CocosService],
})
export class CocosModule {}
