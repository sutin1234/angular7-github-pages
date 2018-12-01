import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { IndexComponent } from './components/index/index.component';
import { FilenotfoundComponent } from './components/filenotfound/filenotfound.component';


const routes: Routes = [
  { path: 'index', component: IndexComponent }, // กรณีไม่ใส่ URL อะไรมาเลย
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: 'index', pathMatch: 'full' }, // กรณีใส่ URL มาแบบมั่วๆ ให้ return ไปหน้า index
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
