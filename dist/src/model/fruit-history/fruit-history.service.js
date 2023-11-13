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
exports.FruitHistoryService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let FruitHistoryService = class FruitHistoryService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(createFruitHistoryDto) {
        return this.prisma.fruitHistory.create({ data: createFruitHistoryDto });
    }
    findAll() {
        return this.prisma.fruitHistory.findMany({
            include: {
                fruitValue: {
                    include: {
                        fruitDescription: {
                            include: {
                                fruitClass: true,
                            },
                        },
                    },
                },
            },
        });
    }
    findOne(id) {
        return this.prisma.fruitHistory.findUnique({
            where: { id },
            include: {
                fruitValue: {
                    include: {
                        fruitDescription: {
                            include: {
                                fruitClass: true,
                            },
                        },
                    },
                },
            },
        });
    }
    update(id, updateFruitHistoryDto) {
        return this.prisma.fruitHistory.update({
            where: { id },
            data: updateFruitHistoryDto,
        });
    }
    remove(id) {
        return this.prisma.fruitHistory.delete({ where: { id } });
    }
    searchByQuery(query) {
        console.log(`Procurando query: ${query}`);
        return this.prisma.fruitHistory.findMany({
            where: {
                OR: [
                    {
                        id: {
                            contains: query
                        },
                        fruitValue: {
                            fruitDescription: {
                                description: {
                                    contains: query,
                                },
                                fruitClass: {
                                    name: {
                                        contains: query,
                                    }
                                }
                            }
                        }
                    }
                ]
            },
        });
    }
};
exports.FruitHistoryService = FruitHistoryService;
exports.FruitHistoryService = FruitHistoryService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], FruitHistoryService);
//# sourceMappingURL=fruit-history.service.js.map