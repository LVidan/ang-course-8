import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
	selector: 'app-categories',
	templateUrl: './categories.component.html',
	styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

	constructor(
		public categoriesService: CategoriesService
	) { }

	ngOnInit(): void { }

	isDisabled: boolean = true;

	checkStatus(value: any): void {
		if (!value) {
			this.isDisabled = true;
		} else {
			this.isDisabled = false;
		}
	}

	addCategory(value: any, txtArea: any): void {
		if (txtArea.value == '') {
			alert('Field is empty!')
		} else {
			this.isDisabled = false;
			this.categoriesService.allCategories.push({ id: this.categoriesService.allCategories.length + 1, type: value });
			console.log(txtArea.value ? true : false);
			txtArea.value = '';
		}
	}
}
