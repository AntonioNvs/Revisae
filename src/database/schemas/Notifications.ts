/* eslint-disable camelcase */
export default class NotificationSchema {
  static schema = {
    name: 'Notification',
    primaryKey: 'id',
    properties: {
      id: {type: 'string', indexed: true},
      id_revision: 'string',
      type: 'int',
    },
  };
}

export interface INotificationParams {
  type: number;
  id_revision: string;
}

export interface INotificationSchema {
  name: 'Notification';
  args: INotificationParams;
}
