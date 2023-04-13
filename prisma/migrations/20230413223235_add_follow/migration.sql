-- CreateTable
CREATE TABLE "Follow" (
    "id" SERIAL NOT NULL,
    "follower" INTEGER NOT NULL,
    "following" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Follow_pkey" PRIMARY KEY ("id")
);
