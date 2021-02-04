import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test/test.component';
import { TestScreenComponent } from './test-screen/test-screen.component';

const routes: Routes = [
  {path: 'test-1' ,component : TestComponent},
  {path: 'test-screen' ,component : TestScreenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
