-- DropForeignKey
ALTER TABLE "ChartImage" DROP CONSTRAINT "ChartImage_userId_fkey";

-- AlterTable
ALTER TABLE "ChartImage" ADD COLUMN     "email" TEXT,
ADD COLUMN     "session_id" TEXT,
ALTER COLUMN "userId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "ChartImage" ADD CONSTRAINT "ChartImage_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
