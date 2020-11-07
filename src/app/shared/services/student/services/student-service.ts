import { Injectable } from '@angular/core'
import { RestService, PagedResultDto } from '@abp/ng.core'
import { Observable } from 'rxjs'
import {
  GetStudentDto,
  CreateUpdateStudentDto,
  StudentDto,
  GetStudentForEditDto,
  GetStudentForInputDto,
} from '../models'

@Injectable({ providedIn: 'root' })
export class StudentService {
  apiName: 'Default'

  constructor(private restService: RestService) {}

  getById(id: string): Observable<GetStudentForEditDto> {
    return this.restService.request(
      { url: `/api/app/student/${id}`, method: 'GET' },
      { apiName: this.apiName },
    )
  }

  deleteById(id: string): Observable<void> {
    return this.restService.request(
      { url: `/api/app/student/${id}`, method: 'DELETE' },
      { apiName: this.apiName },
    )
  }

  saveByInput(body: CreateUpdateStudentDto): Observable<string> {
    return this.restService.request(
      { url: `/api/app/student/save`, body, method: 'POST' },
      { apiName: this.apiName },
    )
  }

  getListPagedByInput(
    params = {} as GetStudentForInputDto,
  ): Observable<PagedResultDto<GetStudentDto>> {
    return this.restService.request(
      { url: `/api/app/student/paged`, params, method: 'GET' },
      { apiName: this.apiName },
    )
  }

  getAll(): Observable<GetStudentDto[]> {
    return this.restService.request(
      { url: `/api/app/student`, method: 'GET' },
      { apiName: this.apiName },
    )
  }

  getListTeacher(id: string): Observable<GetStudentDto[]> {
    return this.restService.request(
      { url: `/api/app/student/getStudentRegisted/${id}`, method: 'GET' },
      { apiName: this.apiName },
    )
  }
}
