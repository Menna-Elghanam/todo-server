/*
  Warnings:

  - You are about to drop the `calender` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `test` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `date` to the `todo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `todo` ADD COLUMN `date` DATETIME(3) NOT NULL,
    ADD COLUMN `isComplete` BOOLEAN NOT NULL DEFAULT false;

-- DropTable
DROP TABLE `calender`;

-- DropTable
DROP TABLE `test`;
