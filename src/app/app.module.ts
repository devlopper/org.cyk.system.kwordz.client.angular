import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataTablesModule } from 'angular-datatables';

import { HttpClientModule } from '@angular/common/http';
import { FileComponent } from './components/file/file.component';
import { ListComponent } from './components/file/list/list.component';
import { FilesListComponent } from './components/file/files-list/files-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FileComponent,
    ListComponent,
    FilesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
