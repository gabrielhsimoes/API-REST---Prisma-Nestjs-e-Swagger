"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateFruitDescriptionDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_fruit_description_dto_1 = require("./create-fruit-description.dto");
class UpdateFruitDescriptionDto extends (0, swagger_1.PartialType)(create_fruit_description_dto_1.CreateFruitDescriptionDto) {
}
exports.UpdateFruitDescriptionDto = UpdateFruitDescriptionDto;
//# sourceMappingURL=update-fruit-description.dto.js.map