import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { DxDataGridModule } from 'devextreme-angular';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import {
  AgmCoreModule
} from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DxAutocompleteModule, 
        DxTemplateModule, 
        DxTextBoxModule,
        DxNumberBoxModule,
        DxButtonModule } from 'devextreme-angular';



@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    
    DxDataGridModule,
    DxAutocompleteModule, 
    DxTemplateModule,
    DxTextBoxModule,
    DxNumberBoxModule,
    DxButtonModule,
    AgmCoreModule.forRoot({
      apiKey: ''
    })
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
