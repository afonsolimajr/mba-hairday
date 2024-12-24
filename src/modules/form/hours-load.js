import dayjs from "dayjs";
import { openingHours } from "../../utils/opening-hours";

const hours = document.getElementById("hours")

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

    opening.forEach(({ hour, available }) => {
        const li = document.createElement("li")

        li.classList.add("hour")
        li.classList.add(available ? "hour-available" : "hour-unavailable")

        li.textContent = hour
        hours.append(li)
    })
}