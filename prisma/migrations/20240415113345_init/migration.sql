-- CreateTable
CREATE TABLE "Player" (
    "id" TEXT NOT NULL,
    "number" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "nickNames" TEXT[] DEFAULT ARRAY[]::TEXT[],

    CONSTRAINT "Player_pkey" PRIMARY KEY ("id")
);
