import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {StyleDirective} from './directives/style.directive';
import { Style2Directive } from './directives/style2.directive';
import { IfnotDirective } from './directives/ifnot.directive';
import {MultByPipes} from './pipes/mult-by.pipes';
import { ExMarksPipe } from './pipes/ex-marks.pipe';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    StyleDirective,
    Style2Directive,
    IfnotDirective,
    MultByPipes,
    ExMarksPipe,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
