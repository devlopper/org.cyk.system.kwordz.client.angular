import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataTablesModule } from 'angular-datatables';

import { HttpClientModule } from '@angular/common/http';
import { FilesListComponent } from './components/file/files-list/files-list.component';
import { FileBytesReaderComponent } from './components/file/file-bytes-reader/file-bytes-reader.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    FilesListComponent,
    FileBytesReaderComponent
  ],
  imports: [
    BrowserModule,
    AngularMaterialModule,
    AppRoutingModule,
    DataTablesModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
