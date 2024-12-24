import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule for two-way binding
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskService } from './task.service';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { TaskDetailsComponent } from './task-details/task-details.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    HomeComponent,
    TaskDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
