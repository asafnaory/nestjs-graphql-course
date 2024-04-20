-- CreateEnum
CREATE TYPE "Position" AS ENUM ('POINT_GUARD', 'SHOOTING_GUARD', 'SMALL_FORWARD', 'POWER_FORWARD', 'CENTER');

-- AlterTable
ALTER TABLE "Player" ADD COLUMN     "position" "Position";
