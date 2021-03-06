var R4_cneDataTypeFixture = {
  
  input: {
    "questionCode": "54131-8",
    "questionCardinality": {"min": "1","max": "1"},
    "question": "Gender",
    "answers": [
      {"text": "Male","code": "LA2-8"},
      {"text": "Female","code": "LA3-6"},
      {"text": "Other","code": "LA46-8","other": "Please Specify"}
    ],
    "answerCardinality": {"min": "1","max": "1"},
    "dataType": "CNE",
    "questionCodeSystem": "LOINC",
    "_codePath": "/54126-8/54131-8",
    "_idPath": "/1/1"
  },
  
  output: {
    required: undefined,
    linkId: "/54126-8/54131-8",
    text: "Gender",
    type: "choice",
    code: [
      {
        system: "http://loinc.org",
        code: "54131-8",
        display: "Gender"
      }
    ],
    answerOption: [
      {
        valueCoding: {code: "LA2-8",display: "Male"}
      },
      {
        valueCoding: {code: "LA3-6",display: "Female"}
      },
      {
        valueCoding: {code: "LA46-8",display: "Other"}
      }
    ]
    
  }
};

var R4_alWithCodeSystemFixture = {

  input: {
    "questionCodeSystem": "LOINC",
    "questionCode": "qc",
    "question": "dummy",
    "questionCardinality": {"min": "1","max": "1"},
    "answers": [{"text": "X","code": "x"},{"text": "Y","code": "y"},{"text": "Z","code": "z","other": "Please Specify"}],
    "dataType": "CNE",
    "answerCodeSystem": "LOINC",
    "_codePath": "/a/a",
    "_idPath": "/1/1"
  },

  output: {
    code: [{system: "http://loinc.org",code: "qc",display: "dummy"}],
    linkId: "/a/a",
    text: "dummy",
    type: "choice",
    answerOption: [
      {valueCoding: {code: "x",display: "X", system: "http://loinc.org"}},
      {valueCoding: {code: "y", display: "Y", system: "http://loinc.org"}},
      {valueCoding: {code: "z", display: "Z", system: "http://loinc.org"}}
    ],
    required: undefined
  }
};
