import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cocos } from './entities/cocos.entity';
import { CreateCocosDto } from './dto/create-cocos.dto';

@Injectable()
export class CocosService {
  constructor(
    @InjectRepository(Cocos)
    private readonly cocosRepository: Repository<Cocos>,
  ) {}

  async create(createCocosDto: CreateCocosDto): Promise<Cocos> {
    const coco = this.cocosRepository.create(createCocosDto);
    return await this.cocosRepository.save(coco);
  }

  async findAll(options: {
    page: number;
    limit: number;
    search?: string;
  }): Promise<Cocos[]> {
    const query = this.cocosRepository
      .createQueryBuilder('cocos')
      .addSelect(
        'EXTRACT(DAY FROM (COALESCE(cocos."updatedAt", now()) - cocos."createdAt"))',
        'difference',
      )
      .where('cocos.deletedAt IS NULL');
  
    if (options.search) {
      query.andWhere('LOWER(cocos.title) LIKE LOWER(:search)', {
        search: `%${options.search}%`,
      });
    }
  
    query
      .orderBy('cocos.createdAt', 'DESC')
      .skip((options.page - 1) * options.limit)
      .take(options.limit);
  
    return await query.getRawMany();
  }

  async findOne(id: string): Promise<Cocos> {
    return await this.cocosRepository.findOne({
      where: { id, deletedAt: null },
    });
  }

  async update(
    id: string,
    updateCocosDto: Partial<CreateCocosDto>,
  ): Promise<Cocos> {
    await this.cocosRepository.update(id, updateCocosDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.cocosRepository.softDelete(id);
  }
}
