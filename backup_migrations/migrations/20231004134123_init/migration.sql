/*
  Warnings:

  - You are about to drop the column `fruit_classid` on the `fruitTraining` table. All the data in the column will be lost.
  - Added the required column `fruit_class_id` to the `fruitTraining` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "fruitTraining" DROP CONSTRAINT "fruitTraining_fruit_classid_fkey";

-- AlterTable
ALTER TABLE "fruitTraining" DROP COLUMN "fruit_classid",
ADD COLUMN     "fruit_class_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "fruitTraining" ADD CONSTRAINT "fruitTraining_fruit_class_id_fkey" FOREIGN KEY ("fruit_class_id") REFERENCES "fruit_class"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
