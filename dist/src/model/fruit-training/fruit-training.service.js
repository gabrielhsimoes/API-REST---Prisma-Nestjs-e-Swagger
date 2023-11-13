"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FruitTrainingService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let FruitTrainingService = class FruitTrainingService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(createFruitTrainingDto) {
        return this.prisma.fruitTraining.create({ data: createFruitTrainingDto });
    }
    findAll() {
        return this.prisma.fruitTraining.findMany({ include: { fruitClass: true } });
    }
    findOne(id) {
        return this.prisma.fruitTraining.findUnique({ where: { id } });
    }
    update(id, updateFruitTrainingDto) {
        return this.prisma.fruitTraining.update({
            where: { id },
            data: updateFruitTrainingDto,
        });
    }
    remove(id) {
        return this.prisma.fruitTraining.delete({ where: { id } });
    }
};
exports.FruitTrainingService = FruitTrainingService;
exports.FruitTrainingService = FruitTrainingService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], FruitTrainingService);
//# sourceMappingURL=fruit-training.service.js.map