import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'ng-formly';
  form: FormGroup;
  user: any = {};
 

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      name: new FormControl(['Zama'])
    });
  }

  submit() {
    alert(this.form.value.name);
  }
}
