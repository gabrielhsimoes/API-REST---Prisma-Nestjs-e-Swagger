"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FruitValueModule = void 0;
const common_1 = require("@nestjs/common");
const fruit_value_service_1 = require("./fruit-value.service");
const fruit_value_controller_1 = require("./fruit-value.controller");
const prisma_module_1 = require("../../prisma/prisma.module");
let FruitValueModule = class FruitValueModule {
};
exports.FruitValueModule = FruitValueModule;
exports.FruitValueModule = FruitValueModule = __decorate([
    (0, common_1.Module)({
        controllers: [fruit_value_controller_1.FruitValueController],
        providers: [fruit_value_service_1.FruitValueService],
        imports: [prisma_module_1.PrismaModule]
    })
], FruitValueModule);
//# sourceMappingURL=fruit-value.module.js.map