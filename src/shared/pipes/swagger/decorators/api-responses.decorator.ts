import { applyDecorators } from '@nestjs/common';
import { ApiResponse, ApiResponseOptions } from '@nestjs/swagger';

export function ApiResponses(apiResponses: ApiResponseOptions[]) {
  return applyDecorators(
    ...apiResponses.map((apiResponse) => ApiResponse(apiResponse)),
  );
}
