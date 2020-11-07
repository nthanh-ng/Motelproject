import { EntityDto } from '@abp/ng.core';

export class CustomerDto extends EntityDto<string>{
    
   name:  string;
   phoneNumber: string;
   birthday :  Date;
   address :  string;
   email :  string ;
   roles: 0;
    
    constructor(initial: Partial<CustomerDto> = {}) {
        super(initial);
    }
}