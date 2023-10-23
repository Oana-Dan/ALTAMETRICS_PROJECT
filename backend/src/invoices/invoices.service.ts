import { Injectable, NotFoundException } from '@nestjs/common';
import { Invoice, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class InvoicesService {
  constructor(private prisma: PrismaService) {}

  async getInvoices(userId: string): Promise<Invoice[]> {
    return await this.prisma.invoice.findMany({ where: { userId } });
  }

  async getInvoiceById(id: string, userId: string): Promise<Invoice> {
    const invoice = await this.prisma.invoice.findUnique({
      where: { id, userId },
    });
    if (!invoice) {
      throw new NotFoundException(`Invoice with id: ${id} not found`);
    }

    return invoice;
  }

  async createInvoice(invoice: Prisma.InvoiceCreateInput): Promise<Invoice> {
    const { due_date } = invoice;
    const date = new Date(due_date);
    invoice.due_date = date.toISOString();
    return await this.prisma.invoice.create({ data: invoice });
  }
}
