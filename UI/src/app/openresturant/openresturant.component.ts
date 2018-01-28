import { Component, OnInit, Input }   from '@angular/core';

import { FormData }                   from '../data/formData.model';
import { ResturantDetails }             from '../data/formData.model';
import { FormDataService }            from '../data/formData.service';



@Component ({
    selector:     'wizard-openresturant'
    ,templateUrl: './openresturant.component.html'
})

export class OpenresturantComponent implements OnInit {
    @Input() formData: FormData;
    isFormValid: boolean = false;
    resturantdetails: ResturantDetails;
    form: any;

    constructor(private formDataService: FormDataService) {
    }

    ngOnInit() {
        //this.formData = this.formDataService.getFormData();
        this.resturantdetails = this.formDataService.getResturantDetails();
        this.isFormValid = this.formDataService.isFormValid();
        console.log('Result feature loaded!');
    }

    submit() {
        this.formData = this.formDataService.resetFormData();
        this.isFormValid = false;
    }
}


