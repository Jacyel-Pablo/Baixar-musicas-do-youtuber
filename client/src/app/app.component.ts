import { Component, inject, Input, Output } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DownloadAudioService } from './download_audio/download-audio.service';
import { NameVideoService } from './name_video/name-video.service';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

  @Output() url: string = '';

  constructor(
    private downloadaudioService: DownloadAudioService, 
    private nameVideoService: NameVideoService,
  ) {}
  
  baixar_audio(url: string) {
    this.nameVideoService.pegarNomeVideo(url).subscribe(async nome => {
      this.downloadaudioService.downloadaudio(url, `${nome}.m4a`)
      
    })
  }
}

