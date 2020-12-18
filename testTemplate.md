---
pdf_options:
  format: A4
  margin: 30mm 20mm
  printBackground: true
  headerTemplate: |-
    <style>
      section {
        margin: 0 auto;
        font-family: system-ui;
        font-size: 11px;
      }
    </style>
    <section>
      <span class="date"></span>
    </section>
  footerTemplate: |-
    <section>
      <div>
        Page <span class="pageNumber"></span>
        of <span class="totalPages"></span>
      </div>
    </section>
---
# Some headline

some paragraph text, and shit.. 

## A table:

| Syntax      | Description |
| ----------- | ----------- |
| Header      | Title       |
| first value | {{value}}   |
| other value | {{another.value}} |
| Paragraph   | Text        |
| Paragraph   | Text        |
| Paragraph   | Text        |
| Paragraph   | Text        |