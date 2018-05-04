# Frappe Charts in Ionic 3
Use frappe-charts in Ionic 3 as a custom component

### How to use
```
npm install -g ionic@latest
```
```
ionic start frappe-charts-ionic
```

Install Frappe charts to the project.

```
npm install frappe-charts@0.0.7
```
_Note: since frappe-charts had its major rewrite for v1, we have to indicate the v0.0.7 when installing the package._

Copy the frappe-charts component to your project's components folder. Make sure to import this component in your general component's module `/src/components/components.module.ts`.

Import the styles in `/src/app/app.scss`
```css
@import '../../node_modules/frappe-charts/dist/frappe-charts.min';
```

Lastly, import the component's module to `/src/app/page.module.ts`. Also, make sure that your app is configured to use the lazy loading feature!
```javascript
...
import { ComponentsModule } from '../components/components.module';

@NgModule({
	declarations: [...],
	imports: [
		...,
		IonicModule.forRoot(MyApp, {
			preloadModules: true //enable preloading of modules
		}),
		ComponentsModule,
	],
	exports: [...]
})
...
```

To use it in a page, just provide the data:
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

You should import the Component Module in home page module as well.
```javascript
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [HomePage],
  imports: [
	  IonicPageModule.forChild(HomePage),
	  ComponentsModule
	],
})
export class HomePageModule { }
```

Then use the component like:
```html
<frappe-charts [params]="chartParam"></frappe-charts>
```

That's it! 


---
For more detailed instruction, view my blog post in [Medium](https://medium.com/@ejfrias/how-i-used-frappe-charts-with-ionic-e8607e4f241)

Credits to [frappe-charts](https://github.com/frappe/charts) for this awesome chart library!


