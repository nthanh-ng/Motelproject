import { PagedAndSortedResultRequestDto } from '@abp/ng.core';

export class GetMotelForInputDto extends PagedAndSortedResultRequestDto { 
    filter: string;
    id: string;
    sorting: string;
    skipCount: number;
    maxResultCount: number;

   constructor(initial: Partial<GetMotelForInputDto> = {}) {
    super(initial)
    }
}