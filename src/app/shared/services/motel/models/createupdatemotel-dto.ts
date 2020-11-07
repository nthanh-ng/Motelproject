import { EntityDto } from '@abp/ng.core'

export class CreateUpdateMotelDto extends EntityDto<string> {
  motelTitle: string
  area: 0
  street: string
  ward: string
  district: string
  description: string
  amenities: string
  curfew: string
  customerId: string
  status: 0

  constructor(initial: Partial<CreateUpdateMotelDto> = {}) {
    super(initial)
  }
}
