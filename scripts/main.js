import { getJournalEntries } from "./JournalDataProvider.js";
import { JournalList } from "./JournalList.js";
import { JournalFormComponent } from "./form/JournalForm.js"
import { getMoods } from "./form/MoodProvider.js"

console.log("Welcome to Da Main Module");



getJournalEntries();

getMoods()
    .then(() => JournalFormComponent());

JournalList();