import { Injectable } from '@angular/core'
import { RestService, PagedResultDto } from '@abp/ng.core'
import { Observable } from 'rxjs'
import {
  GetMotelDto,
  CreateUpdateMotelDto,
  MotelDto,
  GetMotelForEditDto,
  GetMotelForInputDto,
} from '../models'

@Injectable({ providedIn: 'root' })
export class MotelService {
  apiName: 'Default'

  constructor(private restService: RestService) {}

  getById(id: string): Observable<GetMotelForEditDto> {
    return this.restService.request(
      { url: `/api/app/motel/${id}`, method: 'GET' },
      { apiName: this.apiName },
    )
  }

  deleteById(id: string): Observable<void> {
    return this.restService.request(
      { url: `/api/app/motel/${id}`, method: 'DELETE' },
      { apiName: this.apiName },
    )
  }

  saveByInput(body: CreateUpdateMotelDto): Observable<string> {
    return this.restService.request(
      { url: `/api/app/motel/save`, body, method: 'POST' },
      { apiName: this.apiName },
    )
  }

  getListPagedByInput(
    params = {} as GetMotelForInputDto,
  ): Observable<PagedResultDto<GetMotelDto>> {
    return this.restService.request(
      { url: `/api/app/motel/paged`, params, method: 'GET' },
      { apiName: this.apiName },
    )
  }

  getAll(): Observable<GetMotelDto[]> {
    return this.restService.request(
      { url: `/api/app/motel`, method: 'GET' },
      { apiName: this.apiName },
    )
  }

  getListTeacher(id: string): Observable<GetMotelDto[]> {
    return this.restService.request(
      { url: `/api/app/motel/getMotelRegisted/${id}`, method: 'GET' },
      { apiName: this.apiName },
    )
  }
}
