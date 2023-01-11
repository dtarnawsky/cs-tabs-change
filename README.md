# Change Tab Visibility
This sample application shows how to change whether the tabs bar is visible from another part of the application. 
Effectively this is cross communication between components.

## Tab Service
An Angular service called `tabs.service.ts` has been created which has methods to show and hide the tabs. It also has an event emitter which will emit when the tabs are made visible or invisible.

## Tabs
The tabs component subscribes to the event emitter from the tab service. When it changes we set the `[visible]` property of the component.