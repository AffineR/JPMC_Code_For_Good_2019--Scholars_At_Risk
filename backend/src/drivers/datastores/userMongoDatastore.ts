import { MongoDriver } from "../mongo/mongoDriver";

export class UserMongoDataStore {
  userdb: any;
  constructor() {
    MongoDriver.buildDriver(process.env.DB_URI as string, "users").then(
      dataStore => {
        this.userdb = dataStore;
      }
    );
  }
  /**
   *
   * @param params {userInfo} information about a user trying to access the system.
   */
  async addUser(params: { userInfo: any }) {
    const { userInfo } = params;

    try {
      this.userdb.insert(userInfo);
    } catch (err) {
      console.log(err);
    }
  }
}
