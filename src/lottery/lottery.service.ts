import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Lottery } from './lottery.entity';

@Injectable()
export class LotteryService {
  constructor(@InjectRepository(Lottery)
              private readonly lotteryRepository: Repository<Lottery>) {
  }

  async findAll(): Promise<Lottery[]> {
    return await this.lotteryRepository.find();
  }

  async save(lottery: Lottery): Promise<Lottery> {
    delete lottery.id;
    return await this.lotteryRepository.save(lottery);
  }

  async update(id: number, lottery: Lottery): Promise<Lottery> {
    const exist = await this.lotteryRepository.findOne(id);
    exist.title = lottery && lottery.title ? lottery.title : exist.title;
    exist.desc = lottery && lottery.desc ? lottery.desc : exist.desc;
    exist.sponsor = lottery && lottery.sponsor ? lottery.sponsor : exist.sponsor;
    exist.banner = lottery && lottery.banner ? lottery.banner : exist.banner;
    exist.openType = lottery && lottery.openType ? lottery.openType : exist.openType;
    exist.openDate = lottery && lottery.openDate ? lottery.openDate : exist.openDate;
    exist.openNumber = lottery && lottery.openNumber ? lottery.openNumber : exist.openNumber;
    exist.status = lottery && lottery.status ? lottery.status : exist.status;
    exist.prizes = lottery && lottery.prizes ? lottery.prizes : exist.prizes;
    return await this.lotteryRepository.save(exist);
  }

  async delete(id: number): Promise<Lottery> {
    const exist = await this.lotteryRepository.findOne(id);
    return await this.lotteryRepository.remove(exist);
  }
}
