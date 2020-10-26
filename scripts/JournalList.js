import { getJournalEntries, useJournalEntries } from "./JournalDataProvider.js"

const pastEntriesContainer = document.querySelector(".past-entries")
const eventHub = document.querySelector(".container")

export const JournalList = () => {
    getJournalEntries()
    .then(() => {
        const allPastEntries = useJournalEntries()
        render(allPastEntries)
    })
}

const render = (rawArray) => {
    
        let entryHTMLRepresentations = ""
        for (const entry of rawArray) 
        {
            entryHTMLRepresentations += `
            <div class="entryCard">
                <div class="note horiz-box">
                <div class="box">
                    <h3>Concepts: ${entry.concept}</h3>
                    <h5>Date: ${new Date(entry.date).toDateString()}</h5>
                </div>
                    <div class="box">
                        <p>Thoughts: ${entry.entry}</p>
                        <p>Feels: ${entry.mood}</p>
                        </div>
                    </div>
            </div>`
            entry.id
        }
        pastEntriesContainer.innerHTML = `
            <section class="entriesList">
            <h3>PAST ENTRIES</h3>
            <br>
            
            ${entryHTMLRepresentations}
            
            </section>
            `
    
}