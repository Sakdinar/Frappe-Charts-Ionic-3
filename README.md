# Frappe Charts in Ionic 3
Use frappe-charts in Ionic 3 as a custom component

### How to use
Copy the frappe-charts folder to your /app-path/src/components/ folder

Import the frappe-charts component to your page.module.ts
```javascript
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
...
import { FrappeChartsComponentModule } from '../../components/frappe-charts/frappe-charts.module';

@NgModule({
	declarations: [...],
	imports: [
		...,
		FrappeChartsComponentModule,
	],
	exports: [...]
})
export class PageModule {}
```

Set the chart parameters on your page.ts file
```javascript
...
export class Page {
  public chartParam: any;
  
  constructor(){
    this.chartParam = {
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
    };
  }
}
```

Then use the component like so
```javascript
<frappe-charts [params]="chartParam"></frappe-charts>
```

**_Make sure your Ionic app is configured for lazy loading._**

### Optimisation needed
I'm not sure how to import the css from node_modules folder so I had to copy the style codes to the component's css file. Let me know if you know the right way of doing this.


---
Credits to [frappe-charts](https://github.com/frappe/charts) for this awesome chart library!


