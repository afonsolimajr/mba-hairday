import dayjs from "dayjs"

const form = document.querySelector("form")
const selectedDate = document.getElementById("date")

const initialDate = dayjs(new Date()).format("YYYY-MM-DD")
selectedDate.value = initialDate
selectedDate.min = initialDate

form.onsubmit = (event) => {
    event.preventDefault()

    console.log("submit")
}