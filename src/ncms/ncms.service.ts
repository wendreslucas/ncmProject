import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateNcmDto } from './dto/create-ncm.dto';
import { UpdateNcmDto } from './dto/update-ncm.dto';
import { Ncm, NcmDocument } from './entities/ncm.entity';

@Injectable()
export class NcmsService {
  constructor(@InjectModel(Ncm.name) private ncmModel: Model<NcmDocument>) {}

  create(createNcmDto: CreateNcmDto) {
    const ncm = new this.ncmModel(createNcmDto);
    return ncm.save();
  }

  findAll() {
    return this.ncmModel.find();
  }

  findOne(id: string) {
    return this.ncmModel.findById(id);
  }

  update(id: string, updateNcmDto: UpdateNcmDto) {
    return this.ncmModel.findByIdAndUpdate(
      {
        _id: id,
      },
      {
        updateNcmDto,
      },
      {
        new: true,
      },
    );
  }

  remove(id: string) {
    return this.ncmModel
      .deleteOne({
        _id: id,
      })
      .exec();
  }
}
