import { Module } from '@nestjs/common';
import { InvoicesService } from './invoices.service';
import { InvoicesController } from './invoices.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  providers: [InvoicesService],
  controllers: [InvoicesController],
  imports: [PrismaModule, AuthModule],
})
export class InvoicesModule {}
