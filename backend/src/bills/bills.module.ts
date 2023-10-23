import { Module } from '@nestjs/common';
import { BillsService } from './bills.service';
import { BillsController } from './bills.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  providers: [BillsService],
  controllers: [BillsController],
  imports: [PrismaModule, AuthModule],
})
export class BillsModule {}
