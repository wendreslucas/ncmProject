import { Injectable } from '@nestjs/common';
import { CreateNcmDto } from './dto/create-ncm.dto';
import { UpdateNcmDto } from './dto/update-ncm.dto';

@Injectable()
export class NcmsService {
  create(createNcmDto: CreateNcmDto) {
    return 'This action adds a new ncm';
  }

  findAll() {
    return `This action returns all ncms`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ncm`;
  }

  update(id: number, updateNcmDto: UpdateNcmDto) {
    return `This action updates a #${id} ncm`;
  }

  remove(id: number) {
    return `This action removes a #${id} ncm`;
  }
}
