-- CreateTable
CREATE TABLE "fruit_class" (
    "id" TEXT NOT NULL,
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "description" TEXT NOT NULL,
    "father_id" TEXT,

    CONSTRAINT "fruit_class_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "fruit_training" (
    "id" TEXT NOT NULL,
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "img" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "fruit_class_id" TEXT NOT NULL,

    CONSTRAINT "fruit_training_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "fruit_name" (
    "id" TEXT NOT NULL,
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "fruit_class_id" TEXT NOT NULL,

    CONSTRAINT "fruit_name_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "fruit_value" (
    "id" TEXT NOT NULL,
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "description" TEXT NOT NULL,
    "value_unid" DECIMAL(10,4) NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "fruit_name_id" TEXT NOT NULL,

    CONSTRAINT "fruit_value_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "fruit_history" (
    "id" TEXT NOT NULL,
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "date_capture" TIMESTAMP(3) NOT NULL,
    "value_weight" DECIMAL(10,4) NOT NULL,
    "value_total" DECIMAL(20,4) NOT NULL,
    "fruit_value_id" TEXT NOT NULL,

    CONSTRAINT "fruit_history_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "description" TEXT,
    "login" VARCHAR(50) NOT NULL,
    "password" VARCHAR(100) NOT NULL,
    "profile_id" TEXT,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "profile" (
    "id" TEXT NOT NULL,
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "key" VARCHAR(50) NOT NULL,

    CONSTRAINT "profile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "balance" (
    "id" TEXT NOT NULL,
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,
    "nome" TEXT NOT NULL,
    "ip" TEXT NOT NULL,
    "local" TEXT NOT NULL,

    CONSTRAINT "balance_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "fruit_class_name_key" ON "fruit_class"("name");

-- CreateIndex
CREATE UNIQUE INDEX "user_login_key" ON "user"("login");

-- CreateIndex
CREATE UNIQUE INDEX "profile_key_key" ON "profile"("key");

-- AddForeignKey
ALTER TABLE "fruit_class" ADD CONSTRAINT "fruit_class_father_id_fkey" FOREIGN KEY ("father_id") REFERENCES "fruit_class"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "fruit_training" ADD CONSTRAINT "fruit_training_fruit_class_id_fkey" FOREIGN KEY ("fruit_class_id") REFERENCES "fruit_class"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "fruit_name" ADD CONSTRAINT "fruit_name_fruit_class_id_fkey" FOREIGN KEY ("fruit_class_id") REFERENCES "fruit_class"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "fruit_value" ADD CONSTRAINT "fruit_value_fruit_name_id_fkey" FOREIGN KEY ("fruit_name_id") REFERENCES "fruit_name"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "fruit_history" ADD CONSTRAINT "fruit_history_fruit_value_id_fkey" FOREIGN KEY ("fruit_value_id") REFERENCES "fruit_value"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_profile_id_fkey" FOREIGN KEY ("profile_id") REFERENCES "profile"("id") ON DELETE SET NULL ON UPDATE CASCADE;
