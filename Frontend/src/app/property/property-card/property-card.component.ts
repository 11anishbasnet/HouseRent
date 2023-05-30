import { Component } from "@angular/core";

@Component({
  selector : 'app-property-card',
  //template : '<h1>bhsbdhsdmfjbsdhkfkshdj</h1>',
  templateUrl : 'property-card.component.html',
  //styles : ['h1 { Font-weight : normal;}'],
  styleUrls : ['property-card.component.css']
}
)

export class PropertyCardComponent{
  property: any = {
    "Id": 1,
    "Type":"House",
    "Price":15000,
    "Owner": "Ram Chand"
  }
}
