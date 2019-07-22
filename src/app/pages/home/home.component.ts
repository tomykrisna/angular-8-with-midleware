import {Component, OnInit} from '@angular/core';
import {ApiService} from '@app/service/api.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ValidationService} from '@app/pages/share/validation.service';
import {DatePipe} from '@angular/common';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    validationForm: FormGroup;
    isLoading = false;
    number: any;
    firstName: any;
    lastName: any;
    birthDate: any = undefined;
    gender: any = undefined;
    email: any;
    changeNumber: boolean = false;
    isHide: boolean = false;

    constructor(
        private apiService: ApiService,
        public _fb: FormBuilder,
        public datepipe: DatePipe) {
        this.validationForm = _fb.group({
            'number': [null, [Validators.required, Validators.minLength(10), Validators.maxLength(15)]],
            'firstName': [null, [Validators.required]],
            'lastName': [null, [Validators.required]],
            'birthDate': [null],
            'gender': [null],
            'email': [null, [Validators.required, Validators.email]],
        });
    }

    ngOnInit() {
        // this.insertUser();
    }


    onChangeNumber(number: any) {
        console.log('number', number);
        if (number != undefined) {
            var splitted = number.split('', 3);
            if (splitted == '+,6,2') {
                this.changeNumber = true;
                console.log('spliter', splitted.toString());
            } else {
                this.changeNumber = false;
                console.log('spliter failed', splitted.toString());

            }

        }

    }


    submit() {
        this.isLoading = true;

        setTimeout(() => {
            this.isLoading = false;
        }, 5000);
        console.log('submit');

    }

    insertUser() {
        this.isLoading = true;
        let data = {
            number: this.number,
            firstName: this.firstName,
            lastName: this.lastName,
            birthDate: this.datepipe.transform(this.birthDate, 'yyyy-MM-dd'),
            gender: this.gender,
            email: this.email
        };
        console.log('data', data);
        this.apiService.insertUser(data).subscribe(result => {
            console.log('result insert data', result);
            this.disableInput();
            this.isHide = true;
            setTimeout(() => {
                this.isLoading = false;
            }, 3000);
        }, err => {
            this.isLoading = false;
            console.log('insert error', err);
        });
    }


    disableInput() {
        //reset value
        this.validationForm.get('number').reset();
        this.validationForm.get('firstName').reset();
        this.validationForm.get('lastName').reset();
        this.validationForm.get('birthDate').reset();
        this.validationForm.get('gender').reset();
        this.validationForm.get('email').reset();

        //disable form
        this.validationForm.get('number').disable();
        this.validationForm.get('firstName').disable();
        this.validationForm.get('lastName').disable();
        this.validationForm.get('birthDate').disable();
        this.validationForm.get('gender').disable();
        this.validationForm.get('email').disable();
    }

    login() {
    }


}
