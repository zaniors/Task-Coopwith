import { Routes, RouterModule } from '@angular/router';
import { TaskHomeComponent } from './home/home.component';

const routes: Routes = [
    {
        path: '',
        children: [
            { path: '', redirectTo: 'list' },
            { path: 'list', component: TaskHomeComponent },
        ]
    }
];

export const TaskRoutes = RouterModule.forChild(routes);
