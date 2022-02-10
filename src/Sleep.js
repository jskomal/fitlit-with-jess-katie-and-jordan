import dayjs from 'dayjs'
import isBetween from 'dayjs/plugin/isBetween'
dayjs.extend(isBetween)

class Sleep {
  constructor(userID, sleepData) {
    this.userID = userID;
    this.sleepData = sleepData[userID].map((sleepLogEntry) => {
      return {
        date: dayjs(sleepLogEntry.date),
        hoursSlept: sleepLogEntry.hoursSlept,
        sleepQuality: sleepLogEntry.sleepQuality
      }
    })
  }
  getAvgSleep() {
    return parseFloat((this.sleepData.reduce((acc, sleepLogEntry) => {
      return acc + sleepLogEntry.hoursSlept
    },0)/this.sleepData.length).toFixed(2))
  }
}


export default Sleep;


// For a user (identified by their userID), the average number of hours slept per day
// For a user, their average sleep quality per day over all time
// For a user, how many hours they slept for a specific day (identified by a date)
// For a user, their sleep quality for a specific day (identified by a date)
// For a user, how many hours slept each day over the course of a given week (7 days) - you should be able to calculate this for any week, not just the latest week
// For a user, their sleep quality each day over the course of a given week (7 days) - you should be able to calculate this for any week, not just the latest week
// For all users, the average sleep quality
