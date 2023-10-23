import { Module } from '@nestjs/common';
import { InvoicesModule } from './invoices/invoices.module';
import { BillsModule } from './bills/bills.module';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [InvoicesModule, BillsModule, AuthModule, PrismaModule, UserModule],
})
export class AppModule {}
