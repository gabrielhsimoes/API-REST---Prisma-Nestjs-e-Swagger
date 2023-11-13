/*
  Warnings:

  - Added the required column `fruit_classid` to the `fruitTraining` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "fruitTraining" ADD COLUMN     "fruit_classid" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "fruitTraining" ADD CONSTRAINT "fruitTraining_fruit_classid_fkey" FOREIGN KEY ("fruit_classid") REFERENCES "fruit_class"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
