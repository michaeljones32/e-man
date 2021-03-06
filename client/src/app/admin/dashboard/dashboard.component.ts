import { EmanConfig } from './../../core/config/eman-config';
import { OrganizationService } from './../../core/services/organizations/organization.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'em-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  organizations: any = [] ;
  constructor(private organizationService: OrganizationService, private snackBar: MatSnackBar) { }

  ngOnInit() {
  this.getOrganization();
  }

  getOrganization() {
    this.organizationService.get()
    .subscribe(
      (data: any) => {
        this.organizations =  data['organizations'].length > 0 ? data['organizations'] : [];
      },
      (err) => {
        console.log(err);
      }
    );
  }
  // TODO: getImageUrl(imagePath){
  //   return `url(${EmanConfig.imageBaseUrl}/${imagePath})`;
  // }

}
