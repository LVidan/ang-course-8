import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss']
})
export class VehiclesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log(this.vehicle);
  }

  @Input() vehicle: any;
}
