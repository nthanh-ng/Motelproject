import { CreateUpdateCustomerDto } from './createupdatecustomer-dto';

export class GetCustomerForEditDto extends CreateUpdateCustomerDto{
    constructor(initial: Partial<GetCustomerForEditDto> = {}) {
        super(initial);
    }
}