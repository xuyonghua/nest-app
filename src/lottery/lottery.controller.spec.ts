import { Test, TestingModule } from '@nestjs/testing';
import { LotteryController } from './lottery.controller';

describe('Lottery Controller', () => {
  let controller: LotteryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LotteryController],
    }).compile();

    controller = module.get<LotteryController>(LotteryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
