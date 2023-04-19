import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ModernComponent } from 'app/modules/admin/pages/invoice/printable/modern/modern.component';
import { modernRoutes } from 'app/modules/admin/pages/invoice/printable/modern/modern.routing';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { NativeDateModule } from '@angular/material/core';

@NgModule({
    declarations: [ModernComponent],
    imports: [
        MatDatepickerModule,
        NativeDateModule,

        RouterModule.forChild(modernRoutes),
    ],
})
export class ModernModule {}
