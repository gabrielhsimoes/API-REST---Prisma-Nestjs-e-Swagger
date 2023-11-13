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
exports.FruitDescriptionService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let FruitDescriptionService = class FruitDescriptionService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(createFruitDescriptionDto) {
        return this.prisma.fruitDescription.create({ data: createFruitDescriptionDto });
    }
    findAll() {
        return this.prisma.fruitDescription.findMany({
            include: { fruitClass: true },
        });
    }
    findOne(id) {
        return this.prisma.fruitDescription.findUnique({ where: { id } });
    }
    update(id, updateFruitDescriptionDto) {
        return this.prisma.fruitDescription.update({
            where: { id },
            data: updateFruitDescriptionDto,
        });
    }
    remove(id) {
        return this.prisma.fruitDescription.delete({ where: { id } });
    }
};
exports.FruitDescriptionService = FruitDescriptionService;
exports.FruitDescriptionService = FruitDescriptionService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], FruitDescriptionService);
//# sourceMappingURL=fruit-description.service.js.map