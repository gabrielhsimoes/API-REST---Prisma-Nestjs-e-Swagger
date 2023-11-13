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
exports.FruitHistoryEntity = void 0;
const swagger_1 = require("@nestjs/swagger");
const library_1 = require("@prisma/client/runtime/library");
const fruit_value_entity_1 = require("../../fruit-value/entities/fruit-value.entity");
class FruitHistoryEntity {
}
exports.FruitHistoryEntity = FruitHistoryEntity;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], FruitHistoryEntity.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], FruitHistoryEntity.prototype, "createAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], FruitHistoryEntity.prototype, "updatedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], FruitHistoryEntity.prototype, "dateCapture", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", library_1.Decimal)
], FruitHistoryEntity.prototype, "valuWeight", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", library_1.Decimal)
], FruitHistoryEntity.prototype, "valueTotal", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", fruit_value_entity_1.FruitValueEntity)
], FruitHistoryEntity.prototype, "fruitValue", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, nullable: true }),
    __metadata("design:type", String)
], FruitHistoryEntity.prototype, "fruitValueId", void 0);
//# sourceMappingURL=fruit-history.entity.js.map