import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Bill, Prisma } from '@prisma/client';

@Injectable()
export class BillsService {
  constructor(private prisma: PrismaService) {}

  async getBills(userId: string): Promise<Bill[]> {
    return await this.prisma.bill.findMany({ where: { userId } });
  }

  async getBillById(id: string, userId: string): Promise<Bill> {
    const bill = await this.prisma.bill.findUnique({ where: { id, userId } });
    if (!bill) {
      throw new NotFoundException(`Bill with id: ${id} not found`);
    }

    return bill;
  }

  async createBill(bill: Prisma.BillCreateInput): Promise<Bill> {
    const { due_date } = bill;
    const date = new Date(due_date);
    bill.due_date = date.toISOString();
    return await this.prisma.bill.create({ data: bill });
  }
}
