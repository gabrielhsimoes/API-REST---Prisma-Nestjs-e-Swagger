"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const prisma_module_1 = require("./prisma/prisma.module");
const fruit_class_module_1 = require("./model/fruit-class/fruit-class.module");
const user_module_1 = require("./model/user/user.module");
const profile_module_1 = require("./model/profile/profile.module");
const auth_module_1 = require("./auth/auth.module");
const fruit_history_module_1 = require("./model/fruit-history/fruit-history.module");
const fruit_value_module_1 = require("./model/fruit-value/fruit-value.module");
const fruit_description_module_1 = require("./model/fruit-description/fruit-description.module");
const fruit_training_module_1 = require("./model/fruit-training/fruit-training.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule, fruit_class_module_1.FruitClassModule, user_module_1.UserModule, profile_module_1.ProfileModule, auth_module_1.AuthModule, fruit_history_module_1.FruitHistoryModule, fruit_value_module_1.FruitValueModule, fruit_description_module_1.FruitDescriptionModule, fruit_training_module_1.FruitTrainingModule],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map