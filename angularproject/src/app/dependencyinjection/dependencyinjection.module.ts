import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DependencyinjectionRoutingModule } from './dependencyinjection-routing.module';
import { DependencyinjectionComponent } from './dependencyinjection/dependencyinjection.component';
import { FormsModule } from '@angular/forms'
import { from } from 'rxjs';
@NgModule({
  declarations: [DependencyinjectionComponent],
  imports: [
    CommonModule,
    DependencyinjectionRoutingModule,
    FormsModule
  ]
})
export class DependencyinjectionModule { }
