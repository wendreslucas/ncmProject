import { Test, TestingModule } from '@nestjs/testing';
import { NcmsService } from './ncms.service';

describe('NcmsService', () => {
  let service: NcmsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NcmsService],
    }).compile();

    service = module.get<NcmsService>(NcmsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
