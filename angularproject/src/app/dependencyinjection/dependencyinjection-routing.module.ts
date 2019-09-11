import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DependencyinjectionComponent } from './dependencyinjection/dependencyinjection.component';
import { from } from 'rxjs';
const routes: Routes = [
  {
    path: '',
    component: DependencyinjectionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DependencyinjectionRoutingModule { }
