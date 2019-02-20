import { Body, Controller, Delete, Get, Logger, Param, Post, Put, UseGuards } from '@nestjs/common';
import { PhotoService } from './photo.service';
import { Photo } from './photo.entity';
import { ObjectID } from 'typeorm';
import { Roles } from '../common/roles.decorator';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from '../auth/guards/roles.guard';

@Controller('photo')
export class PhotoController {
  constructor(private readonly photoService: PhotoService) {
  }

  @Delete(':id')
  async delete(@Param('id') id: ObjectID) {
    const response = await this.photoService.delete(id);
    return { code: 200, message: '删除成功', data: response };
  }

  @Post()
  async create(@Body() photo: Photo) {
    const response = await this.photoService.save(photo);
    return { code: 200, message: '创建成功', data: response };
  }

  @Put(':id')
  async update(@Param('id') id: ObjectID, @Body() photo: Photo) {
    const response = await this.photoService.update(id, photo);
    return { code: 200, message: '更新成功', data: response, ha: id };
  }

  @Get('photoList')
  @UseGuards(AuthGuard())
  async photoList() {
    Logger.log('Only a test');
    const response = await this.photoService.findAll();
    return { code: 200, message: '查询成功', data: response };
  }
}
