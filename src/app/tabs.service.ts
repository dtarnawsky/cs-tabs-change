import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TabsService {

  public tabChange = new EventEmitter<boolean>();

  constructor() {}

  public hideTabs() {
    this.tabChange.emit(false);
  }

  public showTabs() {
    this.tabChange.emit(true);
  }
}
