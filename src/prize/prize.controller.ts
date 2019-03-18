import { Body, Controller, Delete, Get, Logger, Param, Post, Put, UseGuards } from '@nestjs/common';
import { PrizeService } from './prize.service';
import { AuthGuard } from '@nestjs/passport';
import { Prize } from './prize.entity';

@Controller('api/prize')
export class PrizeController {
  constructor(private readonly prizeService: PrizeService) {
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    const response = await this.prizeService.delete(id);
    return { code: 200, message: '删除成功', data: response };
  }

  @Post()
  async create(@Body() prize: Prize) {
    const response = await this.prizeService.save(prize);
    return { code: 200, message: '创建成功', data: response };
  }

  @Post()
  async save(@Body() prize: Prize) {
    const response = await this.prizeService.insertOrUpdate(prize);
    return { code: 200, message: '创建成功', data: response };
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() prize: Prize) {
    const response = await this.prizeService.update(id, prize);
    return { code: 200, message: '更新成功', data: response, updateId: id };
  }

  @Get('prizeList')
  // @UseGuards(AuthGuard())
  async photoList() {
    const response = await this.prizeService.findAll();
    return { code: 200, message: '查询成功', data: response };
  }
}
