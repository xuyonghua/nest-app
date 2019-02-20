import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Photo } from './photo.entity';
import { ObjectID, Repository } from 'typeorm';

@Injectable()
export class PhotoService {
  constructor(@InjectRepository(Photo)
              private readonly photoRepository: Repository<Photo>) {
  }

  async findAll(): Promise<Photo[]> {
    return await this.photoRepository.find();
  }

  async save(photo: Photo): Promise<Photo> {
    delete photo.id;
    return await this.photoRepository.save(photo);
  }

  async update(id: ObjectID, photo: Photo): Promise<Photo> {
    const existPhoto = await this.photoRepository.findOne(id);
    existPhoto.name = photo && photo.name ? photo.name : existPhoto.name;
    return await this.photoRepository.save(existPhoto);
  }

  async delete(id: ObjectID): Promise<Photo> {
    const existPhoto = await this.photoRepository.findOne(id);
    return await this.photoRepository.remove(existPhoto);
  }
}
