"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateFruitValueDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_fruit_value_dto_1 = require("./create-fruit-value.dto");
class UpdateFruitValueDto extends (0, swagger_1.PartialType)(create_fruit_value_dto_1.CreateFruitValueDto) {
}
exports.UpdateFruitValueDto = UpdateFruitValueDto;
//# sourceMappingURL=update-fruit-value.dto.js.map