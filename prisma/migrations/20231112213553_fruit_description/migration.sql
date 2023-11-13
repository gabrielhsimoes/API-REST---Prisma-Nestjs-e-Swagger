/*
  Warnings:

  - You are about to drop the column `fruit_name_id` on the `fruit_value` table. All the data in the column will be lost.
  - You are about to drop the `fruit_name` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `fruit_description_id` to the `fruit_value` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "fruit_name" DROP CONSTRAINT "fruit_name_fruit_class_id_fkey";

-- DropForeignKey
ALTER TABLE "fruit_value" DROP CONSTRAINT "fruit_value_fruit_name_id_fkey";

-- AlterTable
ALTER TABLE "fruit_value" DROP COLUMN "fruit_name_id",
ADD COLUMN     "fruit_description_id" TEXT NOT NULL;

-- DropTable
DROP TABLE "fruit_name";

-- CreateTable
CREATE TABLE "fruit_description" (
    "id" TEXT NOT NULL,
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "description" TEXT NOT NULL,
    "fruit_class_id" TEXT NOT NULL,

    CONSTRAINT "fruit_description_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "fruit_description" ADD CONSTRAINT "fruit_description_fruit_class_id_fkey" FOREIGN KEY ("fruit_class_id") REFERENCES "fruit_class"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "fruit_value" ADD CONSTRAINT "fruit_value_fruit_description_id_fkey" FOREIGN KEY ("fruit_description_id") REFERENCES "fruit_description"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
