import { EntityDto } from '@abp/ng.core';

export class CreateUpdateStudentDto extends EntityDto<string>{

   name : string ;
   address : string ;
   birthday: Date;
   code : string ;
   phoneNumber : string ;
   email : string ;
  
    constructor(initial: Partial<CreateUpdateStudentDto> = {}) {
    super(initial);
    }
}