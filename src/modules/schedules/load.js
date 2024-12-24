import { ScheduleFetchByDay } from "../../services/schedule-fetch-by-day";
import { hoursLoad } from "../form/hours-load";

const selectedDate = document.getElementById("date")

export async function schedulesDay() {
    const date = selectedDate.value

    const dailySchedules = await ScheduleFetchByDay({ date })
    console.log(dailySchedules)

    hoursLoad({ date })
}