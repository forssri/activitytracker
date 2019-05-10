import { Component, OnInit } from '@angular/core';
import { ActivityService } from '../activity.service';

@Component({
  selector: 'app-addactivity',
  templateUrl: './addactivity.component.html',
  styleUrls: ['./addactivity.component.sass']
})
export class AddactivityComponent implements OnInit {
  type: string;
  value: string;
  constructor(private activityService: ActivityService) {}

  ngOnInit() {}
  addActivity() {
    this.activityService.addActivity({
      type: this.type,
      value: this.value,
      user: null
    });
  }
}
