import { Component, Input } from '@angular/core';
import { User } from '../../../interfaces/user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users-detail.component.html',
  styleUrl: './users-detail.component.scss'
})
export class UsersDetailComponent {
  @Input() selectedUser!: User; 
}
