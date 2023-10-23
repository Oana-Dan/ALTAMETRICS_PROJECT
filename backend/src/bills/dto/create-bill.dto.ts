import { ApiProperty } from '@nestjs/swagger';
import { User } from '@prisma/client';

export class CreateBillDto {
  @ApiProperty({ required: true })
  amount: number;

  @ApiProperty({ required: true })
  due_date: Date;

  @ApiProperty({ required: true })
  details: string;

  @ApiProperty({ required: true })
  user_id: User;

  @ApiProperty({ required: true })
  userId: string;
}
