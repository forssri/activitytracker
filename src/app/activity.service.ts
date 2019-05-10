import { Injectable } from '@angular/core';
import { Activity } from './models/activity';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  constructor(private af: AngularFirestore, private auth: AuthService) {}

  addActivity(activity: Activity) {
    activity.activityId = this.af.createId();
    activity.user = this.auth.user;
    console.log(activity);
    return this.af.collection('activities').add(activity);
  }

  getActivities() {
    return this.af.collection('activities').snapshotChanges();
  }

  updateActivity(activityId: string, activity: Activity) {
    return this.af.doc('activities/' + activityId).update(activity);
  }

  deleteActivity(activityId: string) {
    return this.af.doc('activities/' + activityId).delete();
  }
}
