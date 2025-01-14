import dayjs from 'dayjs'
import { expect } from 'chai'
import Activity from '../src/Activity'
import User from '../src/User'
import UserRepository from '../src/UserRepository'

describe('Activity', () => {
  let testUser
  let userActivityData1
  let userActivityData2
  let userActivityData3
  let userActivityData4
  let userActivityData5
  let userActivityData6
  let userActivityData7
  let testActivityData
  let activityUser

  beforeEach(() => {
    testUser = new UserRepository([
      new User({
        id: 1,
        name: 'Luisa Hane',
        address: '15195 Nakia Tunnel, Erdmanport VA 19901-1697',
        email: 'Diana.Hayes1@hotmail.com',
        strideLength: 4.3,
        dailyStepGoal: 10000,
        friends: [16, 4, 8]
      })
    ])

    userActivityData1 = {
      date: '2019/06/15',
      numSteps: 3577,
      minutesActive: 140,
      flightsOfStairs: 16
    }

    userActivityData2 = {
      date: '2019/06/16',
      numSteps: 4294,
      minutesActive: 138,
      flightsOfStairs: 10
    }

    userActivityData3 = {
      date: '2019/06/17',
      numSteps: 7402,
      minutesActive: 116,
      flightsOfStairs: 33
    }

    userActivityData4 = {
      date: '2019/06/18',
      numSteps: 5021,
      minutesActive: 48,
      flightsOfStairs: 12
    }

    userActivityData5 = {
      date: '2019/06/19',
      numSteps: 3640,
      minutesActive: 180,
      flightsOfStairs: 40
    }

    userActivityData6 = {
      date: '2019/06/20',
      numSteps: 8952,
      minutesActive: 121,
      flightsOfStairs: 5
    }

    userActivityData7 = {
      date: '2019/06/21',
      numSteps: 10001,
      minutesActive: 110,
      flightsOfStairs: 15
    }

    testActivityData = {
      1: [
        userActivityData1,
        userActivityData2,
        userActivityData3,
        userActivityData4,
        userActivityData5,
        userActivityData6,
        userActivityData7
      ]
    }

    activityUser = new Activity(1, testActivityData)
  })

  // TESTS

  it('should be a function', () => {
    expect(Activity).to.be.a('function')
  })

  it('should instantiate the Activity class', () => {
    expect(activityUser).to.be.an.instanceof(Activity)
  })

  it('should have an id', () => {
    expect(activityUser.userID).to.equal(1)
  })

  it('should have a property that holds the activity data', () => {
    expect(activityUser.activityData).to.deep.equal([
      {
        date: dayjs('2019/06/15'),
        numSteps: 3577,
        minutesActive: 140,
        flightsOfStairs: 16
      },
      {
        date: dayjs('2019/06/16'),
        numSteps: 4294,
        minutesActive: 138,
        flightsOfStairs: 10
      },
      {
        date: dayjs('2019/06/17'),
        numSteps: 7402,
        minutesActive: 116,
        flightsOfStairs: 33
      },
      {
        date: dayjs('2019/06/18'),
        numSteps: 5021,
        minutesActive: 48,
        flightsOfStairs: 12
      },
      {
        date: dayjs('2019/06/19'),
        numSteps: 3640,
        minutesActive: 180,
        flightsOfStairs: 40
      },
      {
        date: dayjs('2019/06/20'),
        numSteps: 8952,
        minutesActive: 121,
        flightsOfStairs: 5
      },
      {
        date: dayjs('2019/06/21'),
        numSteps: 10001,
        minutesActive: 110,
        flightsOfStairs: 15
      }
    ])
  })

  it("should have a method to calculate a user's mileage by a date", () => {
    expect(activityUser.getMileageByDate(testUser.data[0], '2019/06/17')).to.equal(6.03)
  })

  it('should have a method to return minutes active by date', () => {
    expect(activityUser.getMinutesActiveByDate('2019/06/16')).to.equal(138)
  })

  it('should have a method to calculate average minutes active for a given week', () => {
    expect(activityUser.getAvgActivityMinutesPerWeek('2019/06/21')).to.equal(121.86)
  })

  it('should have a method to calculate if they reached their step goal for a given day', () => {
    expect(activityUser.getDailyStepGoalReached(testUser.data[0], '2019/06/20')).to.equal(
      false
    )
    expect(activityUser.getDailyStepGoalReached(testUser.data[0], '2019/06/21')).to.equal(
      true
    )
  })

  it('should have a method to return all the days they exceeded their step goal', () => {
    expect(activityUser.getExceededStepGoalDays(testUser.data[0])).to.deep.equal([
      {
        date: dayjs('2019/06/21'),
        numSteps: 10001,
        minutesActive: 110,
        flightsOfStairs: 15
      }
    ])
  })

  it("should have a method to calculate a user's all-time stair climbing record", () => {
    expect(activityUser.getAllTimeStairRecord()).to.equal(40)
  })

  it("should have a method to return a user's steps on a given date", () => {
    expect(activityUser.getDailySteps('2019/06/15')).to.equal(3577)
  })

  it('should have a method to return the steps in a week', () => {
    expect(activityUser.getWeeklySteps('2019/06/21')).to.deep.equal([
      10001, 8952, 3640, 5021, 7402, 4294, 3577
    ])
  })

  it('should have a method to return the minutes active in a week', () => {
    expect(activityUser.getWeeklyMinutesActive('2019/06/21')).to.deep.equal([
      110, 121, 180, 48, 116, 138, 140
    ])
  })

  it('should have a method to return the flights of stairs in a week', () => {
    expect(activityUser.getWeeklyFlightsClimbed('2019/06/21')).to.deep.equal([
      15, 5, 40, 12, 33, 10, 16
    ])
  })

  it('should have a method to return the number of flights climbed by date', () => {
    expect(activityUser.getDailyFlights('2019/06/21')).to.equal(15)
  })
})
