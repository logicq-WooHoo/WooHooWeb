import { Component, OnInit }   from '@angular/core';
import { Router }              from '@angular/router';

import { Resturant }             from '../data/formData.model';
import { FormDataService }     from '../data/formData.service';


@Component ({
    selector:     'wizard-resturant'
    ,templateUrl: './resturant.component.html'
})

export class RestruantComponent implements OnInit {
    resturant: Resturant;
    form: any;
    
    constructor(private router: Router, private formDataService: FormDataService) {
    }

    ngOnInit() {
        this.resturant = this.formDataService.getResturant();
        console.log('Resturant loaded!');
    }

    save(form: any): boolean {
        if (!form.valid) {
            return false;
        }
        
        this.formDataService.setResturant(this.resturant);
        return true;
    }

    goToPrevious(form: any) {
        if (this.save(form)) {
            // Navigate to the personal page
            this.router.navigate(['/personal']);
        }
    }

    goToNext(form: any) {
        if (this.save(form)) {
            // Navigate to the address page
            this.router.navigate(['/setupresturant']);
        }
    }
}