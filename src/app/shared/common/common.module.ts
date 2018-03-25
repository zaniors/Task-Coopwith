import { NgModule } from "@angular/core";
import { MatToolbarModule, MatIconModule, MatButtonModule, MatCardModule, MatSidenavModule, MatInputModule } from "@angular/material";
import { CommonModule } from "@angular/common";

@NgModule({
    imports: [
        CommonModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatCardModule,
        MatSidenavModule,
        MatInputModule
    ],
    declarations: [
    ],
    exports: [
        CommonModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatCardModule,
        MatSidenavModule,
        MatInputModule
    ]
})
export class AppCommonModule {
}
