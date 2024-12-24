import dayjs from "dayjs";
import { openingHours } from "../../utils/opening-hours";

export function hoursLoad({ date }) {
    const opening = openingHours.map(hour => {
        const [scheduleHour] = hour.split(":")

        const isHourPast = dayjs(date).add(scheduleHour, "hour").isAfter(dayjs())

        const ret = {
            hour,
            available: isHourPast
        }

        console.log(ret)
        return ret
    })

    return opening
}