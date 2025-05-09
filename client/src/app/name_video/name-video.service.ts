import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NameVideoService {

  constructor(private httpClient: HttpClient) { }

  nome: string = ''

  pegarNomeVideo(url: string) {
    return this.httpClient.get("http://localhost:3000/pegar__nome?url=" + url, { responseType: "text" })
  }
}
