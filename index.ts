import Note from "../theory/src/Note"
import PitchClass from "../theory/src/PitchClass";


//inputRow will have structure 
//[
//{
//  prob: 0.2;
//  chord: ChordType
//},
//{
// prob: 0.8,
// chord: ChordType
//},
//]
function getNextChord(inputRow) {
  let seed = Math.random();
  for (let i = 0; i < inputRow.length; i++) {
    if (seed < inputRow[i].prob) {
      return inputRow[i].chord;
    }
  }
}

let note = new Note(new PitchClass(4));
note.printNote();

