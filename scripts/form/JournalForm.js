
const contentTarget = document.querySelector(".formTarget")
const eventHub = document.querySelector(".container")


export const JournalFormComponent = () => {
    render ()
}

const render = () => {
    contentTarget.innerHTML = `
    <form>
    <section class="daily-entry-box">
    <div class="horiz-box" id="date-and-topics-enclosing">
        <div class="current-date box">
            <h3>Enter Today's Date:</h3> 
    
            <fieldset>
                <label for="journalDate"></label>
                <input type="date" name="journalDate" id="journalDate">
            </fieldset>
        </div>
        <div class="topics-covered box">
            <h3>Topics Covered:</h3>
        
            <fieldset>
                <label for="topicsCovered"></label>
                <input type="text" name="topicsCovered" id="topicsCovered">
            </fieldset>
        </div>
    </div>
    
        <h2>Write your experiences here:</h2>                            
        <label for="journalEntry"></label>
        <textarea class="journal-entry box" placeholder="write today's thoughts here..."></textarea> 
    
    <div class="horiz-box" id="mood-and-submit-enclosing">
        <div class="mood-selector box">
            <h3>My Mood:</h3>
    
            <label for="moodSelector">Today I felt</label>
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
    </section>    
    </form>
    `
}

// eventHub.addEventListener("noteStateChanged", () => NoteForm());
