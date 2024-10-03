import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../../interfaces/user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
})
export class UsersListComponent {
  @Input() users : User[] =[];
  @Output() userSelected = new EventEmitter<User>();

  selectedUserId: number | null = null;

  selectUser(user: User) : void{
    this.selectedUserId = user.id;
    this.userSelected.emit(user);
  }

  isActive(user: User): boolean {
    return this.selectedUserId === user.id;
  }

}
