module MySample {
  export interface IContactScope extends ng.IScope {
  }
  export class ContactController implements ng.IController {
    $onInit()  {   
      this.$scope.onSubmit = this.submit.bind(this);
    }

    constructor(public $scope: any) {
    }

    submit(contactDetails: any) {
      alert(`ARE YOU SURE TO SUBMIT THIS MESSAGE? \n Your email: ${contactDetails.email} \n Your message: ${contactDetails.message}`);
    }
  }

  Module.controller('contactController', ContactController);

  export class ContactDirective {
    controllerAs: string;
    controller: string;
    templateUrl: string;

    constructor() {
      this.controllerAs = 'vm';
      this.controller = 'contactController';
      this.templateUrl = './contact.component.html';
    }
  }
  Module.directive('contact', () => new ContactDirective());
}



