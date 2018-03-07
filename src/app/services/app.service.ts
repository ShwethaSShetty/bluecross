import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AppService {
  constructor(private http: HttpClient) { }

  configUrl = 'assets/data.json';

authenticate() {
  return this.http.get(this.configUrl);
}

}