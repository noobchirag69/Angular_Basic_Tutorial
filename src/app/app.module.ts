import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { FormsModule } from '@angular/forms';
import { ApprovalComponent } from './approval/approval.component';
import { AnimeComponent } from './anime/anime.component';
import { GradeComponent } from './grade/grade.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';

@NgModule({
  declarations: [AppComponent, ButtonComponent, ApprovalComponent, AnimeComponent, GradeComponent, ParentComponent, ChildComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
