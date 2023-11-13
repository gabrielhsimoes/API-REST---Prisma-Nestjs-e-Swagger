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
exports.FruitHistoryController = void 0;
const common_1 = require("@nestjs/common");
const fruit_history_service_1 = require("./fruit-history.service");
const create_fruit_history_dto_1 = require("./dto/create-fruit-history.dto");
const update_fruit_history_dto_1 = require("./dto/update-fruit-history.dto");
const fruit_history_entity_1 = require("./entities/fruit-history.entity");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../../auth/jwt-auth.guard");
let FruitHistoryController = class FruitHistoryController {
    constructor(fruitHistoryService) {
        this.fruitHistoryService = fruitHistoryService;
    }
    create(createFruitHistoryDto) {
        return this.fruitHistoryService.create(createFruitHistoryDto);
    }
    findAll() {
        return this.fruitHistoryService.findAll();
    }
    async findOne(id) {
        const result = this.fruitHistoryService.findOne(id);
        if (!result) {
            throw new common_1.NotFoundException(`FruitClass with ${id} does not exist.`);
        }
        return result;
    }
    findFruitHistoryByQuery(query) {
        return this.fruitHistoryService.searchByQuery(query || '');
    }
    update(id, updateFruitHistoryDto) {
        return this.fruitHistoryService.update(id, updateFruitHistoryDto);
    }
    remove(id) {
        return this.fruitHistoryService.remove(id);
    }
};
exports.FruitHistoryController = FruitHistoryController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiCreatedResponse)({ type: fruit_history_entity_1.FruitHistoryEntity }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_fruit_history_dto_1.CreateFruitHistoryDto]),
    __metadata("design:returntype", void 0)
], FruitHistoryController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiCreatedResponse)({ type: fruit_history_entity_1.FruitHistoryEntity, isArray: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FruitHistoryController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOkResponse)({ type: fruit_history_entity_1.FruitHistoryEntity, isArray: true }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FruitHistoryController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('search'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiCreatedResponse)({ type: fruit_history_entity_1.FruitHistoryEntity, isArray: true, }),
    __param(0, (0, common_1.Query)('q')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FruitHistoryController.prototype, "findFruitHistoryByQuery", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiCreatedResponse)({ type: fruit_history_entity_1.FruitHistoryEntity }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_fruit_history_dto_1.UpdateFruitHistoryDto]),
    __metadata("design:returntype", void 0)
], FruitHistoryController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiCreatedResponse)({ type: fruit_history_entity_1.FruitHistoryEntity }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FruitHistoryController.prototype, "remove", null);
exports.FruitHistoryController = FruitHistoryController = __decorate([
    (0, common_1.Controller)('fruit-history'),
    (0, swagger_1.ApiTags)('fruit-history'),
    __metadata("design:paramtypes", [fruit_history_service_1.FruitHistoryService])
], FruitHistoryController);
//# sourceMappingURL=fruit-history.controller.js.map