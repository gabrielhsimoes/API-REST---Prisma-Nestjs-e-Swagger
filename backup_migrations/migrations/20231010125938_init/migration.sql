/*
  Warnings:

  - You are about to drop the `fruitTraining` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "fruitTraining" DROP CONSTRAINT "fruitTraining_fruit_class_id_fkey";

-- DropTable
DROP TABLE "fruitTraining";

-- CreateTable
CREATE TABLE "fruit_training" (
    "id" TEXT NOT NULL,
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "img" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "fruit_class_id" TEXT NOT NULL,

    CONSTRAINT "fruit_training_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "fruit_training" ADD CONSTRAINT "fruit_training_fruit_class_id_fkey" FOREIGN KEY ("fruit_class_id") REFERENCES "fruit_class"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
