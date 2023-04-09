import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IMoment } from '../@types/Moments';
import { enviroment } from 'src/enviroments/enviroment';
import { IResponse } from '../@types/Response';

@Injectable({
  providedIn: 'root',
})
export class MomentService {
  private baseApiUrl = enviroment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}/api/moments`;

  constructor(private http: HttpClient) {}

  getMoments(): Observable<IResponse<IMoment[]>> {
    return this.http.get<IResponse<IMoment[]>>(this.apiUrl);
  }

  getMoment(id: number): Observable<IResponse<IMoment>> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<IResponse<IMoment>>(url);
  }

  createMoment(formData: FormData): Observable<FormData> {
    return this.http.post<FormData>(this.apiUrl, formData);
  }

  removeMoment(id: number) {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }

  updateMoment(id: number, formData: FormData): Observable<FormData> {
    const url = `${this.apiUrl}/${id}`;

    return this.http.put<FormData>(url, formData);
  }
}
