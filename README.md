# ICT Lab Loan Desk

Inventory and equipment loan register for the ICT laboratory.

- **Inventory**: add devices, change stock amounts, edit or delete them. See how many are on loan and available.
- **New loan**: record borrower name(s), group, course, start and end date, and pick devices from the inventory.
- **Export**: download the loan record as PDF or Excel in the layout of the paper "ICT Laboratory Equipment Loan Record".
- **Loans**: see what is out or overdue, and check equipment back in item by item.
- Light, dark or automatic theme.

Live site: https://sakibkhan-karelia.github.io/ict-lab-loan-desk/

## Where the data is stored

This repository only holds the app. No student or loan data is stored here.

The app saves its data to a `data.json` file in a separate **private** repository (default `SakibKhan-Karelia/ict-lab-loan-data`). Every change is a commit there, so the data repository also keeps a full history.

To connect a browser:

1. Create the private data repository on GitHub (it can be empty).
2. Create a fine-grained personal access token at <https://github.com/settings/personal-access-tokens/new>:
   - Repository access: **Only select repositories** and choose the data repository.
   - Repository permissions: **Contents: Read and write**.
3. Open the site, press **Set up GitHub storage**, paste the token and press **Connect**.

The token is kept in that browser's local storage only. Do it once on each computer you use. Use **Disconnect this browser** to remove it.

Without a token the app still works, but saves only in that browser.

## Editing the app

`loan-desk.html` is the source. After changing it, rebuild the page and commit both files:

```bash
node build.mjs
```
