export default class RevisionSchema {
  static schema = {
    name: 'Revision',
    primaryKey: 'id',
    properties: {
      id: {type: 'string', indexed: true},
      theme: 'string',
      date_created: 'date',
    },
  };
}

export interface IRevisionParams {
  id: string;
  theme: string;
  date_created: Date;
}

export interface IRevisionSchema {
  name: 'Revision';
  args: IRevisionParams;
}
