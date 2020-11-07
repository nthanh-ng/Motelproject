import { CreateUpdateStudentDto } from './createupdatestudent-dto';

export class GetStudentForEditDto extends CreateUpdateStudentDto{
    constructor(initial: Partial<GetStudentForEditDto> = {}) {
        super(initial);
    }
}