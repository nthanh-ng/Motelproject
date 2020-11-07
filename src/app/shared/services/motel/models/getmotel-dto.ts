import { MotelDto } from './motel-dto';

export class GetMotelDto extends MotelDto{
   
    constructor(initial: Partial<GetMotelDto> = {}) {
    super(initial);
    }
}