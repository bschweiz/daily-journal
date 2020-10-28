
const contentTarget = document.querySelector(".formTarget")
const eventHub = document.querySelector(".container")


export const JournalFormComponent = () => {
    render ()
}

const render = () => {
    contentTarget.innerHTML = `
    
    <div class="daily-entry-box box">
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
                <textarea class="journal-entry" placeholder="write today's thoughts here..."></textarea> 
            </div>
    <div class="horiz-box" id="mood-and-submit-enclosing">
            <div class="mood-selector">
                <h3>My Mood:</h3>
    
                <h4>Today I felt</h4>
                    <select name="moods" id="moodlist">
                        <option>tired</option>
                        <option>focused</option>
                        <option>stressed</option>
                        <option>sleepy</option>
                        <option>content</option>
                        <option>motivated</option>
                        <option>drowsy</option>
                    </select>
            </div>
            <div class="submit-button box">
                <button><h3>click here to submit your journal entry</h3></button>
            </div>
    </div>
    </div>    
    
    `
}

// eventHub.addEventListener("noteStateChanged", () => NoteForm());
