import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FullScheduleComponent } from './full-schedule/full-schedule.component';
import{MatButtonModule} from '@angular/material/button'
import{MatIconModule} from '@angular/material/icon'
import{MatToolbarModule} from '@angular/material/toolbar'
import{MatCardModule} from '@angular/material/card'
@NgModule({
  declarations: [
    AppComponent,
    SearchBoxComponent,
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
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
