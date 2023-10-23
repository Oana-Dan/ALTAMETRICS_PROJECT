import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  UseGuards,
  Query,
} from '@nestjs/common';
import { InvoicesService } from './invoices.service';
import { Invoice, Prisma } from '@prisma/client';
import { AuthGuard } from '@nestjs/passport';

@Controller('invoices')
@UseGuards(AuthGuard())
export class InvoicesController {
  constructor(private invoicesService: InvoicesService) {}

  @Get()
  getInvoices(@Query('userId') userId: string) {
    return this.invoicesService.getInvoices(userId);
  }

  @Get(':id')
  getBillById(@Param('id') id: string, @Query('userId') userId: string) {
    return this.invoicesService.getInvoiceById(id, userId);
  }

  @Post()
  createInvoice(@Body() invoice: Prisma.InvoiceCreateInput): Promise<Invoice> {
    return this.invoicesService.createInvoice(invoice);
  }
}
