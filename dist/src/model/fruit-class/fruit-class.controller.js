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
exports.FruitClassController = void 0;
const common_1 = require("@nestjs/common");
const fruit_class_service_1 = require("./fruit-class.service");
const create_fruit_class_dto_1 = require("./dto/create-fruit-class.dto");
const update_fruit_class_dto_1 = require("./dto/update-fruit-class.dto");
const fruit_class_entity_1 = require("./entities/fruit-class.entity");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../../auth/jwt-auth.guard");
let FruitClassController = class FruitClassController {
    constructor(fruitClassService) {
        this.fruitClassService = fruitClassService;
    }
    create(createFruitClassDto) {
        return this.fruitClassService.create(createFruitClassDto);
    }
    findAll() {
        return this.fruitClassService.findAll();
    }
    async findOne(id) {
        const result = this.fruitClassService.findOne(id);
        if (!result) {
            throw new common_1.NotFoundException(`FruitClass with ${id} does not exist.`);
        }
        return result;
    }
    update(id, updateFruitClassDto) {
        return this.fruitClassService.update(id, updateFruitClassDto);
    }
    remove(id) {
        return this.fruitClassService.remove(id);
    }
};
exports.FruitClassController = FruitClassController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiCreatedResponse)({ type: fruit_class_entity_1.FruitClassEntity }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_fruit_class_dto_1.CreateFruitClassDto]),
    __metadata("design:returntype", void 0)
], FruitClassController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOkResponse)({ type: fruit_class_entity_1.FruitClassEntity, isArray: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FruitClassController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOkResponse)({ type: fruit_class_entity_1.FruitClassEntity }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FruitClassController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOkResponse)({ type: fruit_class_entity_1.FruitClassEntity }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_fruit_class_dto_1.UpdateFruitClassDto]),
    __metadata("design:returntype", void 0)
], FruitClassController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOkResponse)({ type: fruit_class_entity_1.FruitClassEntity }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FruitClassController.prototype, "remove", null);
exports.FruitClassController = FruitClassController = __decorate([
    (0, common_1.Controller)('fruit-class'),
    (0, swagger_1.ApiTags)('fruit-class'),
    __metadata("design:paramtypes", [fruit_class_service_1.FruitClassService])
], FruitClassController);
//# sourceMappingURL=fruit-class.controller.js.map