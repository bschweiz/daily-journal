

import { useMoods } from "./MoodProvider.js"

const contentTarget = document.querySelector(".formTarget")
const eventHub = document.querySelector("#container")


export const JournalFormComponent = () => {
    render ()
}
eventHub.addEventListener("noteStateChanged", () => JournalFormComponent());


const render = () => {
    const moodArray = useMoods();
        const dropdownHTML = moodArray.map((mood) => {
        return `<option value="${ mood.id }">${ mood.moodName }</option>`
            })
            .join(" ")

    contentTarget.innerHTML = `
    
    <div class="daily-entry-box">
    <div class="horiz-box">
        <div class="current-date">
            <h3>Enter Today's Date:</h3> 
    
            <fieldset>
                <label for="journalDate"></label>
                <input type="date" name="journalDate" id="journalDate">
            </fieldset>
        </div>
        <div class="topics-covered">
            <h3>Topics Covered:</h3>
        
            <fieldset>
                <label for="topicsCovered"></label>
                <input type="text" name="topicsCovered" id="topicsCovered">
            </fieldset>
        </div>
    </div>
    
        <h2>Write your experiences here:</h2>                            
            <div class="horiz-box">
                <textarea id="entryText" class="journal-entry" placeholder="write today's thoughts here..."></textarea> 
            </div>
    <div class="horiz-box" id="mood-and-submit-enclosing">
            <div class="mood-selector">
                <h3>My Mood:</h3>
    
                <h4>Today I felt</h4>
                    <select id="moodList">
                    <option value="0">Choose a Mood...</option>`
                    + `${dropdownHTML}` + `
                    </select>
            </div>
            <div 5lass="submit-button box">
                <button id="saveButton"><h3>click here to submit your journal entry</h3></button>
            </div>
    </div>
    </div>    
    
    `
}

// eventHub.addEventListener("noteStateChanged", () => NoteForm());
