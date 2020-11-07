import { Injectable } from '@angular/core'
import { RestService, PagedResultDto } from '@abp/ng.core'
import { Observable } from 'rxjs'
import {
  GetCustomerDto,
  CreateUpdateCustomerDto,
  CustomerDto,
  GetCustomerForEditDto,
  GetCustomerForInputDto,
} from '../models'

@Injectable({ providedIn: 'root' })
export class CustomerService {
  apiName: 'Default'

  constructor(private restService: RestService) {}

  getById(id: string): Observable<GetCustomerForEditDto> {
    return this.restService.request(
      { url: `/api/app/customer/${id}`, method: 'GET' },
      { apiName: this.apiName },
    )
  }

  deleteById(id: string): Observable<void> {
    return this.restService.request(
      { url: `/api/app/customer/${id}`, method: 'DELETE' },
      { apiName: this.apiName },
    )
  }

  saveByInput(body: CreateUpdateCustomerDto): Observable<string> {
    return this.restService.request(
      { url: `/api/app/customer/save`, body, method: 'POST' },
      { apiName: this.apiName },
    )
  }

  getListPagedByInput(
    params = {} as GetCustomerForInputDto,
  ): Observable<PagedResultDto<GetCustomerDto>> {
    return this.restService.request(
      { url: `/api/app/customer/paged`, params, method: 'GET' },
      { apiName: this.apiName },
    )
  }

  getAll(): Observable<GetCustomerDto[]> {
    return this.restService.request(
      { url: `/api/app/customer`, method: 'GET' },
      { apiName: this.apiName },
    )
  }

  getListTeacher(id: string): Observable<GetCustomerDto[]> {
    return this.restService.request(
      { url: `/api/app/customer/getCustomerRegisted/${id}`, method: 'GET' },
      { apiName: this.apiName },
    )
  }
}
