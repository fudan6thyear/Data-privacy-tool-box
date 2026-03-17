# data compiance tool box

Version `v0.1` is a static web prototype for documenting Records of Processing Activities in line with the UK ICO templates for controllers and processors.

## Included

- `index.html`: the web app entry page
- `styles.css`: responsive visual design
- `app.js`: role switching, dynamic forms, preview table, local draft persistence, and JSON export
- `ico-ropa-controller-template.xlsx`: official ICO controller template
- `ico-ropa-processor-template.xlsx`: official ICO processor template

## Current scope

- Switch between `Controller` and `Processor`
- Capture organisation, DPO, and representative details
- Add, duplicate, and remove processing activities
- Fill ICO-aligned activity fields for each role
- Preview activities in an ICO-style table
- Save drafts in browser `localStorage`
- Export the active role as JSON

## Run locally

Open [index.html](/Users/benjamin/Desktop/AI Practice/data-compliance-tool/index.html) directly in a browser, or serve the folder locally:

```bash
cd "/Users/benjamin/Desktop/AI Practice/data-compliance-tool"
python3 -m http.server 4173
```

Then visit `http://localhost:4173`.
