import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { CrudService } from './services';
import { UserListComponent } from './components';

@NgModule({
  declarations: [UserListComponent],
  imports: [CommonModule, HttpClientModule],
  providers: [CrudService],
})
export class CrudModule {}
