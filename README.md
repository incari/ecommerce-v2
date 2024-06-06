# Intro

Hey wake up!

My name is ***Martín*** and thank you for taking the time to review this project. I'm excited to share my work with you and look forward to your feedback and contributions. This repository is built to display some of my skills developing modern robust, scalable, and efficient applications.

## Tech Stack Overview

Our project leverages the following technologies:

- React: A powerful JavaScript library for building user interfaces.
- TypeScript: A superset of JavaScript that adds static types, ensuring more robust and maintainable code.
- Next.js 14: The latest version of Next.js, providing an excellent framework for server-side rendering, static site generation, and building full-stack applications.



## Demo

 [Demo App](https://ecommerce-v2-nine.vercel.app){:target="_blank"}

## Getting Started

Ready to jump in? Here’s how you can get started:

### 1. Clone the Repo:
 ```bash
 git clone https://github.com/your-awesome-repo.git
 ```

### 2. Install Dependencies: 

```bash
 npm install
 ``` 
or
  ```bash
   yarn install
   ```

### 3. Run the App:
```bash
 npm run dev
 ``` 
 or 
 ```bash 
 yarn dev
 ``` 
  and your local server will be up and running.


## Goal

The goal of this assignment is to create a product cards page with TypeScript and tests. You have the option to use NextJS, and you are required to make components reusable. The assignment involves handling desktop and mobile views, fetching data from an API, and implementing a search feature for product cards.

## Features to Implement

1. :white_check_mark:  **Show Product Cards**: Display product cards on the page.

    >Basic implementation of FeaturedMultimarket + Multimarkets cads

2. :white_check_mark: **Fetch Data from API**: Use the API [https://api-us.exoticca.com/api/landing/v2/country/botswana](https://api-us.exoticca.com/api/landing/v2/country/botswana) to get product information. You can choose to use either `react-query` or Server-Side Rendering (SSR).

    > Used SSR to get the data without external libs

3. :white_check_mark: **Hover Effect**: In production, when hovering over the image, show the map of the product. Note: This part is out of scope for this assignment. 

    > In the home page Hovering the card displays the second image, hovering the Badge display the map.


4. :white_check_mark: **Search for Product Cards by "Product Title"**: Implement a search feature in the header to search for product cards based on the product title.

    >Implemented the search card featured using useParams. Typing in the search bar adds ?search=text to the URL and filter the cards that contain any text that match with it in
    - Title
    - Location
    - Includes
    - Tags
    - Days
    - Prices: -> For this case, it was implemented a regex that removes the symbols in the price text to highlight the number 3499 when the text is 3,499 




5. :white_check_mark:  **Bonus Feature**: Support searching product cards by any data in the product. For example, searching for "Cape" should return product cards that have "Cape Town" in highlights, and searching for "3799" should return product cards with a price of $3,799.

### Other Features implemented

- :white_check_mark:  **Extra Feature**: Was out of the scope.
    >It was implemented a map when the user hover (tap on mobile) the **"See map"** badge 


- :white_check_mark:  **Extra Feature 2**: Detail Page
    >Was implemented a redirect on clicking one card to the detail page with more images, and map. This is responsive and re-align and hide elements in mobile.


## Screenshots

- **Desktop View**:

  ![Desktop View](/public//desktop1.png)
  ![Desktop View](/public//desktop2.png)
  - **Detail Page**
  ![Desktop View](/public//desktop3.png)

- **Mobile View**:

  ![Mobile View](/public//mobile1.png)
  - **Detail Page**

  ![Mobile View](/public//mobile2.png)