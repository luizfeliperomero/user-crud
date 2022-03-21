import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { CrudService } from '../../services';
import { User } from '../../models';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  users$: Observable<User[]>;

  constructor(private crudService: CrudService) {}

  ngOnInit(): void {
    this.users$ = this.crudService.getData();
  }
}
