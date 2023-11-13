import { fruitClass } from '@prisma/client';
/* eslint-disable prettier/prettier */
// prisma/seed.ts

import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

// initialize Prisma Client
const prisma = new PrismaClient();

const roundsOfHashing = 10;

async function main() {
    const passwordadmin = await bcrypt.hash('password-admin', roundsOfHashing);
    const passwordtreino = await bcrypt.hash('password-treino', roundsOfHashing);

    const profileAdmin = await prisma.profile.upsert({
        where:{ key:'admin'},
        update:{},
        create: {
            name: 'Administrador',
            key: 'admin'
        }
    })
    const profileTrain = await prisma.profile.upsert({
        where:{ key:'train'},
        update:{},
        create: {
            name: 'Treinamento',
            key: 'train'
        }
    })
    const userAdmin = await prisma.user.upsert({
        where: { login: 'admin' },
        update: {
            password: passwordadmin,
        },
        create: {
            login: 'admin',
            name: 'Administrador',
            description:'',
            password: passwordadmin,
            profileId: profileAdmin.id
        },
    });

    const userTreino = await prisma.user.upsert({
        where: { login: 'treino' },
        update: {
            password: passwordtreino,
        },
        create: {
            login: 'treino',
            name: 'Treino',
            password: passwordtreino,
            profileId: profileAdmin.id
        },
    });

    const apple = await prisma.fruitClass.upsert({
        where: { name: 'apple' },
        update: {},
        create: {
            name: 'apple',
            description: 'apple base',

        },
    
    
    });

    const orange = await prisma.fruitClass.upsert({
        where: { name: 'orange' },
        update: {},
        create: {
            name: 'orange',
            description: 'orange base',

        },
    
    
    });


    const appleRed = await prisma.fruitClass.upsert({
        where: { name: 'apple_red' },
        update: {},
        create: {
            name: 'apple_red',
            description: 'apple ',
            father: {
                connect: { id: apple.id }
            }
        },
    });

    const appleFuji = await prisma.fruitClass.upsert({
        where: { name: 'apple_fuji' },
        update: {},
        create: {
            name: 'apple_fuji',
            description: 'apple fuji ',
            fatherId: apple.id,
        },
    });

    const orangeBahia = await prisma.fruitClass.upsert({
        where: { name: 'orange_bahia' },
        update: {},
        create: {
            name: 'orange_bahia',
            description: 'orange_bahia foi criado',
            fatherId: orange.id,
        },
    });

       console.log({ apple, orange});
}

// execute the main function
main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        // close Prisma Client at the end
        await prisma.$disconnect();
    });