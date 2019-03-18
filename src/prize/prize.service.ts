import { Injectable } from '@nestjs/common';
import { Equal, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Prize } from './prize.entity';

@Injectable()
export class PrizeService {
  constructor(@InjectRepository(Prize)
              private readonly prizeRepository: Repository<Prize>) {
  }

  async findAll(): Promise<Prize[]> {
    return await this.prizeRepository.find();
  }

  async save(prize: Prize): Promise<Prize> {
    delete prize.id;
    return await this.prizeRepository.save(prize);
  }

  async update(id: number, prize: Prize): Promise<Prize> {
    const exist = await this.prizeRepository.findOne(id);
    exist.title = prize && prize.title ? prize.title : exist.title;
    exist.description = prize && prize.description ? prize.description : exist.description;
    exist.price = prize && prize.price ? prize.price : exist.price;
    exist.quantity = prize && prize.quantity ? prize.quantity : exist.quantity;
    return await this.prizeRepository.save(exist);
  }

  async insertOrUpdate(prize: Prize): Promise<Prize> {
    const exist = await this.prizeRepository.find({ title: Equal(prize.title) });
    if (exist.length > 0) {
      exist[0].title = prize && prize.title ? prize.title : exist[0].title;
      exist[0].description = prize && prize.description ? prize.description : exist[0].description;
      exist[0].price = prize && prize.price ? prize.price : exist[0].price;
      exist[0].quantity = prize && prize.quantity ? prize.quantity : exist[0].quantity;
      return await this.prizeRepository.save(exist[0]);
    } else {
      return await this.prizeRepository.save(prize);
    }
  }

  async delete(id: number): Promise<Prize> {
    const exist = await this.prizeRepository.findOne(id);
    return await this.prizeRepository.remove(exist);
  }
}
