import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { enviroment } from 'src/enviroments/enviroment';

import { IComment } from '../@types/Comment';
import { IResponse } from '../@types/Response';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  private baseApiUrl = enviroment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}/api/moments`;

  constructor(private http: HttpClient) {}

  createComment(data: IComment): Observable<IResponse<IComment>> {
    const url = `${this.apiUrl}/${data.momentId}/comments`

    return this.http.post<IResponse<IComment>>(url, data);
  }
}
