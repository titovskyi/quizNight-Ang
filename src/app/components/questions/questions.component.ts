import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { AccordionConfig } from 'ngx-bootstrap/accordion';

export function getAccordionConfig(): AccordionConfig {
  return Object.assign(new AccordionConfig(), { closeOthers: true });
}

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss'],
  providers: [{ provide: AccordionConfig, useFactory: getAccordionConfig }],
  encapsulation: ViewEncapsulation.None
})
export class QuestionsComponent implements OnInit {
  list: any;
  selected: any;
  isOpenFirst = true;
  isOpenSecond = false;
  isOpenThird = false;
  isOpenFourth = false;
  isOpenFifth = false;
  asideLi;
  activeSvg;

  constructor(private router: Router) {}

  onChange() {
  }

  select(item) {
      this.selected = item;
  }

  isActive(item) {
    console.log(this.selected);
      return this.selected === item;
  }

  toggleFirst() {
    this.isOpenFirst = !this.isOpenFirst;
    this.isOpenSecond = false;
    this.isOpenThird = false;
    this.isOpenFourth = false;
    this.isOpenFifth = false;
    // this.asideLi = document.getElementsByClassName('aside_li');
    // for (let i = 0; this.asideLi.length > i; i++) {
    //   this.asideLi[i].classList.remove('active_list');
    //   this.asideLi[0].classList.add('active_list');
    // }
  }

  toggleSecond() {
    this.isOpenFirst = false;
    this.isOpenSecond = !this.isOpenSecond;
    this.isOpenThird = false;
    this.isOpenFourth = false;
    this.isOpenFifth = false;
    // this.asideLi = document.getElementsByClassName('aside_li');
    // for (let i = 0; this.asideLi.length > i; i++) {
    //   this.asideLi[i].classList.remove('active_list');
    //   this.asideLi[1].classList.add('active_list');
    // }
  }

  toggleThird() {
    this.isOpenFirst = false;
    this.isOpenSecond = false;
    this.isOpenThird = !this.isOpenFirst;
    this.isOpenFourth = false;
    this.isOpenFifth = false;
    // this.asideLi = document.getElementsByClassName('aside_li');
    // for (let i = 0; this.asideLi.length > i; i++) {
    //   this.asideLi[i].classList.remove('active_list');
    //   this.asideLi[2].classList.add('active_list');
    // }
  }

  toggleFourth() {
    this.isOpenFirst = false;
    this.isOpenSecond = false;
    this.isOpenThird = false;
    this.isOpenFourth = !this.isOpenFourth;
    this.isOpenFifth = false;
    // this.asideLi = document.getElementsByClassName('aside_li');
    // for (let i = 0; this.asideLi.length > i; i++) {
    //   this.asideLi[i].classList.remove('active_list');
    //   this.asideLi[3].classList.add('active_list');
    // }
  }

  toggleFifth() {
    this.isOpenFirst = false;
    this.isOpenSecond = false;
    this.isOpenThird = false;
    this.isOpenFourth = false;
    this.isOpenFifth = !this.isOpenFifth;
    // this.asideLi = document.getElementsByClassName('aside_li');
    // for (let i = 0; this.asideLi.length > i; i++) {
    //   this.asideLi[i].classList.remove('active_list');
    //   this.asideLi[4].classList.add('active_list');
    // }
  }
  ngOnInit() {
  }
  public allGames() {
    this.router.navigate(['games']);
  }
}
