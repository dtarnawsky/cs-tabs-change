import { Component, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TabsService } from '../tabs.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnDestroy {

  tabsVisible = true;

  private subscription: Subscription;

  constructor(private tabsService: TabsService) {
    this.subscription = this.tabsService.tabChange.subscribe((visible: boolean) => {
      this.tabsVisible = visible;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
