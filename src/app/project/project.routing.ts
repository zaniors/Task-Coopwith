import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';

const routes: Routes = [
    {
        path: '',
        children: [
            { path: '', redirectTo: 'list' },
            { path: 'list', component: ListComponent },
        ]
    }
];

export const ProjectRoutes = RouterModule.forChild(routes);
