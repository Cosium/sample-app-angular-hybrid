import {Injectable} from '@angular/core';
import {ToastrService} from 'ngx-toastr';

@Injectable({providedIn: 'root'})
export class Foo {

  constructor(private readonly toastrService: ToastrService) {
  }

  trigger() {
    this.toastrService.success('Hover over me after my disparition', undefined, {timeOut: 10000});
  }
}


