import { NgModule } from "@angular/core";
import { MatToolbarModule, MatIconModule, MatButtonModule, MatCardModule, MatSidenavModule, MatInputModule, MatListModule, MatGridListModule, MatDialogModule, MatAutocompleteModule, MatMenuModule } from "@angular/material";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatCardModule,
        MatSidenavModule,
        MatInputModule,
        MatListModule,
        MatGridListModule,
        MatDialogModule,
        MatAutocompleteModule,
        MatMenuModule,
    ],
    declarations: [
    ],
    exports: [
        CommonModule,
        FormsModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatCardModule,
        MatSidenavModule,
        MatInputModule,
        MatListModule,
        MatGridListModule,
        MatDialogModule,
        MatAutocompleteModule,
        MatMenuModule,

    ]
})
export class AppCommonModule {
}
