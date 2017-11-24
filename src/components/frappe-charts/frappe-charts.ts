import { Component, Input, ViewChild } from '@angular/core';
import Chart from 'frappe-charts/dist/frappe-charts.esm';

@Component({
	selector: 'frappe-charts',
	templateUrl: 'frappe-charts.html'
})
export class FrappeChartsComponent {

	@Input() params;
	@ViewChild('chartWrapper') chartWrapper;

	public chart: any;

	constructor() {
		
	}

	/**
	 * Render the chart after the content has been initialized, this is the time @params will be available
	 */
	ngAfterContentInit() {
		this.renderChart();
	}

	renderChart() {
		let chartParams: any = {
			parent: this.chartWrapper.nativeElement,
			data: this.params.data,
			type: this.params.type || 'bar',
			title: this.params.title || '',
			height: this.params.height || 250,
			region_fill: 1,
		};

		this.chart = new Chart(chartParams);
	}

}