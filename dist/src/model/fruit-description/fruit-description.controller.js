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
exports.FruitDescriptionController = void 0;
const common_1 = require("@nestjs/common");
const fruit_description_service_1 = require("./fruit-description.service");
const create_fruit_description_dto_1 = require("./dto/create-fruit-description.dto");
const update_fruit_description_dto_1 = require("./dto/update-fruit-description.dto");
const swagger_1 = require("@nestjs/swagger");
const fruit_description_entity_1 = require("./entities/fruit-description.entity");
const jwt_auth_guard_1 = require("../../auth/jwt-auth.guard");
let FruitDescriptionController = class FruitDescriptionController {
    constructor(fruitDescriptionService) {
        this.fruitDescriptionService = fruitDescriptionService;
    }
    create(createFruitDescriptionDto) {
        return this.fruitDescriptionService.create(createFruitDescriptionDto);
    }
    findAll() {
        return this.fruitDescriptionService.findAll();
    }
    async findOne(id) {
        const result = this.fruitDescriptionService.findOne(id);
        if (!result) {
            throw new common_1.NotFoundException(`FruitClass with ${id} does not exist.`);
        }
        return result;
    }
    update(id, updateFruitDescriptionDto) {
        return this.fruitDescriptionService.update(id, updateFruitDescriptionDto);
    }
    remove(id) {
        return this.fruitDescriptionService.remove(id);
    }
};
exports.FruitDescriptionController = FruitDescriptionController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Criado com sucesso.' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Campos obrigatórios precisam ser preenchidos.' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Dados foram inseridos incorretamente ou não existe relacionamento.' }),
    (0, swagger_1.ApiCreatedResponse)({ type: fruit_description_entity_1.FruitDescriptionEntity }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_fruit_description_dto_1.CreateFruitDescriptionDto]),
    __metadata("design:returntype", void 0)
], FruitDescriptionController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOkResponse)({ type: fruit_description_entity_1.FruitDescriptionEntity, isArray: true }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FruitDescriptionController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOkResponse)({ type: fruit_description_entity_1.FruitDescriptionEntity }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FruitDescriptionController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOkResponse)({ type: fruit_description_entity_1.FruitDescriptionEntity }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_fruit_description_dto_1.UpdateFruitDescriptionDto]),
    __metadata("design:returntype", void 0)
], FruitDescriptionController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOkResponse)({ type: fruit_description_entity_1.FruitDescriptionEntity }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FruitDescriptionController.prototype, "remove", null);
exports.FruitDescriptionController = FruitDescriptionController = __decorate([
    (0, common_1.Controller)('fruit-description'),
    (0, swagger_1.ApiTags)('fruit-description'),
    __metadata("design:paramtypes", [fruit_description_service_1.FruitDescriptionService])
], FruitDescriptionController);
//# sourceMappingURL=fruit-description.controller.js.map