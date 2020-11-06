/*
 *   Journal data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */
const eventHub = document.querySelector("#container")
/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
let entriesArray = []
// sortedByDate = journalArray.sort()
// return sortedByDate

export const getJournalEntries = () => {
    return fetch("http://localhost:8088/entries") // Fetch from the API
    .then(response => response.json())  // Parse as JSON
    .then(updatedEntries => {
        entriesArray = updatedEntries
        // What should happen when we finally have the array?
        console.log(entriesArray);
    })
}

export const useJournalEntries = () => {
    return entriesArray.slice()
}

export const saveEntry = entry => {
    return fetch('http://localhost:8088/entries', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(entry)
    })
    .then(getJournalEntries)
    .then(dispatchStateChangeEvent)
}
let moodChosen = 4 
// eventHub.addEventListener("change", changeEvent)
// Handle browser-generated click event in component
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveButton") {
        const concept = document.getElementById("topicsCovered").value
        const date = document.getElementById("journalDate").value
        const entry = document.getElementById("entryText").value
        const moodId = parseInt(document.getElementById("moodList").value)
        // const moodId = moodChosen
        // Make a new object representation of a note
        const newEntry = {
            concept,
            date,
            entry,
            moodId,
            // Key/value pairs here
        }
        // Change API state and application state
        saveEntry(newEntry)
    }
        
})

const dispatchStateChangeEvent = () => {
    const noteStateChangedEvent = new CustomEvent("noteStateChanged")

    eventHub.dispatchEvent(noteStateChangedEvent)
} 