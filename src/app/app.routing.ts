import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'project',
        loadChildren: 'app/project/project.module#ProjectModule', // Lazy load admin module
        data: { preload: true }
    },
    {
        path: 'task',
        loadChildren: 'app/task/task.module#TaskModule', // Lazy load admin module
        data: { preload: true }
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],

    exports: [
        RouterModule
    ]
})

export class AppRoutes { }
