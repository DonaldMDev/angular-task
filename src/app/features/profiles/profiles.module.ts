import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilesListComponent } from './profiles-list/profiles-list.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { getProfilesReducer } from './store/profiles.reducers';
import { ProfilesEffects } from './store/profiles.effects';
import { LayoutModule } from '@core/layout/layout.module';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';


@NgModule({
	declarations: [
		ProfilesListComponent
	],
	imports: [
		CommonModule,
		LayoutModule,
		RouterModule,
		MatCardModule,
		MatDividerModule,
		MatListModule,
		StoreModule.forFeature('profiles', getProfilesReducer),
		EffectsModule.forFeature([ProfilesEffects])

	]
})
export class ProfilesModule { }
