/*
  Warnings:

  - You are about to drop the `test101` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
-- DROP TABLE `test101`;

-- CreateTable
CREATE TABLE `todo` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(255) NOT NULL,
    `description` VARCHAR(191) NULL,

    UNIQUE INDEX `todo_title_key`(`title`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
