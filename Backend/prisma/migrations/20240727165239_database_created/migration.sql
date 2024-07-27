-- CreateTable
CREATE TABLE "Service" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Service_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Plan" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "icon_url" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "duration" INTEGER NOT NULL,

    CONSTRAINT "Plan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PlanService" (
    "id" SERIAL NOT NULL,
    "service_id" INTEGER NOT NULL,
    "plan_id" INTEGER NOT NULL,

    CONSTRAINT "PlanService_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Rol" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "Rol_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone_number" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL,
    "rol_id" INTEGER NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SaleStatus" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "SaleStatus_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sale" (
    "id" SERIAL NOT NULL,
    "plan_service_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    "creation_date" TIMESTAMP(3) NOT NULL,
    "total" DOUBLE PRECISION NOT NULL,
    "observation" TEXT NOT NULL,
    "status_id" INTEGER NOT NULL,

    CONSTRAINT "Sale_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Suscription" (
    "id" SERIAL NOT NULL,
    "plan_service_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    "start_date" TIMESTAMP(3) NOT NULL,
    "end_date" TIMESTAMP(3) NOT NULL,
    "total" DOUBLE PRECISION NOT NULL,
    "active" BOOLEAN NOT NULL,
    "api_key" TEXT NOT NULL,
    "secret_key" TEXT NOT NULL,

    CONSTRAINT "Suscription_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PortFolio" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "url" TEXT,

    CONSTRAINT "PortFolio_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PortFolioImage" (
    "id" SERIAL NOT NULL,
    "image_url" TEXT NOT NULL,
    "portfolio_id" INTEGER NOT NULL,

    CONSTRAINT "PortFolioImage_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PlanService_plan_id_key" ON "PlanService"("plan_id");

-- CreateIndex
CREATE UNIQUE INDEX "PlanService_service_id_plan_id_key" ON "PlanService"("service_id", "plan_id");

-- AddForeignKey
ALTER TABLE "PlanService" ADD CONSTRAINT "PlanService_plan_id_fkey" FOREIGN KEY ("plan_id") REFERENCES "Plan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlanService" ADD CONSTRAINT "PlanService_service_id_fkey" FOREIGN KEY ("service_id") REFERENCES "Service"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_rol_id_fkey" FOREIGN KEY ("rol_id") REFERENCES "Rol"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sale" ADD CONSTRAINT "Sale_plan_service_id_fkey" FOREIGN KEY ("plan_service_id") REFERENCES "PlanService"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sale" ADD CONSTRAINT "Sale_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sale" ADD CONSTRAINT "Sale_status_id_fkey" FOREIGN KEY ("status_id") REFERENCES "SaleStatus"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Suscription" ADD CONSTRAINT "Suscription_plan_service_id_fkey" FOREIGN KEY ("plan_service_id") REFERENCES "PlanService"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Suscription" ADD CONSTRAINT "Suscription_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PortFolioImage" ADD CONSTRAINT "PortFolioImage_portfolio_id_fkey" FOREIGN KEY ("portfolio_id") REFERENCES "PortFolio"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
