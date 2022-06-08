import { Inject, Injectable } from '@nestjs/common';
import { tbl_thuonglai } from './thuonglai.entity';

@Injectable()
export class ThuongLaiService {
  constructor(
    @Inject('THUONGLAI_REPOSITORY')
    private readonly thuonglai: typeof tbl_thuonglai,
  ) {}

  async findAll(): Promise<tbl_thuonglai[]> {
    return this.thuonglai.findAll<tbl_thuonglai>();
  }

  async findOne(data: object): Promise<tbl_thuonglai> {
    return this.thuonglai
      .findOne<tbl_thuonglai>({
        where: { ...data },
      })
      .then((t) => t?.get());
  }
}
