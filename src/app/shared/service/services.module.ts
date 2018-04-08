import { NgModule, ModuleWithProviders } from '@angular/core';
import { QuoteService } from './quote.service';
import { DragDropService } from './drag-drop.service';

@NgModule()
export class ServicesModule {
    static forRoot() {
        return {
            ngModule: ServicesModule,
            providers: [
                DragDropService,
                QuoteService,
            ]
        };
    }
}
