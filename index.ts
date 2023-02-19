import Note from "../theory/src/Note"
import PitchClass from "../theory/src/PitchClass";
// import MajorTriad from "../theory/src/chords/MajorTriad";

let matrix = {
  I: [{ prob: 0.5, chord: "IV" }, { prob: 0.5, chord: "V" }],
  IV: [{ prob: 0.9, chord: "V" }, { prob: 0.1, chord: "I" }],
  V: [{ prob: 0.0, chord: "IV" }, { prob: 1.0, chord: "I" }],
}
type MatrixBlock = { prob: number, chord: String };
type MatrixRow = MatrixBlock[];

function getNextChord(inputRow: MatrixRow) {
  let seed = Math.random();
  for (let i = 0; i < inputRow.length; i++) {
    if (seed < inputRow[i].prob) {
      return inputRow[i].chord;
    }
  }
}

let note = new Note(new PitchClass(4));
note.printNote();
console.log(matrix.I)
getNextChord(matrix.I)
