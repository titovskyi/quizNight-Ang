import { Component, OnInit } from '@angular/core';
import { GamesService } from '../../services/games.service';
import { Router } from '@angular/router';
import { Game } from '../../class/game';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public games: Game[] = [];
  private errorMessege: any = '';

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor(private gameService: GamesService, private router: Router) {}

  ngOnInit(): void {
    this.getGames();

    this.galleryOptions = [
      {
        breakpoint: 800,
        width: '567px',
        height: '400px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      {
        breakpoint: 400,
        width: '320px',
        height: '250px',
        'thumbnails': false
      }
    ];
    this.galleryImages = [
      {
        small: '../../../assets/gallery_1.jpg',
        medium: '../../../assets/gallery_1.jpg',
        big: '../../../assets/gallery_1.jpg'
      },
      {
        small: '../../../assets/gallery_2.jpg',
        medium: '../../../assets/gallery_2.jpg',
        big: '../../../assets/gallery_2.jpg'
      },
      {
        small: '../../../assets/gallery_3.jpg',
        medium: '../../../assets/gallery_3.jpg',
        big: '../../../assets/gallery_3.jpg'
      },
      {
        small: '../../../assets/gallery_4.jpg',
        medium: '../../../assets/gallery_4.jpg',
        big: '../../../assets/gallery_4.jpg'
      },
      {
        small: '../../../assets/gallery_5.jpg',
        medium: '../../../assets/gallery_5.jpg',
        big: '../../../assets/gallery_5.jpg'
      },
      {
        small: '../../../assets/gallery_6.jpg',
        medium: '../../../assets/gallery_6.jpg',
        big: '../../../assets/gallery_6.jpg'
      },
      {
        small: '../../../assets/gallery_7.jpg',
        medium: '../../../assets/gallery_7.jpg',
        big: '../../../assets/gallery_7.jpg'
      }
    ];
  }

  public getGames() {
    this.gameService.getGames()
    .subscribe(
      games => this.games = games,
      error => this.errorMessege = <any>error
    );
  }

  public openPopup (event) {
    console.log(event.target.src);
    const popupImg = <HTMLImageElement>document.getElementById('new');
    const popup = document.getElementsByClassName('popup') as HTMLCollectionOf<HTMLElement>;
    popup[0].style.display = 'block';
    popupImg.src = event.target.src;
  }

  public closePopup () {
    const popup = document.getElementsByClassName('popup') as HTMLCollectionOf<HTMLElement>;
    popup[0].style.display = 'none';
  }

  public nextImg () {
    const gallery = document.getElementsByClassName('img_slide') as HTMLCollectionOf<HTMLImageElement>;
    const popupImg = <HTMLImageElement>document.getElementById('new');
    for ( let i = 0; gallery.length > i; i++ ) {
      if (gallery[i].src === popupImg.src) {
        popupImg.src = gallery[i + 1].src;
        break;
      }
    }
  }

  public prevImg () {
    const gallery = document.getElementsByClassName('img_slide') as HTMLCollectionOf<HTMLImageElement>;
    const popupImg = <HTMLImageElement>document.getElementById('new');
    const gallerySlide = document.getElementById('new');
    for ( let i = 0; gallery.length > i; i++ ) {
      if (gallery[i].src === popupImg.src) {
        popupImg.src = gallery[i - 1].src;
        break;
      }
    }
  }

  public allGames () {
    this.router.navigate(['games']);
  }

  public teamRaiting () {
    this.router.navigate(['raiting']);
  }

  public questionsPage () {
    this.router.navigate(['questions']);
  }

  public requestTeam () {
    this.router.navigate(['request']);
  }
}
