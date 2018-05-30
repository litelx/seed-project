import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html'
})
export class SigninComponent {
    signinForm: FormGroup 

    onSubmit() {
        console.log(this.signinForm)
        this.signinForm.reset()        
    }
    
    ngOnInit() {
        this.signinForm = new FormGroup({
            email: new FormControl(null, [
                Validators.required,
                Validators.pattern('/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/')
            ]),
            password: new FormControl(null, Validators.required),
        })
    }
}