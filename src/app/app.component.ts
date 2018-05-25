import { Component, OnInit, Renderer2, Inject } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  isCollapsed = true;

  constructor(private router: Router, @Inject(DOCUMENT) private document,
  private renderer: Renderer2) {}
  ngOnInit () {
    this.router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .subscribe(() => {
      const scrollingElement = this.document.scrollingElement || this.document.documentElement;
      this.renderer.setProperty(scrollingElement, 'scrollTop', 0);
    });
  }

  public mainPage () {
    this.router.navigate(['main']);
  }

  public questionsPage () {
    this.router.navigate(['questions']);
  }

  public allGames () {
    this.router.navigate(['games']);
  }

  public teamRaiting () {
    this.router.navigate(['raiting']);
  }
}
