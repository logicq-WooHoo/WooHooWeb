import { Component, OnInit }   from '@angular/core';
import { Router }              from '@angular/router';

import { ResturantMenus }             from '../data/formData.model';
import { FormDataService }     from '../data/formData.service';


@Component ({
    selector:     'wizard-resturant'
    ,templateUrl: './resturantmenus.component.html'
})

export class ResturantMenusComponent implements OnInit {
    resturantmenu: ResturantMenus;
    form: any;
    
    constructor(private router: Router, private formDataService: FormDataService) {
    }

    ngOnInit() {
        this.resturantmenu = this.formDataService.getResturantMenus();
        console.log('Resturant loaded!');
    }

    save(form: any): boolean {
        if (!form.valid) {
            return false;
        }
        
        this.formDataService.setResturant(this.resturantmenu);
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