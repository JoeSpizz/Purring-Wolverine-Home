# First let's get the "React App Documentation" out of the way
## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

Don't use this feature unless you know it's correct.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

# Now on to the actual ReadMe
# A PURRING WOLVERINE HOME PAGE
 ## Made with React, hosted with Netlify and Supabase

 This 'app' is simply a homepage for my ASMR YouTube channel. [A Purring Wolverine](https://www.youtube.com/channel/UCa-v-Az44bcKKbx2o1ioOgQ) 

 CSS/HTML for the "active titles" comes from Umar Farooq, [AUYK Font](https://codepen.io/umarcbs/pen/oNYePEj), that I heavily edited to fit the site. \
 Note: Any code (CSS or otherwise) not specifically mentioned as written by someone else was written by me

 On the home landing page you will seen an introductory video to both ASMR and my channel. As well as a few stylized cards with basic introductory information: About me, What is ASMR, and a Credits card. These cards were created using CSS/HTML code from Amit Sheen, [Rainbow Cards](https://codepen.io/amit_sheen/pen/ZEJdamr?editors=1111), that I tweaked to serve my purposes. 
 
 Most of the links, connected with client-side routing via react-router-dom, are simply 
 'playlists' of videos I've created that match the categories. 

 The meditaiton page contains a number of differences from the above stated pattern. It uses State to allow you to flip a few of the meditation videos to versions that have sound or not. It also contains a small meditation app that I located via reddit. [Meditate in 100 seconds](https://www.thisisathing.io/) by Shri Khalpada. Permission to embed the app was given 9.5.22 via Reddit direct message. 

The request page is unique as well and takes the most explanation. The request data is hosted in a REST API on [Supabase](https://supabase.com/). When the page loads requests are pulled and displayed. The cards themselves are styled using CSS from Sebi, [Rotating Cards](https://codepen.io/DivineBlow/pen/ZEBqNZb), that was edited to fit the site's purposes. \
A new request will add that data to the supabase server and then render it on the page. Because supabase itself is having trouble with my project enabling 'real-time' the site was rendering a blank request card. By building in a setTimeout reload we worked around this issue. It wasn't elegant but for now it's good enough.

The code for the fetch requests was heavily aided by [Postman](https://www.postman.com/) to ensure the proper syntax was being used. 
