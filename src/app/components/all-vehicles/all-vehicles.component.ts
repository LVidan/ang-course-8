import { Component, OnInit } from '@angular/core';
import { IVehicle } from 'src/app/interfaces/i-vehicle';
import { CategoriesService } from 'src/app/services/categories.service';
import { VehiclesService } from 'src/app/services/vehicles.service';

@Component({
	selector: 'app-all-vehicles',
	templateUrl: './all-vehicles.component.html',
	styleUrls: ['./all-vehicles.component.scss']
})
export class AllVehiclesComponent implements OnInit {

	constructor(
		private vehicleService: VehiclesService,
		private categoriesService: CategoriesService
	) { }

	ngOnInit(): void { }

	allVehiclesData: IVehicle[] = this.vehicleService.getAllVehicles();

	resetAllCategories(): void {
		console.log(this.categoriesService.allCategories = []);

		// this.categoriesService.allCategories = [];
	}
}
