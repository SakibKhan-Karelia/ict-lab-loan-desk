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
- **Sort by** (default name A–Z): newest added, oldest added, recently modified, name A–Z / Z–A, category, most / least available, most in stock, most on loan. The choice is remembered.
- **Manage categories**: rename or remove a category. All devices in it are updated. Renaming into an existing category merges the two.
- Click a category in the table to show only that category.
- **Bar above the table**:
  - **Select** shows a checkbox on every device. The bar then offers **Select all** (every device shown, works with search and filters) and **Deselect**. When everything is selected, only **Deselect all** is shown. Deselect / Deselect all clear the selection and hide the checkboxes.
  - **Export to Excel**: with nothing selected, exports every device shown in the list; with a selection, only the selected devices.
  - **Delete** (bin icon, appears when something is selected): deletes the selected devices after a confirmation. Devices with units on loan are kept.

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

This repository only holds the app (and `users.json`, see Users below). **No student, loan or inventory data is stored here.** It is safe for this repository to be public:
visitors without a login can't see or change any data.

The app saves its data to a `data.json` file in a separate **private** repository (`SakibKhan-Karelia/ict-lab-loan-data`).
Every change is a commit there, so the data repository also keeps a full history of who borrowed what and when.

### Connecting a browser (owner)

1. Create a fine-grained personal access token at <https://github.com/settings/personal-access-tokens/new>:
   - Repository access: **Only select repositories**, then choose `ict-lab-loan-data` (and `ict-lab-loan-desk` if you use user logins, see below).
   - Repository permissions: **Contents: Read and write**.
2. Open the site, press **Set up GitHub storage** (or **Connect with your GitHub token** on the Sign in screen), paste the token and press **Connect**.
3. The status at the bottom of the sidebar should say **Saved to GitHub**.

The token is kept in that browser only. Do this once on each computer you use.

### Users (username and password logins)

One or two users can use the app in the owner's absence with a username and password. They don't need a GitHub account or token.
Users can use the whole app: inventory, loans and return checks. They can't manage users. Every change they save shows their username.

**One-time setup (owner):**
1. Edit your own token at <https://github.com/settings/personal-access-tokens> and add the repository **`ict-lab-loan-desk`** (Contents: Read and write), so the app can save the list of users.
2. Create a **second** fine-grained token just for users, for example "Loan desk users", at <https://github.com/settings/personal-access-tokens/new>:
   - Repository access: **Only select repositories**, then **`ict-lab-loan-data` only**.
   - Repository permissions: **Contents: Read and write**.
   - Don't use your own token for this. The user token can't touch the website.
3. In the app, press **Users** at the bottom of the sidebar, paste the user token and press **Save user token**.

**Adding, changing and removing users:** in the **Users** panel, add a username and a password (at least 12 characters), give **New password**, or **Remove**. Changes reach the website in about a minute.

**How users use it:** open the site, enter username and password, press **Sign in**. "Keep me signed in on this computer" keeps them signed in after the browser is closed; leave it off on shared computers. **Sign out** is under the status button at the bottom of the sidebar.

**Who did what:** every change is saved with the name of the person who made it ("· by anna" in the data repository history), and each loan shows **Lent by** and **Checked by**.

**How it works:** `users.json` in this repository holds, for each user, the user token encrypted with a key made from that user's password (PBKDF2-SHA256, 600 000 rounds, AES-GCM). The plain user token is only kept in the owner's browser.

**If you no longer trust a user:** remove them, then on GitHub delete the user token and create a new one, paste it under **Users → Replace it**, and give the remaining users a **New password**.

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
| `users.json` | User logins (encrypted). Written by the app from the Users panel; don't edit by hand. Run `git pull` before pushing your own changes. |

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

- **2026-11-05**: User logins with username and password (Users panel, Sign in screen, Sign out); every change records who made it; loans show Lent by and Checked by. Default sort is Name A–Z.
- **2026-11-04**: Checkboxes only appear after pressing Select; Select all / Deselect / Deselect all buttons.
- **2026-11-04**: Selection bar with Select all, Export to Excel, Delete and Clear; Export moved from the page header into the bar; faster start-up.
- **2026-11-04**: Select several devices to export or delete them together.
- **2026-11-04**: Print and Email to borrower for loan records; Add email for older loans.
- **2026-11-03**: Sort by dropdown; category manager (rename / remove); Category column and Advanced search; full-width layout with green sidebar and page header; Karelia logo and green theme; Light / Dark / Auto theme; storage in a private GitHub repository; first version with inventory, loans, return check and PDF / Excel export.
