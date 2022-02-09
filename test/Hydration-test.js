import { expect } from 'chai'
import User from '../src/User'
import Hydration from '../src/Hydration'

describe('Hydration', () => {
  let user;
  let userData;
  let userHydrationData1;
  let userHydrationData2;
  let userHydrationData3;
  let hydratedUser;

  beforeEach(() => {
    userData = {
      id: 1,
      name: 'Luisa Hane',
      address: '15195 Nakia Tunnel, Erdmanport VA 19901-1697',
      email: 'Diana.Hayes1@hotmail.com',
      strideLength: 4.3,
      dailyStepGoal: 10000,
      friends: [16, 4, 8]
    }
    userHydrationData1 = {
      userID: 1,
      date: "2019/06/15",
      numOunces: 85,
    }
    userHydrationData2 = {
      userID:1,
      date:"2019/06/16",
      numOunces:69
    }
    userHydrationData3 = {
      userID:1,
      date:"2019/06/22",
      numOunces: 54
    }
    hydratedUser = new Hydration()
    user = new User(userData)
  })

  it('should be a function', () => {
    expect(Hydration).to.be.a('function')
  })

  it('should instantiate the Hydration class', () => {
    expect(hydratedUser).to.be.an.instanceof(Hydration)
  })
});
