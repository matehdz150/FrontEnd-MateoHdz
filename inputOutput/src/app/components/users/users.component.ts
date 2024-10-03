import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User } from '../../interfaces/user';
import { UserService } from '../../services/user.service';
import { UsersDetailComponent } from './users-detail/users-detail.component';
import { UsersListComponent } from './users-list/users-list.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [RouterOutlet, UsersDetailComponent,UsersListComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit {
  users: User[] =[];
  selectedUser!: User;

  constructor(private userService: UserService){
  }

  ngOnInit(): void {
      this.userService.getUsers().subscribe(data=>{
        this.users = data;
      })
  }

  onUserSelected(user: User): void {
    this.selectedUser = user;
  }
}
