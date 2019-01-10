import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilelistComponent } from './filelist/filelist.component';

const routes: Routes = [
    {
      path: 'products',
      component: FilelistComponent,
      data: { title: 'Product List' }
    }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
