export interface IUser {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  sex: number;
  profilePicture: string;
  position: string;
}

interface ITypes {
  id: number;
  name: string;
}

interface ICompany {
  name: string;
  logo: string;
  address: {
    id?: any;
    country: {
      name: string;
      region: any;
    };
    state?: any;
    city?: {
      name: string;
      countryId?: any;
      stateId?: any;
    };
    street?: any;
    house: string;
    zipCode?: string;
    longitude?: string;
    latitude?: string;

    fallbackString: null;
    cityRegion: null;
  };
}

export interface IProducts {
  //   key?: number;
  id: number;
  picture: string;
  name: string;
  description: string;
  type: ITypes;
  categories: ITypes[];
  implementationEffortText?: any;
  investmentEffort?: string;
  trl?: ITypes;
  user: IUser;
  company: ICompany;
  businessModels: ITypes[];
}
