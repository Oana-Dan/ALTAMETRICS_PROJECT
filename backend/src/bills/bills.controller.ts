import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { BillsService } from './bills.service';
import { Bill, Prisma } from '@prisma/client';
import { AuthGuard } from '@nestjs/passport';

@Controller('bills')
@UseGuards(AuthGuard())
export class BillsController {
  constructor(private billsService: BillsService) {}

  @Get()
  getBills(@Query('userId') userId: string): Promise<Bill[]> {
    return this.billsService.getBills(userId);
  }

  @Get(':id')
  getBillById(
    @Param('id') id: string,
    @Query('userId') userId: string,
  ): Promise<Bill> {
    return this.billsService.getBillById(id, userId);
  }

  @Post()
  createBill(@Body() bill: Prisma.BillCreateInput): Promise<Bill> {
    return this.billsService.createBill(bill);
  }
}
