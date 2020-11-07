import { PagedAndSortedResultRequestDto } from '@abp/ng.core';

export class GetStudentForInputDto extends PagedAndSortedResultRequestDto { 
    filter: string;
    id: string;
    sorting: string;
    skipCount: number;
    maxResultCount: number;

   constructor(initial: Partial<GetStudentForInputDto> = {}) {
    super(initial)
    }
}