import { Injectable }                                                      from '@angular/core';
import { FormData, Personal, Resturant,ResturantMenus, SetupDetails,ResturantDetails}       from './formData.model';
import { WorkflowService }                                                 from '../workflow/workflow.service';
import { STEPS }                                                            from '../workflow/workflow.model';

@Injectable()
export class FormDataService {

    private formData: FormData = new FormData();
    private isPersonalFormValid: boolean = false;
    private isResturantFormValid: boolean = false;
    private isResturantMenuFormValid: boolean = false;
    private isSetupResturantFormValid: boolean = false;
    
    constructor(private workflowService: WorkflowService) { 
    }

    getPersonal(): Personal {
        // Return the Personal data
        var personal: Personal = {
			title:this.formData.title,
            firstName: this.formData.firstName,
            lastName: this.formData.lastName,
			gender:this.formData.gender,
			mobilenumber:this.formData.mobilenumber,
			email:this.formData.email,
			address:this.formData.address,
        };
        return personal;
    }

    setPersonal(data: Personal) {
        // Update the Personal data only when the Personal Form had been validated successfully
        this.isPersonalFormValid = true;
		this.formData.title=data.title;
        this.formData.firstName = data.firstName;
        this.formData.lastName = data.lastName;
		this.formData.gender=data.gender;
		this.formData.mobilenumber=data.mobilenumber;
        this.formData.email = data.email;
		this.formData.address=data.address;
        // Validate Personal Step in Workflow
        this.workflowService.validateStep(STEPS.personal);
    }

    getResturantDetails() : ResturantDetails {
        // Return the Address data
        var resturantdetails: ResturantDetails = {
                  };
       return resturantdetails;
  }
  
  setResturantDetails(data: ResturantDetails) {
      // Update the work type only when the Work Form had been validated successfully
      //this.isSetupResturantFormValid = true;
      // Validate Work Step in Workflow
      this.workflowService.validateStep(STEPS.setupresturant);
  }

  getSetupDetails() : SetupDetails {
    // Return the Address data
    var setupresturant: SetupDetails = {
              };
   return setupresturant;
}

setSetupDetails(data: SetupDetails) {
  // Update the work type only when the Work Form had been validated successfully
  this.isSetupResturantFormValid = true;
  // Validate Work Step in Workflow
  this.workflowService.validateStep(STEPS.setupresturant);
}


    getResturantMenus() : ResturantMenus {
          // Return the Address data
          var resturantmenus: ResturantMenus = {
                    };
         return resturantmenus;
    }
    
    setResturantMenus(data: ResturantMenus) {
        // Update the work type only when the Work Form had been validated successfully
        this.isResturantMenuFormValid = true;
        // Validate Work Step in Workflow
        this.workflowService.validateStep(STEPS.resturantmenus);
    }

    getResturant() : Resturant {
        // Return the Address data
        var resturant: Resturant = {

        };
        return resturant;
    }

    setResturant(data: Resturant) {
        // Update the Address data only when the Address Form had been validated successfully
        this.isResturantFormValid = true;
     
        // Validate Address Step in Workflow
        this.workflowService.validateStep(STEPS.resturant);
    }

    getFormData(): FormData {
        // Return the entire Form Data
        return this.formData;
    }

    resetFormData(): FormData {
        // Reset the workflow
        this.workflowService.resetSteps();
        // Return the form data after all this.* members had been reset
        this.formData.clear();
        this.isPersonalFormValid = this.isResturantFormValid = this.isResturantMenuFormValid = false;
        return this.formData;
    }

    isFormValid() {
        // Return true if all forms had been validated successfully; otherwise, return false
        return this.isPersonalFormValid &&
                this.isResturantFormValid && 
                this.isResturantMenuFormValid;
    }
}