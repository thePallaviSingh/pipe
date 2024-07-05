import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';

import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { AppRoutingModule } from './app-routing.module';
import { MultiplicationPipe } from './multiplication.pipe';
import { SubstractionPipe } from './substraction.pipe';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormlyModule,
    FormlyBootstrapModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    MultiplicationPipe,
    SubstractionPipe,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
