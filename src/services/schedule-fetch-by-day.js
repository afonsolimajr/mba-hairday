import dayjs from "dayjs"
import { apiConfig } from "./api-config"


export async function ScheduleFetchByDay({ date }) {
    try {
        const response = await fetch(`${apiConfig.baseURL}/schedules`)

        const data = await response.json()

        const dayleSchedules = data.filter(schedule => dayjs(date).isSame(schedule.when, "day"))

        return dayleSchedules
    } catch (error) {
        console.log(error)
        alert("Não foi possível buscar os agendamentos do dia selecionado")
    }
}