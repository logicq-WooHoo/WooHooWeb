import { Component, OnInit }   from '@angular/core';
import { Router }              from '@angular/router';

import { SetupDetails }             from '../data/formData.model';
import { FormDataService }     from '../data/formData.service';

@Component ({
    selector:     'wizard-setup'
    ,templateUrl: './setupresturant.component.html'
})

export class SetupResturantComponent implements OnInit {
    setupdetails: SetupDetails;
    form: any;
    
    constructor(private router: Router, private formDataService: FormDataService) {
    }

    ngOnInit() {
        this.setupdetails = this.formDataService.getSetupDetails();
        console.log('Resturant Setup Details loaded!');
    }

    save(form: any): boolean {
        if (!form.valid) {
            return false;
        }
            
        this.formDataService.setSetupDetails(this.setupdetails);
        return true;
    }

    goToPrevious(form: any) {
        if (this.save(form)) {
            // Navigate to the work page
            this.router.navigate(['/resturant']);
        }
    }

    goToNext(form: any) {
        if (this.save(form)) {
            // Navigate to the result page
            this.router.navigate(['/resturantmenus']);
        }
    }
}