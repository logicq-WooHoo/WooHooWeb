
export class UserInformation {
	
	public firstName: string;
	
	public lastName:string ;
	
	public emailId: string ;
	
	public mobileNo : string ;


	public get FirstName(): string{
		return this.firstName;
	}

	public set FirstName(firstName:string){
		 this.firstName=firstName;
	}
	
	public get LastName():string{
		return this.lastName;
	}
	
	public set LastName(lastName:string){
		 this.lastName=lastName;
	}

	public get EmailId(): string {
		return this.emailId;
	}

	public set EmailId(emailId:string) {
		 this.emailId=emailId;
	}
	
	public set MobileNo(mobileNo:string) {
		this.mobileNo=mobileNo;
	}

	public get MobileNo():string {
		return this.mobileNo;
	}
	
}
  