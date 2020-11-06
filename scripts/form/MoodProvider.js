// Only parks with lat, long and image

// import { useJournalEntries } from "../JournalDataProvider"


let allMoods = []

export const useMoods = () => {
  return allMoods.slice()
}

export const getMoods = () => {
  return fetch('http://localhost:8088/moods')
    .then((response) => response.json())
    .then((parsedMoods) => {
        allMoods = parsedMoods
    })
      // debugger
}

// i feel like the "legit" way to do it is like the Holiday Road site, below:

// const eventHub = document.querySelector("#container")
// const parkSelectElement = document.querySelector("#parksFilter")

// export const parkSelect = () => {
//   return getParks().then(() => {
//     const parks = useParks()
//     parksSelectHTML(parks)
//   })
// }



// Custom "change" event. Every time we select a park, broadcasts the value of the park to the event object so we know which park to render in preview
// eventHub.addEventListener("change", (changeEvent) => {
//   if (changeEvent.target.id === "parksFilter") {
//     const customEvent = new CustomEvent("parkSelect", {
//       detail: {
//         parkThatWasChosen: changeEvent.target.value,
//       },
//     })
//     eventHub.dispatchEvent(customEvent)
//     console.log(customEvent)
//     // console.log(changeEvent)
//   }
// })

// eventHub.addEventListener("itineraryStateChanged", () => {
//   parkSelect();
// })
