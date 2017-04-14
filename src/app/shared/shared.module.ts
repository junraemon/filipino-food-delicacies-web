import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TruncatePipe } from './pipes/truncate.pipe';
import { CategoryAsyncPipe } from './pipes/category-async.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TruncatePipe, CategoryAsyncPipe],
  exports: [TruncatePipe, CategoryAsyncPipe]
})
export class SharedModule { }
