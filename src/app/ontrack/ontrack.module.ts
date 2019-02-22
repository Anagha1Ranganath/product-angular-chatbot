
import { HttpClient } from '@angular/common/http';


import { SearchComponent } from './components/search/search.component';
import { HomeComponent } from './components/home/home.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../../environments/environment';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';



// import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule, MatIconModule, MatLabel, MatDialogModule, MatDialogRef, MAT_DIALOG_DATA, MatRadioModule } from '@angular/material';
import { OntrackMaterialModule } from './ontrack.material.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CardComponent } from './components/card/card.component';

import { RegistrationcompComponent } from './components/registrationcomp/registrationcomp.component';
import { DailogComponent } from './components/dailog/dailog.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { LoginModule } from './components/login/login.module';
// import { MessageListComponent, MessageFormComponent, MessageItemComponent } from '@app/components';
import { DialogflowService } from './services';

import { HttpClientModule } from '@angular/common/http';
import { MessageFormComponent, MessageItemComponent, MessageListComponent } from './components';



 @NgModule({
  // tslint:disable-next-line:max-line-length
  declarations: [HomeComponent, CardComponent, SearchComponent, RegistrationcompComponent, DailogComponent, MessageFormComponent, MessageItemComponent, MessageListComponent],


  imports: [
  CommonModule,
  MatCardModule,
  OntrackMaterialModule,
  BrowserAnimationsModule,
  FlexLayoutModule,
  ReactiveFormsModule,
  FormsModule,
  LoginModule,
  MatProgressSpinnerModule, MatRadioModule,
  HttpClientModule

  ],

  providers: [DialogflowService, { provide: MatDialogModule, useValue: {} },
    { provide: MatIconModule, useValue: [] },
    {
       provide: MatLabel, useValue: {}
    },
    { provide: MatDialogRef, useValue: {} },
    {
      provide: MAT_DIALOG_DATA, useValue: {}

    }
     ],
    entryComponents: [
      DailogComponent,
    ],


  // tslint:disable-next-line:max-line-length
  exports: [HomeComponent, CardComponent, SearchComponent, DailogComponent, RegistrationcompComponent ]

})
export class OntrackModule { }
