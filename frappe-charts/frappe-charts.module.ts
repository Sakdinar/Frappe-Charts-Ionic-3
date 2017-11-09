import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FrappeChartsComponent } from './frappe-charts';

@NgModule({
	declarations: [FrappeChartsComponent],
	imports: [IonicPageModule.forChild(FrappeChartsComponent)],
	exports: [FrappeChartsComponent]
})
export class FrappeChartsComponentModule {}
