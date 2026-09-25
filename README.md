# Courage Medical & Rehab Center

React 19 and Vite website with six main pages and six individual service pages, shared components, and responsive styling.

## Development

Run `npm install`, then `npm run dev`.

## Production

Run `npm run build`. The production website is generated in `dist/`. Run `npm run preview` to inspect the production build locally.

## Structure

- `src/pages/`: Home, Services, About, Community, Visit, Contact
- `src/components/`: shared header, brand, footer, and visit call to action
- `src/styles.css`: shared responsive design system
- `public/`: static images

Page content lives in React. `index.html` is the only HTML file, and it only loads the app. Pages use addresses such as `/about` and `/primary-care`. Mobile navigation is controlled by React state.

Content follows the supplied center profile. Telephone, email, exact directions, fees, and specialist schedules still require confirmation. No appointment submission or medical data collection is implemented. The photograph is illustrative stock imagery, not center staff.

Photo source: https://www.pexels.com/photo/close-up-photo-of-a-female-doctor-5452256/
License: https://www.pexels.com/license/

## Editing service pages

Update `src/data/services.js` to change each service’s text and offerings. `src/pages/ServiceDetail.jsx` supplies the shared layout. Each service is available at its own address, such as `/primary-care`.
