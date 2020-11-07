import { CreateUpdateMotelDto } from './createupdatemotel-dto';

export class GetMotelForEditDto extends CreateUpdateMotelDto{
    constructor(initial: Partial<GetMotelForEditDto> = {}) {
        super(initial);
    }
}