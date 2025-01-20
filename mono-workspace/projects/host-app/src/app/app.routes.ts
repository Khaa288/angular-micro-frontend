import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { loadRemoteModule } from '@angular-architects/module-federation';

const MFE_APP_URF = "http://localhost:4300/remoteEntry.js";

export const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", component: HomeComponent },
    {
        path: 'todo-list',
        loadComponent: () => 
          loadRemoteModule({
            type: 'module',
            remoteEntry: MFE_APP_URF,
            exposedModule: './TodoComponent'
          })
          .then(m => m.TodoComponent)
      },
];
