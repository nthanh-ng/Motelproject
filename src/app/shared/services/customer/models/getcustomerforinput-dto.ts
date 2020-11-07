import { PagedAndSortedResultRequestDto } from '@abp/ng.core';

export class GetCustomerForInputDto extends PagedAndSortedResultRequestDto { 
    filter: string;
    id: string;
    sorting: string;
    skipCount: number;
    maxResultCount: number;

   constructor(initial: Partial<GetCustomerForInputDto> = {}) {
    super(initial)
    }
}