import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	public charts: any = [];

  constructor(public navCtrl: NavController) {
	const chartsData = [
		{
			title: 'Bar chart',
			type: 'bar',
			data: {
				labels: ["12am", "3am", "6am", "9am", "12pm", "3pm", "6pm", "9am"],
				datasets: [
					{
						title: "Some Data",
						color: "light-blue",
						values: [25, 40, 30, 35, 8, 52, 17, -4]
					},
					{
						title: "Another Set",
						color: "violet",
						values: [25, 50, -10, 15, 18, 32, 27, 14]
					}
				]
			}
		},
		{
			title: 'Line chart',
			type: 'line',
			data: {
				labels: ["12am", "3am", "6am", "9am", "12pm", "3pm", "6pm", "9am"],
				datasets: [
					{
						title: "Some Data", color: "light-blue",
						values: [25, 40, 30, 35, 8, 52, 17, -4]
					},
					{
						title: "Another Set", color: "violet",
						values: [25, 50, -10, 15, 18, 32, 27, 14]
					},
					{
						title: "Yet Another", color: "blue",
						values: [15, 20, -3, -15, 58, 12, -17, 37]
					}
				]
			}
		},
		{
			title: 'Pie chart',
			type: 'pie',
			data: {
				labels: ["12am", "3am", "6am", "9am", "12pm"],
				datasets: [
					{
						title: "Some Data", color: "light-blue",
						values: [25, 40, 30, 35, 8]
					},
					{
						title: "Another Set", color: "violet",
						values: [25, 50, -10, 15, 18]
					},
					{
						title: "Yet Another", color: "blue",
						values: [15, 20, -3, -15, 58]
					}
				]
			}
		},
		{
			title: 'Scatter chart',
			type: 'scatter',
			data: {
				labels: ["12am", "3am", "6am", "9am", "12pm", "3pm", "6pm", "9am"],
				datasets: [
					{
						title: "Some Data", color: "light-blue",
						values: [25, 40, 30, 35, 8, 52, 17, -4]
					},
					{
						title: "Another Set", color: "violet",
						values: [25, 50, -10, 15, 18, 32, 27, 14]
					},
					{
						title: "Yet Another", color: "blue",
						values: [15, 20, -3, -15, 58, 12, -17, 37]
					}
				]
			}
		},
		{
			title: 'Percentage chart',
			type: 'percentage',
			data: {
				labels: ["12am", "3am", "6am", "9am", "12pm", "3pm", "6pm", "9am"],
				datasets: [
					{
						title: "Some Data",
						color: "light-blue",
						values: [25, 40, 30, 35, 8, 52, 17, -4]
					},
					{
						title: "Another Set",
						color: "violet",
						values: [25, 50, -10, 15, 18, 32, 27, 14]
					}
				]
			}
		}
	];

	chartsData.forEach(d => {
		this.charts.push(d);
	});
  }

}
