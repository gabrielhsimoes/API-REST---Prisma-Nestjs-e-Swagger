"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateFruitClassDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_fruit_class_dto_1 = require("./create-fruit-class.dto");
class UpdateFruitClassDto extends (0, swagger_1.PartialType)(create_fruit_class_dto_1.CreateFruitClassDto) {
}
exports.UpdateFruitClassDto = UpdateFruitClassDto;
//# sourceMappingURL=update-fruit-class.dto.js.map