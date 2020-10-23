/*
 *   Journal data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
let entriesArray = []
export const useJournalEntries = (journalArray) =>
 {
    sortedByDate = journalArray.sort()
    return sortedByDate
}

export const getJournalEntries = () => {
    return fetch("http://localhost:8088/entries") // Fetch from the API
        .then(response => response.json())  // Parse as JSON
        .then(updatedEntries => {
            entriesArray = updatedEntries
            console.log(entriesArray)
            // What should happen when we finally have the array?
        })
}