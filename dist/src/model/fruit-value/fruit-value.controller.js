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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FruitValueController = void 0;
const common_1 = require("@nestjs/common");
const fruit_value_service_1 = require("./fruit-value.service");
const create_fruit_value_dto_1 = require("./dto/create-fruit-value.dto");
const update_fruit_value_dto_1 = require("./dto/update-fruit-value.dto");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../../auth/jwt-auth.guard");
let FruitValueController = class FruitValueController {
    constructor(fruitValueService) {
        this.fruitValueService = fruitValueService;
    }
    create(createFruitValueDto) {
        return this.fruitValueService.create(createFruitValueDto);
    }
    findAll() {
        return this.fruitValueService.findAll();
    }
    findOne(id) {
        return this.fruitValueService.findOne(id);
    }
    update(id, updateFruitValueDto) {
        return this.fruitValueService.update(id, updateFruitValueDto);
    }
    remove(id) {
        return this.fruitValueService.remove(id);
    }
};
exports.FruitValueController = FruitValueController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_fruit_value_dto_1.CreateFruitValueDto]),
    __metadata("design:returntype", void 0)
], FruitValueController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FruitValueController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FruitValueController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_fruit_value_dto_1.UpdateFruitValueDto]),
    __metadata("design:returntype", void 0)
], FruitValueController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FruitValueController.prototype, "remove", null);
exports.FruitValueController = FruitValueController = __decorate([
    (0, common_1.Controller)('fruit-value'),
    (0, swagger_1.ApiTags)('fruit-value'),
    __metadata("design:paramtypes", [fruit_value_service_1.FruitValueService])
], FruitValueController);
//# sourceMappingURL=fruit-value.controller.js.map