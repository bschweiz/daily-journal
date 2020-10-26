import { getJournalEntries } from "./JournalDataProvider.js";
import { JournalList } from "./JournalList.js";
import { JournalFormComponent } from "./form/JournalForm.js"

console.log("Welcome to Da Main Module");



getJournalEntries();

JournalFormComponent();

JournalList();