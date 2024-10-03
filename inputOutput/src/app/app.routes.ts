import { Routes } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import path from 'path';

export const routes: Routes = [{path:'', redirectTo:'Users', pathMatch:'full'},
    {path: 'Users', component:UsersComponent,}
];
