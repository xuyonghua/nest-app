import { Module } from '@nestjs/common';
import { PrizeController } from './prize.controller';
import { PrizeService } from './prize.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';
import { Prize } from './prize.entity';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    TypeOrmModule.forFeature([Prize]),
  ],
  controllers: [PrizeController],
  providers: [PrizeService],
})
export class PrizeModule {
}
