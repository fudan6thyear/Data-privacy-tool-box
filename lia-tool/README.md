# LIA Workbench

Static browser-based Legitimate Interest Assessment tool inspired by the visual language of the existing data compliance tool and structured around the ICO sample LIA template.

## Included

- `index.html`: app entry page
- `styles.css`: glass-panel visual system and responsive layout
- `app.js`: ICO-aligned field model, local draft persistence, sample data, decision support, JSON export, and Markdown report export

## Scope

- English / Chinese language switching
- Chinese labels, helper text, placeholders, and select/checklist options for all UI fields
- Assessment profile and ownership
- Purpose test
- Necessity test
- Balancing test
- Decision and sign-off
- Local browser storage
- JSON export
- Markdown report export
- Print / PDF review view

## Run locally

```bash
cd "/Users/benjamin/Desktop/AI Practice"
python3 -m http.server 4174
```

Then open:

- `http://127.0.0.1:4174/lia-tool/`
