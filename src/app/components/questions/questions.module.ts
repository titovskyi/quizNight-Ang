import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BsDropdownModule, TabsModule, AccordionModule, ModalModule } from 'ngx-bootstrap';
import { QuestionsComponent } from './questions.component';
import { QuestionsRoutingModule } from './questions-routing.module';

@NgModule({
    imports: [
        CommonModule,
        QuestionsRoutingModule,
        BsDropdownModule.forRoot(),
        AccordionModule.forRoot(),
        TabsModule.forRoot(),
        ModalModule.forRoot()
    ],
    declarations: [
      QuestionsComponent
    ],
    exports: [
      QuestionsComponent
    ]
  })

export class QuestionsModule { }
