import { Injectable } from '@angular/core';
import { IVehicle } from '../interfaces/i-vehicle';

@Injectable({
	providedIn: 'root'
})
export class VehiclesService {

	constructor() { }

	allVehiclesData: IVehicle[] = [
		{
			name: "chevrolet chevelle malibu",
			Miles_per_Gallon: 18,
			Cylinders: 8,
			Displacement: 307,
			Horsepower: 130,
			Weight_in_lbs: 3504,
			Acceleration: 12,
			Year: "1970-01-01",
			Origin: "USA"
		},
		{
			name: "buick skylark 320",
			Miles_per_Gallon: 15,
			Cylinders: 8,
			Displacement: 350,
			Horsepower: 165,
			Weight_in_lbs: 3693,
			Acceleration: 11.5,
			Year: "1970-01-01",
			Origin: "USA"
		},
		{
			name: "plymouth satellite",
			Miles_per_Gallon: 18,
			Cylinders: 8,
			Displacement: 318,
			Horsepower: 150,
			Weight_in_lbs: 3436,
			Acceleration: 11,
			Year: "1970-01-01",
			Origin: "USA"
		},
		{
			name: "amc rebel sst",
			Miles_per_Gallon: 16,
			Cylinders: 8,
			Displacement: 304,
			Horsepower: 150,
			Weight_in_lbs: 3433,
			Acceleration: 12,
			Year: "1970-01-01",
			Origin: "USA"
		},
		{
			name: "ford torino",
			Miles_per_Gallon: 17,
			Cylinders: 8,
			Displacement: 302,
			Horsepower: 140,
			Weight_in_lbs: 3449,
			Acceleration: 10.5,
			Year: "1970-01-01",
			Origin: "USA"
		},
		{
			name: "ford galaxie 500",
			Miles_per_Gallon: 15,
			Cylinders: 8,
			Displacement: 429,
			Horsepower: 198,
			Weight_in_lbs: 4341,
			Acceleration: 10,
			Year: "1970-01-01",
			Origin: "USA"
		},
		{
			name: "chevrolet impala",
			Miles_per_Gallon: 14,
			Cylinders: 8,
			Displacement: 454,
			Horsepower: 220,
			Weight_in_lbs: 4354,
			Acceleration: 9,
			Year: "1970-01-01",
			Origin: "USA"
		},
		{
			name: "plymouth fury iii",
			Miles_per_Gallon: 14,
			Cylinders: 8,
			Displacement: 440,
			Horsepower: 215,
			Weight_in_lbs: 4312,
			Acceleration: 8.5,
			Year: "1970-01-01",
			Origin: "USA"
		},
		{
			name: "pontiac catalina",
			Miles_per_Gallon: 14,
			Cylinders: 8,
			Displacement: 455,
			Horsepower: 225,
			Weight_in_lbs: 4425,
			Acceleration: 10,
			Year: "1970-01-01",
			Origin: "USA"
		},
		{
			name: "amc ambassador dpl",
			Miles_per_Gallon: 15,
			Cylinders: 8,
			Displacement: 390,
			Horsepower: 190,
			Weight_in_lbs: 3850,
			Acceleration: 8.5,
			Year: "1970-01-01",
			Origin: "USA"
		},
		{
			name: "citroen ds-21 pallas",
			Miles_per_Gallon: null,
			Cylinders: 4,
			Displacement: 133,
			Horsepower: 115,
			Weight_in_lbs: 3090,
			Acceleration: 17.5,
			Year: "1970-01-01",
			Origin: "Europe"
		},
		{
			name: "chevrolet chevelle concours (sw)",
			Miles_per_Gallon: null,
			Cylinders: 8,
			Displacement: 350,
			Horsepower: 165,
			Weight_in_lbs: 4142,
			Acceleration: 11.5,
			Year: "1970-01-01",
			Origin: "USA"
		},
		{
			name: "ford torino (sw)",
			Miles_per_Gallon: null,
			Cylinders: 8,
			Displacement: 351,
			Horsepower: 153,
			Weight_in_lbs: 4034,
			Acceleration: 11,
			Year: "1970-01-01",
			Origin: "USA"
		}
	];

	getAllVehicles() {
		return this.allVehiclesData;
	}
}
