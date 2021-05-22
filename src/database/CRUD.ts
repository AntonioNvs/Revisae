import getRealm from './realm';

interface ICreate {
  name: string;
  args: any;
}

interface IDelete {
  name: string;
  id: string;
}

interface IFindById {
  name: string;
  id: string;
}

export default class CRUD {
  async create({name, args}: ICreate): Promise<void> {
    const realm = await getRealm();

    realm.write(() => {
      realm.create(name, args);
    });
  }

  async list(name: string): Promise<Realm.Results<Realm.Object>> {
    const realm = await getRealm();

    return realm.objects(name);
  }

  async findById({name, id}: IFindById): Promise<Realm.Object> {
    const realm = await getRealm();

    return realm.objects(name).find(row => row.id === id) as Realm.Object;
  }

  async delete({name, id}: IDelete): Promise<void> {
    const realm = await getRealm();

    const selectedRow = realm.objects(name).find(row => row.id === id);

    realm.write(() => {
      realm.delete(selectedRow);
    });
  }
}
