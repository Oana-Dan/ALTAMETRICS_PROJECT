import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient();

async function main() {
  try {
    const user1 = await prisma.user.create({
      data: {
        email: 'oanadan2k@yahoo.com',
        name: 'Oana Dan',
        password: 'pass',
      },
    });

    const user2 = await prisma.user.create({
      data: {
        email: 'cghiurea@altametrics.com',
        name: 'Cris Ghiurea',
        password: 'pass',
      },
    });

    const bill1 = await prisma.bill.create({
      data: {
        amount: 30,
        details: 'Bill for 27/11/2023',
        due_date: new Date('2023-11-27'),
        userId: user1.id,
      },
    });

    const bill2 = await prisma.bill.create({
      data: {
        amount: 30,
        details: 'Bill for 28/11/2023',
        due_date: new Date('2023-11-28'),
        userId: user1.id,
      },
    });

    const bill3 = await prisma.bill.create({
      data: {
        amount: 30,
        details: 'Bill for 27/11/2023',
        due_date: new Date('2023-11-27'),
        userId: user2.id,
      },
    });
  } catch (err) {
    console.log(err);
  }
}

main();
