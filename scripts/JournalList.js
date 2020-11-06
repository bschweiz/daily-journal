import { getJournalEntries, useJournalEntries } from "./JournalDataProvider.js"
import { getMoods, useMoods } from './form/MoodProvider.js'

const pastEntriesContainer = document.querySelector(".past-entries")
const eventHub = document.querySelector("#container")


export const JournalList = () => {
    getJournalEntries()
        .then(getMoods)
        .then(() => {
            const allPastEntries = useJournalEntries()
            const moodArray = useMoods()
            render(allPastEntries, moodArray)
        })
}

const render = (entriesArray, moodArray) => {
    pastEntriesContainer.innerHTML = entriesArray.map(entry => {
        const displayMood = moodArray.find(mood => mood.id === entry.moodId)
        // console.log(displayMood) 
        return ` 
        <div class="entryCard">
        <div class="note horiz-box">
        <div class="box">
        <h3>Concepts: ${entry.concept}</h3><br>
        <h5>Date: ${new Date(entry.date).toDateString()}</h5>
        </div>
        <div class="box">
        <p>Thoughts: ${entry.entry}</p><br>
        <p>Feels: ${displayMood.moodName}</p>
        </div>
        </div>
        </div>
        `
    }).join(" ")
}

eventHub.addEventListener("noteStateChanged", () => JournalList());



