import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { LotteryService } from './lottery.service';
import { Lottery } from './lottery.entity';

@Controller('api/lottery')
export class LotteryController {
  constructor(private readonly lotteryService: LotteryService) {
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    const response = await this.lotteryService.delete(id);
    return { code: 200, message: '删除成功', data: response };
  }

  @Post()
  async create(@Body() lottery: Lottery) {
    const response = await this.lotteryService.save(lottery);
    return { code: 200, message: '创建成功', data: response };
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() lottery: Lottery) {
    const response = await this.lotteryService.update(id, lottery);
    return { code: 200, message: '更新成功', data: response, updateId: id };
  }

  @Get('lotteryList')
  // @UseGuards(AuthGuard())
  async lotteryList() {
    const response = await this.lotteryService.findAll();
    return { code: 200, message: '查询成功', data: response };
  }
}
