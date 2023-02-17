"use strict";
exports.__esModule = true;
var Note_1 = require("../theory/src/Note");
var PitchClass_1 = require("../theory/src/PitchClass");
var note = new Note_1["default"](new PitchClass_1["default"](4));
note.printNote();
