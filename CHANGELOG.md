# Change log

This project follows [Semantic Versioning](http://semver.org/).

## [15.2.4] 2019-04-19
### Fixed
- Enabled generation of soure cmaps for the FHIR support files.

## [15.2.3] 2019-04-15
### Fixed
- Improved error handling and reporting for LForms.util.getFHIRServerReleaseID.

## [15.2.2] 2019-04-05
### Fixed
- Corrected a problem with detecting which version of FHIR was being used by a
  FHIR server.

## [15.2.1] 2019-03-27
### Removed
- Excluded unnecessary files from the npm package.

## [15.2.0] 2019-03-26
### Added
- The build process has been changed to use npm packages, in preparation for
  registering this package on npm.  (At this point, this package should be ready
  for being registered, which we will do soon.)  It is not expected that this is
  a breaking change.

## [15.1.0] 2019-03-22
### Added
- Support for the questionnaire-observationLinkPeriod extenstion for
  pre-population.  (Extraction is not yet supported.)

## [15.0.1] 2019-03-20
### Fixed
- This is a fix for calculated expressions in the Safari browser.  (Chrome, Edge,
  and Firefox were working).

## [15.0.0] 2019-03-20
### Changed
- Updated the jquery-ui package to 1.12.1 from 1.11.4, which is a breaking
  change for that package.  Since jQuery is a global variable, this is
  potentially a breaking change for users of the lforms package.  The lforms
  APIs themselves are unchanged.

## [14.2.0] 2019-02-13
### Added
- Added code and system attributes to unit, to align with FHIR specs.

## [14.1.4] 2019-02-07
### Changed
- Fix typo in url for FHIR unit option.

## [14.1.3] 2019-01-29
### Changed
- Fixed unit conversions to store the unit lists in unitOption extensions and
  change the data type to quantity. Used initial.valueQuantity.unit to store the
  lforms default value. If no default is found, the first unit in the list is set to
  default.
- Refactored the code to reduce some duplication in STU3 and R4.

## [14.1.2] 2019-01-25
### Fixed
- The BMI "calculationMethod" can now handle "[in_i]" as a unit.

## [14.1.1] 2019-01-23
### Changed
- Standard Questionnaire exports for R4 now contain '4.0' (instead of '3.5') as
  the FHIR version.
- Standard QuestionnaireResponse exports now include meta.profile.
- Exceptions raised for problems with detecting the version of a FHIR resource
  are now Error objects instead of strings.

## [14.1.0] 2019-01-22
### Added
- Added an option to specify the subject for an exported FHIR resource.

## [14.0.1] 2019-01-15
### Fixed
- Removed some outdated documentation from form_definitions.md.
- Reorganized some code (but not in a way the affects public APIs).

## [14.0.0] 2018-12-22
### Changed.
- The "themes" css file is now in a separate file from the lforms.min.css file
  in the distribution, to avoid making that larger than necessary.  It has also
  been removed from bower.json, so that themes.css will no longer be
  automatically pulled in with things like wiredep.  (This is possibly a breaking
  change for someone, and is the reason for the major-version increase.)
- The autocomplete-lhc package is now being pull in via npm.

## [13.10.2] 2018-01-10
### Fixed
- Now handles FHIR QuestionnaireResponse items that do not have answers.

## [13.10.1] 2018-01-09
### Fixed
- Corrected version number in bower.json.

## [13.10.0] 2018-01-08
### Added
- Support for the FHIR extension "variable" has been added, but as with the
  "questionnaire-initialExpression" and "questionnaire-calculatedExpression"
  support is currently limited to FHIRPath-based expresions.

## [13.9.1] 2019-01-02
### Fixed.
- Fixed errors in parsing argonaut questionnaire extensions with support for item.option.extension-score.

## [13.9.0] 2018-12-15
### Added
- FHIR Questionnaire contained ValueSet support.

## [13.8.0] 2018-11-30
### Added.
- Added support for the questionnaire-hidden extension
    http://hl7.org/fhir/StructureDefinition/questionnaire-hidden
  A good test example is:
    https://argonautproject.github.io/questionnaire/Questionnaire-questionnaire-example-asq3.html

## [13.7.2] 2018-12-12
### Fixed
- FHIR value quantity import/export
- Misc fixes.

## [13.7.1] 2018-12-07
### Fixed
- FHIRPath intialization has been corrected, so that the context passed in is
  now the item on which the expression is attached, and %resource is set to the
  QustionnaireResponse object.

## [13.7.0] 2018-12-06
### Added.
- Added support for enableWhen and initial(x) in R4.

## [13.6.0] 2018-12-04
### Added
- Support the FHIR extension "questionnaire-initialExpression".

## [13.5.0] 2018-11-26
### Added
- A new function LForms.Util.guessFHIRVersion(fhirResource) which looks at the
  structure of the resource to guess the version of FHIR being used.
- Made a previously internal function,
  LForms.Util.detectFHIRVersion(fhirResource), public.  This function looks at
  the meta.profile field to determine the FHIR version of the resource.
- Made a previously internal function,
  LForms.Util.validateFHIRVersion(version), public.  This function checks to see
  if the given version is supported by LForms and if the needed auxiliarly
  lformsFHIR.min.js file has been loaded.
### Fixed
- In the pre-built files placed on
  https://clinicaltables.nlm.nih.gov/lforms-versions/, the FHIR auxiliary files
  were missing from 13.4.0 and possibly earlier.

## [13.4.0] 2018-11-14
### Added
- Added support for the FHIR questionnaire-launchContext extension in R4.

## [13.3.0] 2018-11-08
### Added
- Added support for answerValueSet and answerOption in R4.
### Changed
- Separated test suites and fixtures for R4 and STU3 versions.
### Fixed.
- Removed hard coding of loinc code system in answerOption/option valueCoding
object.

## [13.2.0] 2018-10-24
### Added
- LForms.Util.addFormToPage can now accept a form defintion object as its first
  argument rather than just a variable name that holds that object.
### Fixed
- There were several problems with the FHIR APIs in LForms.Util.  Tests were
  testing lower-level methods rather than the public APIs, which is how that
  escaped notice.

## [13.1.0] 2018-10-16
### Added
- The start of support for FHIR R4, in the form of copy of STU3 (so no real R4
  support yet, except for questionnaire-calculatedExpression support which we
  added in 12.12.0).

## [13.0.1] 2018-10-16
### Fixed
- An issue with the "grunt test" task introduced in 13.0.0.  (The build was not
  run prior to the tests.)

## [13.0.0] 2018-10-15
### Changed
- Reorganized the FHIR functions to facilitate support for multiple versions of
  FHIR.  (This should not be a breaking change if you are not using FHIR).

## [12.13.0] 2018-10-02
### Fixed
- Fixed data type for items with units.
### Added
- Added support for TX data type and "text" item type in Questionnaire.

## [12.12.2] 2018-09-26
### Fixed
- Updated FHIRPath to 0.8.0.

## [12.12.1] 2018-09-21
### Fixed
- Fixed a bug that answers of repeating items in QuestionnaireResponse are
  not handled correctly.

## [12.12.0] - 2018-09-19
### Added
- Support for the FHIR Questionnaire resource extension
  questionnaire-calculatedExpression.  This requires the fhirpath.js library,
  which is now packaged with LForms, but as a separate file,
  app/scripts/fhirpath/fhirpath.min.js.

## [12.11.0] 2018-08-13
### Added
- Added a 'linkId' field in items.

## [12.10.4] 2018-08-14
### Fixed
- The BL (boolean) data type now works correctly, and is displayed as a
  checkbox.

## [12.10.3] 2018-08-07
### Fixed
- The background color for textarea based fields.

## [12.10.2] 2018-07-19
### Fixed
- The protractor tests stopped running in Firefox, and a fix is not yet
  available, so the tests were revised to run in Chrome.

## [12.10.1] 2018-05-16
### Changed
- Upgraded autocomplete-lhc package to 16.0.0.
### Fixed
- Fixed problem with validity of FHIR output by stripping nulls from the resource.

## [12.10.0] 2018-05-02
### Changed
- Treated data type TX same as ST.
- Used TEXTAREA for items with ST data type instead of INPUT.

## [12.9.3] 2018-03-22
### Fixed
- Accessibility issue with the announcing of validation errors by a screen
  reader.

## [12.9.2] 2018-03-16
### Fixed
- Accessibility issue with the announcing of date picker buttons by a screen
  reader.

## [12.9.1] 2018-03-12
### Fixed
- Several accessibility issues were fixed, including the reading of inline help
  and questions and answers for radio buttons and checkboxes.

## [12.9.0] 2018-02-22
### Changed
- Added an option to export LForms data in a standard FHIR QuestionnaireResponse resource
  without any extensions.
- Changed related functions definitions in LForms.Util

## [12.8.2] 2018-02-09
### Changed
- Modified the TOTALSCORE function to support multiple TOTALSCORE rules on one form.

## [12.8.1] 2018-01-30
### Changed
- Added an option to export LForms data in a standard FHIR Questionnaire resource without
  any extensions.

## [12.8.0] 2018-01-24
### Added
- Added an option to export LForms data in a FHIR Bundle with a DiagnosticReport resource and
  associated Observation resources.
- Added supporting functions for FHIR Bundle.
- Added new functions under LForms.Util for exporting/importing to/from FHIR resources.
- Added documentations for LForms.Util functions in form_definition.md.

## [12.7.1] 2018-01-02
### Fixed
- Added an FHIR Questionnaire extension for externallyDefined.

## [12.7.0] 2017-12-20
### Changed
- Changed the linkId of FHIR Questionnaire item to be the _codePath of LForms' item, and updated
  related conversion functions between FHIR data and LForms data.
- Added an FHIR extension to support repeating answers in FHIR Questionnaire.
- Added support for multiple answers for the initial values of an FHIR Questionnaire.

## [12.6.1] 2017-12-08
### Fixed
- Fixed z-index of icon in date input field to go behind any calendar widget coming on the top.

## [12.6.0] 2017-10-23
### Added
- Added conversion of externallyDefined field in LForms to store it in FHIR questionnaire resource.

## [12.5.3] 2017-10-19
### Changed
- Changed our internal development environment shell from tcsh to bash.

## [12.5.2] 2017-09-29
### Fixed
- Fixed an accessibility issue with plain-text popups.  Popups with HTML (e.g.
  HTML-encoded help) are still not completely read.

## [12.5.1] 2017-08-25
### Fixed
- Fixed a bug in FHIR QuestionnaireResponse convert function to handle cases where
  items with units could have data types as "ST"

## [12.5.0] 2017-08-25
### Added
- Added support to convert a FHIR Questionnaire resource to LForms format.

## [12.4.2] 2017-08-17
### Changed
- Moved themeList.js, which is just for demos, out of the test directory and
  into app/scripts, so that other applications (e.g. our demo site) can make use
  of it.

## [12.4.1] 2017-08-14
### Fixed
- Fixed the calendar next/previous buttons under themes for IE.

## [12.4.0] 2017-07-31
### Added
- Added cyan and teal color themes.
- Added color theme coffee.

## [12.3.1]  2017-07-27
### Fixed
- The autofill for list fields with only a single list item had been
  accidentally disabled by previous changes.

## [12.3.0]  2017-07-07
### Changed
- Added support back for validations of items in horizontal tables.

## [12.2.0]  2017-07-06
### Changed
- Added support back for displayControl.colCSS of items in formHeaderItems.

## [12.1.0]  2017-06-28
### Changed
- CSS styles in displayControl.css can now be applied to the item.

## [12.0.0]  2017-06-22
### Changed
- The HL7 v2 output has changed.  In particular, for questions with repeating
  answers, each answer is now in a separate OBX record.
- Added a themes capability, with two new themes.
- List fields whose data comes from an external source (via the URL in the
  "externallyDefined" property) have a revised format for the content of the
  AngularJS data model.  This will only affect you if you are accessing the data
  model directly.  The change is that any extra data properties for a selected
  item (other than the "text" and "code" properties) are now placed inside
  value.data, instead of directly on the item value object.

## [11.5.0]  2017-05-18
### Added
- Added support for disabling CNE/CWE items (autocomplete input fields or radio buttons/checkboxes)
- Added support for displaying coding instructions and copyright info on the section headers of
  horizontal tables and matrix tables.

## [11.4.3]  2017-05-24
### Fixed
- Addressed some accessibility issues.

## [11.4.2]  2017-05-18
### Fixed
- Added checking for questions in form header when generating HL7 and FHIR data.

## [11.4.1]  2017-05-10
### Changed
- Used autocomplete-lhc v13.0.0 and changed the way to handle modified
  display text for answers.

## [11.4.0]  2017-05-08
### Changed
- Added support for non-clickable headers in lists (when the list items are
  defined in the form).

## [11.3.0]  2017-05-02
### Changed
- Added supports for FHIR SDC Questionnaire and QuestionnaireResponse

## [11.2.1]  2017-04-27
### Fixed
- There was a problem with the handling of defaultAnswer for radio buttons and
  checkboxes.

## [11.2.0]  2017-04-24
### Added
- Support for default answers for questions via the defaultAnswer field in
  the form definition.

## [11.1.1]  2017-04-14
- Used a different library (element resize detector) for checking
  the container element's size, which can handle multiple rendered
  forms on a page.

## [11.1.0]  2017-03-27
### Added
- Added a viewMode option to the form and to the individual items to
  control the layout

## [11.0.5]  2017-03-20
### Fixed
- Fixed a bug in URL data type parsing.

## [11.0.4]  2017-03-06
### Changed
- Added a resize event listener on the container element to make the form
  responsive in cases where container's size changes without a change in
  window size.

## [11.0.3]  2017-03-03
### Changed
- Changed some background color on section headers and buttons
- Made the form responsive to the container's size, not the screen's size

## [11.0.2]  2017-03-02
### Fixed
- Default values are now handled for questions whose answers are presented as
  radio buttons.
- Also eliminated an unnecessary copy of answer data for the case when there is
  no label value for the answers.
- Corrected missing fonts in the pre-compiled version.
- Fixed display issues with the icon buttons.

## [11.0.1]  2017-02-24
### Changed
- Fixed the styles for forms where a question contains questions of sections

## [11.0.0]  2017-02-08
### Changed
- Redesigned the form template to make it responsive

## [10.0.0]   2016-12-06
### Changed
- Changed OBX4 value calculation method in HL7 messages.

## [9.0.2]   2016-12-05
### Changed
- Updated a test form, and added a test to make sure a problem with the
  autocompletion stays fixed.

## [9.0.1]   2016-11-22
### Changed
- Changed the default style of TITLE row to be same as section headers.

## [9.0.0]   2016-11-17
### Changed
- Updated the autocomplete-lhc package to version 10, in which URLs for search
  autcompleters now take a "maxList" parameter (in place of, but with opposite
  meaning to, the "autocomp" parameter).  Forms with URLs for search lists might
  need to be updated, or more likely the servers handling the URLs will need to
  be changed to handle the new parameter, which is the reason for the major
  version increment on this package.  The [Clinical Table Search
  Service](https://clin-table-search.lhc.nlm.nih.gov) supports the new
  autocomplete-lhc version with the addition of newer API URLs (v3 and higher).

## [8.1.2]   2016-11-08
### Fixed
- Fixed a bug in getting form data without questions that have empty values.

## [8.1.1]   2016-11-02
### Changed
- Changed a FHIR data processing function's name.

## [8.1.0]   2016-10-28
### Added
- Added preliminary support for generating FHIR DiagnosticReport data and merging
  it back into a form.

## [8.0.0]   2016-09-21
### Changed
- Updated the design and docs of the data control function.

## [7.6.1]   2016-09-21
### Fixed
- Renamed the CSS class 'empty-question' to 'lf-empty-question' to avoid
  possible confusion.

## [7.6.0]   2016-08-12
### Added
- Added support for setting the code systems for the form and for questions.

## [7.5.0]   2016-08-09
### Added
- Added support for a new data type, NR (numeric range).

## [7.4.1]   2016-08-08
### Fixed
- Prevented HTML tags in listColHeaders from rendering, to reduce the risk
  of XSS attacks.

## [7.4.0]   2016-08-05
### Added
- Added an option to hide the Units column/field.

## [7.3.0]   2016-08-04
### Added
- A listColHeaders option for specifying column headers to appear over the lists
  for search fields (lists specified with "externallyDefined").

## [7.2.0]   2016-08-01
### Added
- Added an optional codingInstructionsFormat field on item level to specify
  the format of coding instructions for each individual item.

### Fixed
- Added a missing polyfill.js file that should have been in 7.1.1.

## [7.1.1]   2016-07-29
### Changed
- Uncoded CWE values rendered as HL7 are now placed into OBX5.9.
- Adjusted formatting of HL7 output to allow the message lines to wrap after a
  repeat.

## [7.1.0]   2016-07-21
### Added
- The code system of an answer list can now be specified in "answerCodeSystem"
  on individual items in a form definition.

## [7.0.0]   2016-07-13
### Added
- User data validations based on dataType and restrictions

### Changed
- Use a single namespace, LForms, for all LForms functions and objects.

## [6.1.3]   2016-06-13
### Fixed
- Another CSS fix for IE.  This is a fix for the placeholder text for textareas,
  and should have been fixed as a part of the 6.1.1 changes, but was missed.

## [6.1.2]   2016-06-09
### Fixed
- Updated the autocomplete-lhc dependency (to 9.0.1) to get some fixes.

## [6.1.1]   2016-06-02
### Fixed
- Two CSS fixes for IE.

## [6.1.0]   2016-05-13
### Added
- Added a function to export user data in HL7 segments (in progress).

## [6.0.2]   2016-05-10
### Fixed
- Turned on "minification" of the distribution version of the JavaScript.

## [6.0.1]   2016-05-04
### Fixed
- Updated Protractor to work with new version of Firefox, and updated some
  tests to work with the new Protractor.

## [6.0.0]   2016-04-21
### Added
- A getFormData function to get complete form definition data, including
  user input data.
- Events are emitted when a repeating item or section is added or removed.

### Changed
- The existing getFormData function is renamed to getUserData.

## [5.7.0]   2016-04-19
### Added
- A 'list' template.
- A 'matrix' layout for section items, in addition to 'horizontal' and
  'vertical'.
- A attribute 'answerLayout' in the 'displayControl' field for items
  that have answers.
- A 'displayControl' field in 'templateOptions' at the form level.

### Changed
- All existing template names are combined into a new 'table' template
- The existing 'layout' field is renamed as 'questionLayout' and moved
  into the 'displayControl' field.

## [5.6.1]   2016-04-01
### Changed
- Field hints for search autocompleters were changed to read "Search for... "
  rather than "Select... " because for search autocompleters the user does not
  see a list until the first couple of characters are typed.

## [5.6.0]   2016-03-29
### Removed
- WidgetUtil.preprocessRIData.  This was an internal API, so it should not be
  a breaking change for anyone but ourselves.

