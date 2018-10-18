import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatCheckboxModule,MatToolbarModule, MatExpansionModule, MatInputModule, MatSelectModule, MatOptionModule, MatListModule, MatIconModule, MatSnackBarModule, MatCardModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatListModule, 
    MatIconModule,
    MatSnackBarModule,
    MatCardModule
  ],
  exports:[
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatListModule, 
    MatIconModule,
    MatSnackBarModule,
    MatCardModule  
  ],
  declarations: []
})
export class MaterialModule { }
