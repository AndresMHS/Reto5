import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'newstudent',
    pathMatch: 'full'
  },
  {
    path: 'newstudent',
    loadChildren: () => import('../pages/new-student/new-student.module').then( m => m.NewStudentPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
