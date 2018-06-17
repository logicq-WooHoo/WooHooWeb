import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-restautent-confirmation',
  templateUrl: './restaurentconfirmation.component.html',
  styleUrls: ['./restaurentconfirmation.component.css']
})
export class RestaurentConfirmationComponent implements OnInit {

  restaurentName: string;
  restaurentAddress: string;

  constructor(private route: ActivatedRoute,
    private router: Router
  ) {

    this.route.params.subscribe(params => {
      this.restaurentName = params['resName'];
      this.restaurentAddress = params['resAdd'];
    });
  }

  ngOnInit() {

  }


}
