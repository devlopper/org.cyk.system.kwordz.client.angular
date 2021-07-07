import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilesListComponent } from './components/file/files-list/files-list.component';
import { FileBytesReaderComponent } from './components/file/file-bytes-reader/file-bytes-reader.component';

const routes: Routes = [
  {path: '/', redirectTo: '/list-files', pathMatch: 'full' },

  {path: '123', redirectTo: '/'},

  {path: 'list-files', component: FilesListComponent},

  {path: 'read-file-bytes/:id', component: FileBytesReaderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
