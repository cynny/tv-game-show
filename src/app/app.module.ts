import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { CurrentShowComponent } from './current-show/current-show.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { ShowEpisodesComponent } from './show-episodes/show-episodes.component';
import { FullScheduleComponent } from './full-schedule/full-schedule.component';
@NgModule({
  declarations: [
    AppComponent,
    SearchBoxComponent,
    CurrentShowComponent,
    ShowEpisodesComponent,
    FullScheduleComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
