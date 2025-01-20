import { Routes } from '@angular/router';
import { TodoComponent } from './todo/todo.component';

export const routes: Routes = [
    { path: '', redirectTo: '/todo-list', pathMatch: 'full' },
    { path: 'todo-list', component: TodoComponent }
];
