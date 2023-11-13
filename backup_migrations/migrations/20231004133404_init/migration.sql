-- DropIndex
DROP INDEX "fruit_class_father_id_key";

-- AlterTable
ALTER TABLE "user" ALTER COLUMN "description" DROP NOT NULL,
ALTER COLUMN "password" SET DATA TYPE VARCHAR(100);

-- CreateTable
CREATE TABLE "fruitTraining" (
    "id" TEXT NOT NULL,
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "img" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "fruitTraining_pkey" PRIMARY KEY ("id")
);
