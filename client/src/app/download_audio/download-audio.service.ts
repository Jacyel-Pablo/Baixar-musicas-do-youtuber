import { Component, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { saveAs } from 'file-saver';

@Injectable({
  providedIn: 'root'
})
export class DownloadAudioService {

  constructor(private httpClient: HttpClient) { }

  downloadaudio(url: string, filename: string): void {

    this.httpClient.get(`http://localhost:3000/baixar__audio?url=${url}`, { responseType: 'blob' }).subscribe((res) => {
      saveAs(res, filename)

      this.httpClient.delete(`http://localhost:3000/deleta__video__provisorio?url=${url}`, { responseType:"arraybuffer" }).subscribe(data => {
        console.log("")
      })
    })

  }
}
