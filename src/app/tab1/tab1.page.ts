import { Component } from '@angular/core';
import { TabsService } from '../tabs.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private tabService: TabsService) { }

  showTabs() {
    this.tabService.showTabs();
  }

  hideTabs() {
    this.tabService.hideTabs();
  }

}
