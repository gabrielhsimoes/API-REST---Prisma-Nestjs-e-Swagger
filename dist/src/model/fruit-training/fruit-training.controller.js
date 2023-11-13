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
exports.FruitTrainingController = void 0;
const common_1 = require("@nestjs/common");
const fruit_training_service_1 = require("./fruit-training.service");
const create_fruit_training_dto_1 = require("./dto/create-fruit-training.dto");
const update_fruit_training_dto_1 = require("./dto/update-fruit-training.dto");
const swagger_1 = require("@nestjs/swagger");
const fruit_training_entity_1 = require("./entities/fruit-training.entity");
const jwt_auth_guard_1 = require("../../auth/jwt-auth.guard");
let FruitTrainingController = class FruitTrainingController {
    constructor(fruitTrainingService) {
        this.fruitTrainingService = fruitTrainingService;
    }
    create(createFruitTrainingDto) {
        return this.fruitTrainingService.create(createFruitTrainingDto);
    }
    findAll() {
        return this.fruitTrainingService.findAll();
    }
    findOne(id) {
        return this.fruitTrainingService.findOne(id);
    }
    update(id, updateFruitTrainingDto) {
        return this.fruitTrainingService.update(id, updateFruitTrainingDto);
    }
    remove(id) {
        return this.fruitTrainingService.remove(id);
    }
};
exports.FruitTrainingController = FruitTrainingController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiCreatedResponse)({ type: fruit_training_entity_1.FruitTrainingEntity }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_fruit_training_dto_1.CreateFruitTrainingDto]),
    __metadata("design:returntype", void 0)
], FruitTrainingController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiCreatedResponse)({ type: fruit_training_entity_1.FruitTrainingEntity, isArray: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FruitTrainingController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiCreatedResponse)({ type: fruit_training_entity_1.FruitTrainingEntity }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FruitTrainingController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiCreatedResponse)({ type: fruit_training_entity_1.FruitTrainingEntity }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_fruit_training_dto_1.UpdateFruitTrainingDto]),
    __metadata("design:returntype", void 0)
], FruitTrainingController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiCreatedResponse)({ type: fruit_training_entity_1.FruitTrainingEntity }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FruitTrainingController.prototype, "remove", null);
exports.FruitTrainingController = FruitTrainingController = __decorate([
    (0, common_1.Controller)('fruit-training'),
    (0, swagger_1.ApiTags)('fruit-training'),
    __metadata("design:paramtypes", [fruit_training_service_1.FruitTrainingService])
], FruitTrainingController);
//# sourceMappingURL=fruit-training.controller.js.map