import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { AppRoutingModule } from './app-routing.module';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { AppComponent } from './app.component';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NzButtonModule,
    NzFormModule,
    NzGridModule,
    NzCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    NzInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
