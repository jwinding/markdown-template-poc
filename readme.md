# A proof of concept for a markdown template to PDF service

Uses the library md-to-pdf, which very simply generates pdfs from markdown.
Then I define a simple 'template language' where strings inside {{}} gets replaced by the corresponding JSON value from an accompanying JSON object. I.e. if the JSON object contains { value: "hello" }, then the string {{value}} will be replaced by "hello" in the resulting pdf.

To run a simple test, run "yarn" and then "yarn start". 
