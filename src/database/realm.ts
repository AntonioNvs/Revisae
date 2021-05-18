import Realm from 'realm';

import RevisionSchema from './schemas/Revisions';
import NotificationSchema from './schemas/Notifications';

export default function getRealm(): ProgressPromise {
  return Realm.open({
    schema: [RevisionSchema, NotificationSchema],
  });
}
