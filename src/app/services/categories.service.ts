import { Injectable } from '@angular/core';
import { ICategories } from '../interfaces/i-categories';

@Injectable({
	providedIn: 'root'
})
export class CategoriesService {

	constructor() { }

	allCategories: ICategories[] = [
		{ id: 1, type: 'Automobil' },
		{ id: 2, type: 'Motorcikl' },
		{ id: 3, type: 'ATV' },
		{ id: 4, type: 'Kamion' },
		{ id: 5, type: 'Brod' },
	];

	getAllCategories() {
		return this.allCategories;
	}

	setNewCategory(): void {
		console.log(this.allCategories);
	}
}
