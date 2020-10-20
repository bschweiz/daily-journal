/*
 *   Journal data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

const journal = [
    {
        id: 1,
        date: "07/24/2020",
        concept: "HTML & CSS",
        entry: "We talked about HTML components and how to make grid layouts with Flexbox in CSS.",
        mood: "Ok"
    },
    {
        id: 2,
        date: "07/25/2020",
        concept: "Flexbox Layouts in CSS",
        entry: "Learned about the different ways Flexbox can be used to style elements on the page, played a froggy game for practice.",
        mood: "Tired"
    },
    {
        id: 3,
        date: "07/26/2020",
        concept: "DOM",
        entry: "Learned about the Document Object Model.",
        mood: "Restless"
    },
    {
        id: 4,
        date: "07/27/2020",
        concept: "Javascript",
        entry: "We learned some basic functions in java script, practiced some if/else statements, learned about console logging.",
        mood: "Sleepy"
    },
   

]
/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
export const useJournalEntries = () => {
    const sortedByDate = journal.sort(currentEntry, nextEntry) => 
        Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
   )
    return sortedByDate
}
