# ICT Lab Loan Desk

Inventory and equipment loan register for the ICT Laboratory at Karelia University of Applied Sciences.
It keeps track of the lab's devices, records who has borrowed what, produces the paper loan record for signing, and helps check equipment back in.

**Live site:** https://sakibkhan-karelia.github.io/ict-lab-loan-desk/

## Features

### Inventory
- Add devices with name, category, serial / asset number, amount in stock and notes.
- Change stock amounts straight in the table (− / + or type a number). Stock can't go below what is on loan.
- Edit or delete devices. A device can't be deleted while some of it is on loan.
- See for every device how many are **in stock**, **on loan** and **available**.
- **Search** by name, category, serial number or notes.
- **Advanced search**: filter by category (including "No category"), by availability (available, none available, some on loan), and choose which field the search text looks in.
- **Sort by**: newest added, oldest added, recently modified, name A–Z / Z–A, category, most / least available, most in stock, most on loan. The choice is remembered.
- **Manage categories**: rename or remove a category. All devices in it are updated. Renaming into an existing category merges the two.
- Click a category in the table to show only that category.
- **Export to Excel**: the whole inventory as a spreadsheet.

### New loan
- Fields follow the paper form: Name(s), Group, Course, Start date, End date, plus Contact and Notes (not printed).
- Pick devices from the inventory with number and serial number. You can't lend more than is available.
- After saving: **Download PDF**, **Download Excel**, **Print** or **Email to borrower**.

### Loan record (PDF / Excel / Print)
- Same layout as the paper "ICT Laboratory Equipment Loan Record" (A4 landscape, 10 item lines, signature boxes left blank for signing).
- Loans with more than 10 items continue on a second page.
- **Print** opens the PDF with the print dialog. Allow pop-ups for the site if the browser blocks it.

### Email to borrower
- Uses the email address in the loan's **Contact** field (an email and a phone number can be written together).
- Downloads the Excel loan record and opens your email app with recipient, subject and a message listing the equipment and return date already filled in. Attach the downloaded file and press Send.
- Loans without an email show **Add email** in the Loans page.

### Loans and returns
- Tabs for **Out now**, **Overdue**, **Returned** and **All**, plus search by name, group, course, device or serial.
- Open a loan to download, print or email its record again.
- **Return check**: enter how many of each item came back, or use **All back** / **Mark everything back**. Partial returns keep the loan open and show what is still missing. When everything is back the loan closes and the equipment counts as available again.
- Return notes for damage, missing cables and so on.

### General
- Sidebar with lab totals: units in stock, out on loan, available now and overdue loans.
- Karelia green theme with **Light**, **Dark** and **Auto** modes (button at the bottom of the sidebar).
- Works on phones and narrow windows.

## Where the data is stored

This repository only holds the app. **No student, loan or inventory data is stored here.** It is safe for this repository to be public:
visitors only get an empty app that saves in their own browser.

The app saves its data to a `data.json` file in a separate **private** repository (`SakibKhan-Karelia/ict-lab-loan-data`).
Every change is a commit there, so the data repository also keeps a full history of who borrowed what and when.

### Connecting a browser

1. Create a fine-grained personal access token at <https://github.com/settings/personal-access-tokens/new>:
   - Repository access: **Only select repositories**, then choose `ict-lab-loan-data`.
   - Repository permissions: **Contents: Read and write**.
2. Open the site, press **Set up GitHub storage**, paste the token and press **Connect**.
3. The status at the bottom of the sidebar should say **Saved to GitHub**.

The token is kept in that browser only. Do this once on each computer you use.

### Keeping the data safe
- Never share the token or put it in this repository.
- On shared or lab computers, press the storage status button and choose **Disconnect this browser** when you are done.
- If a token may have leaked, delete it at <https://github.com/settings/personal-access-tokens> and create a new one.
- When the token expires, the app shows an error. Create a new token and paste it in the same panel.

Without a token the app still works, but saves only in that browser.

## Editing the app

| File | What it is |
| --- | --- |
| `loan-desk.html` | The app source: layout, styles and code in one file. Edit this one. |
| `index.html` | The page GitHub Pages serves. Generated from `loan-desk.html`, don't edit by hand. |
| `build.mjs` | Builds `index.html` from `loan-desk.html`. |
| `karelia-logo.png` | Logo shown in the sidebar. |

After changing `loan-desk.html`, rebuild and commit both files (needs [Node.js](https://nodejs.org/)):

```bash
node build.mjs
```

```bash
git add loan-desk.html index.html
git commit -m "Describe the change"
git push
```

GitHub Pages updates the live site about a minute after the push. Press Ctrl+F5 in the browser to see the new version.

The app uses [jsPDF](https://github.com/parallax/jsPDF) for PDF files and [ExcelJS](https://github.com/exceljs/exceljs) for Excel files, loaded from cdnjs.

## Changelog

New features are listed here, newest first.

- **2026-11-04**: Print and Email to borrower for loan records; Add email for older loans.
- **2026-11-03**: Sort by dropdown; category manager (rename / remove); Category column and Advanced search; full-width layout with green sidebar and page header; Karelia logo and green theme; Light / Dark / Auto theme; storage in a private GitHub repository; first version with inventory, loans, return check and PDF / Excel export.
