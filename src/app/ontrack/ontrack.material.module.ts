import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule, MatGridListModule, MatNativeDateModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material';
import { FormsModule, FormGroup } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';

@NgModule({
    declarations: [],
    imports: [
    MatCardModule,
    CommonModule,
      MatButtonModule,
      MatIconModule,
      MatToolbarModule,
      MatMenuModule, MatFormFieldModule,
       MatInputModule, MatTooltipModule, MatSnackBarModule, MatDialogModule, MatSidenavModule, MatListModule,
       MatGridListModule,
       MatInputModule,
       MatTableModule,
       FormsModule,
       MatDatepickerModule, MatNativeDateModule
      ] ,
      exports: [
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        MatToolbarModule,
        MatMenuModule, MatFormFieldModule,
        MatTableModule,
        MatInputModule, MatTooltipModule, MatSnackBarModule, MatDialogModule, MatSidenavModule, MatListModule,
          MatGridListModule,
          MatInputModule,
          FormsModule,
          MatDatepickerModule, MatNativeDateModule

         ]

   })
  export class OntrackMaterialModule { }
