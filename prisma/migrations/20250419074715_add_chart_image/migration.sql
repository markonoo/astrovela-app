-- CreateTable
CREATE TABLE "ChartImage" (
    "id" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "birthData" JSONB NOT NULL,
    "chartType" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ChartImage_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ChartImage" ADD CONSTRAINT "ChartImage_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
