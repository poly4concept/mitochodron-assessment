# Mitochodron Assessment
## Deployed Link
The application is deployed and accessible [here](https://mitochodron-assessment.vercel.app/)

## Running The Project Locally
To run the application locally:
1. Clone the repository.
2. Install dependencies by running `npm install`
3. Start the development server by running `npm run dev`


##  Design Decisions and Future Improvements

### 1. Mobile Implementation of Budgets Page
If I had more time, I would implement the Budgets page's mobile view, specifically a horizontal, draggable tab navigation. This would allow users to scroll horizontally through available tabs for a more intuitive experience on smaller screens.

Example of the intended tab navigation:
  
![mobile tab](https://github.com/user-attachments/assets/6a817690-2d84-4145-95a1-3e15b37cd2b5)

### 2. Date Formatting with Day.js
The user-selected date is currently displayed in its raw format. Using a library like [Dayjs](https://day.js.org/) could improve readability by formatting dates consistently. The intended format matches this design on the figma:
  
 ![Date Display](https://github.com/user-attachments/assets/524d24c7-36da-47e3-b275-446d8661180e)

 ### 3. Performance Optimization with WebP Images
I considered converting images to WebP format to reduce load times without sacrificing quality. Though not essential for this test app with few images, it would benefit a larger-scale application by reducing file sizes.
