import { NgModule } from '@angular/core';
import { LoadSvgResources } from './svg.util';
import './debug.util';
@NgModule({
    providers: [
        LoadSvgResources
    ],
    declarations: [
    ],
    exports: [
    ]
})
export class UtilsModule { }
