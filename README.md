AMAZING FOOD.


 This website is designed to be responsive and accessible on a range of devices, making it easy to navigate for potential food enthusiasts that would like to contribute, access and share interesting recipe ideas. 


User Experience (UX)
1.First Time Visitor Goals
![Screenshot (695)](https://user-images.githubusercontent.com/83753891/157437468-049f3cfa-e1ec-4b6f-bc3e-62a08b1d6b41.png)

As a First Time Visitor, one is greeted with a simple message of all recipes , a seach box to enter any v of a varity of key words to get one closer to their search interest and a reset button to go back to the home page if not found.
a)Returning Visitor Goals
![Screenshot (697)](https://user-images.githubusercontent.com/83753891/157437835-c936c6c5-a5a4-4ea0-b5ae-d52729ce2146.png)

1. The page has a register page that is easy for a first time user to sign up.More optons are there after displayed, add , delete, edit recipe .These functions are available for only registered users.
2.![Screenshot (696)](https://user-images.githubusercontent.com/83753891/157437999-0a77c788-8b91-4a36-ba85-38fe5f6b78eb.png)

3. In the add recipe page, there is a further five categories:vegan , vegeterian, lactose-free, traditional and mratlovers cateogires where one can further categorise their recipe.
4. ![Screenshot (699)](https://user-images.githubusercontent.com/83753891/157438346-9f61ee47-4926-4579-90bc-b434bee87d6f.png)
5. ![Screenshot (701)](https://user-images.githubusercontent.com/83753891/157438721-584fcbd3-e6dd-4034-b393-3b418277c8f7.png)


5. There is a also  an newest button at the bottom of the page to be activated if one feels that their recipe is a newer version of prexisting one or a prevoiusly nonexistant recipe.
6. There is also a datepicker so that people who come on to the page can see when a particular recipe was uploaded.
7. ![Screenshot (700)](https://user-images.githubusercontent.com/83753891/157438453-6c8a72f5-348a-4053-a8a3-f6ac1760c8b6.png)


Admin page. 
The admin user can login and has further options of adding , deleting and editing the categories section.
![Screenshot (703)](https://user-images.githubusercontent.com/83753891/157438829-f8a6ed56-aa45-4467-bcbf-4c347d126daf.png)
![Screenshot (704)](https://user-images.githubusercontent.com/83753891/157439100-b4fc3807-694e-4861-bed0-4bf0842fad0a.png)


Design
Colour Scheme
The two main colours on Amazing Food are  orange and white.

Features
Responsive on all device sizes, the below screenshot is of two pages shown in smaller screens but all pages are responsive.
![Screenshot (692)](https://user-images.githubusercontent.com/83753891/157439268-c7598730-8a71-4d51-884b-d8765ace9054.png)

There is also a repsonsive menu that turns into a hamburger iconin smallerscreens. On clicking the hamburger icon, it becomes a dropdown with all the functions intact:

![Screenshot (707)](https://user-images.githubusercontent.com/83753891/157439410-a28c1e99-c51f-4a56-a3c5-6995e9bc4127.png)

Interactive elements
Techonologies used:

MongoDB for back end
Heroku for launching the website

Languages Used
HTML5
CSS3
Materialise
Frameworks, Libraries & Programs Used
Bootstrap 4.4.1:
Bootstrap was used to assist with the responsiveness and styling of the website.
Hover.css:Fo the collapsible categories section,flashes for h4 throught the website, text shadow and the btn small.
Font Awesome:
Font Awesome was used on all pages throughout the website to add icons for aesthetic and UX purposes.
jQuery:
jQuery came with Bootstrap to make the navbar responsive but was also used for the smooth scroll function in JavaScript.
Git
Git was used for version control by utilizing the Gitpod terminal to commit to Git and Push to GitHub.
GitHub:
GitHub is used to store the projects code after being pushed from Git.

Testing
The W3C Markup Validator and W3C CSS Validator Services were used to validate every page of the project to ensure there were no syntax errors in the project.

W3C CSS Validator - Results https://jigsaw.w3.org/css-validator/validator?uri=http%3A%2F%2Famazing-food.herokuapp.com%2Fadd_recipe&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en
devtools.No errors when i checked on devtools
![image](https://user-images.githubusercontent.com/83753891/157632768-046ccee6-f791-4fec-b32d-913b9c948b03.png)
UNFIXED BUGS:
none
FEATURES LEFT TO IMPLEMENT:
In the future i would like to add a function where pictures alongside the recipe could be added when a user uploads the recipe.
Also want ed to add the social media links at the bottom of ach page to link to facebook, instagram, pinterest and other social media to enrich UX.

Deployment
This Project was deployed to Heroku using the following steps, first i stalle dheroku from www.heroku.com and followed te following steps:

1 . Create an account on https://heroku.com. This should be pretty straight forward. 2 . Install the Heroku CLI on your computer:
https://devcenter.heroku.com/articles/heroku-cli. Check that you have the heroku-cli installed by checking the version number in your terminal:

heroku --version
3 . Connect the Heroku CLI to your account by writing the following command in your terminal and follow the instructions on the command line:

heroku login
Use your credentials from the earlier account creation.

Create the project
1 . Create a new project, for example a simple express-server. You have to have a package.json and all your dependencies must be added to this package.json. Make sure of this otherwise the app will crash.

2 . Heroku will look for a startup-script, this is by default npm start so make sure you have that in your package.json (assuming your script is called app.js):

 "scripts": {
    "start" : "node app.js"
 }
3 . You also have to make changes to the port, you can't hardcode a dev-port. But you can reference herokus port without knowing it by a special variabel. So add the following to your code:

const port = process.env.PORT || 4000;
When you upload to Heroku it will use the environment-port but when you are developing it will use the port 4000. Then reference this port in your app:

app.listen(port);
4 . Then create a remote heroku project, kinda like creating a git repository on GitHub. This will create a project on Heroku with a random name. If you want to name your app you have to supply your own name like heroku create project-name. The command below will just create a random name:

heroku create
5 . Push your app to Heroku like pushing to GitHub expect for origin you have heroku (you will see a wall of code).

git push heroku master
6 . Visit your newly create app by opening it via heroku:

heroku open

Credits
Code
The majority f the code is from the instructions videos by tim_ci of code institute as i followed keenly to come u with tie website as end result.

Bootstrap4: Bootstrap Library used throughout the project mainly to make site responsive using the Bootstrap Grid System.

Content
All content was written by Justus Mwita Marwa but very much under the instruction and tutelage of the code institute videos of the get tasks project

Acknowledgements
My Mentor for continuous helpful feedback.

Tutor support at Code Institute for their support.
