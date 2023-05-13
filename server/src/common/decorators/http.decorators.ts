import { Param, ParseUUIDPipe } from '@nestjs/common';
import type { PipeTransform } from '@nestjs/common';
import type { Type } from '@nestjs/common/interfaces';

export function UUIDParam(
  property: string,
  ...pipes: Array<Type<PipeTransform> | PipeTransform>
): ParameterDecorator {
  return Param(property, new ParseUUIDPipe({ version: '4' }), ...pipes);
}
