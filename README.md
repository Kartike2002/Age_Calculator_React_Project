# Age Calculator

A simple single-page React app to calculate a person's age from their date of birth.

## Features
- Enter a date of birth and click "Calculate Age".
- Reset input and result.
- Displays age in years.

## Screenshot
Add a screenshot of the app result at  `./screenshot.png` to show the calculated age.

Example (replace the path if you save the image elsewhere):

![Result screenshot](./public/Screenshot(73).png)

To capture a screenshot on Windows:
- Open the app (npm run dev → open http://localhost:5173).
- Use Snipping Tool or press Win+Shift+S, save the image to `public/screenshot.png`.

## Install & Run
```sh
npm install
npm run dev
```
Open the URL shown by Vite (usually http://localhost:5173).

## Build
```sh
npm run build
```

## Notes / Known issues
- There is a small bug in `src/App.jsx`: the code uses `today.getData()` instead of `today.getDate()` when comparing days. Replace `today.getData()` with `today.getDate()` to fix the birthday comparison.
- Date input relies on the browser's date control (ISO format).

## Contributing
Modify `src/App.jsx` to change UI or logic. Small single-file app — pull requests and fixes welcome.

## License
No license included. Add a LICENSE file if you plan to publish.
