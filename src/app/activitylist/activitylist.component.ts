import { Component, OnInit } from '@angular/core';
import { ActivityService } from '../activity.service';
import { Activity } from '../models/activity';
import { DocumentChangeAction } from '@angular/fire/firestore';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-activitylist',
  templateUrl: './activitylist.component.html',
  styleUrls: ['./activitylist.component.sass']
})
export class ActivitylistComponent implements OnInit {
  activities: Activity[];
  constructor(
    private activityService: ActivityService,
    public authService: AuthService
  ) {}

  ngOnInit() {
    this.activityService.getActivities().subscribe(activities => {
      this.activities = activities.map((a: DocumentChangeAction<Activity>) => {
        return {
          uid: a.payload.doc.id,
          type: a.payload.doc.data().type,
          value: a.payload.doc.data().value,
          user: a.payload.doc.data().user
        };
      });
      console.log(this.activities);
    });
  }
}
