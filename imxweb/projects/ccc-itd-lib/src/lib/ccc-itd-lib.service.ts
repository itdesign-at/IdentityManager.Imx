import {Injectable} from '@angular/core';
import {ButtonComponent} from './button/button.component';
import {ExtService} from 'qbm';

@Injectable({
  providedIn: 'root'
})
export class CccItdLibService {

  constructor(private readonly extService: ExtService) {
  }

  public onInit(): void {
    this.extService.register('button-test', {
      instance: ButtonComponent
    });
  }
}
