# toddle-task

## To use postman api collection

Environment variables are used to store url and generated token in postman collection, so no need to modify any values.

### Step 1: Login

- Accepts any **username** and **password** in the form of JSON data
- If username is new, it creates new entry in users table else ignores
- Generated userId is used to sign JWT along with secret and send token back in response

## Token received is used to check for validity in all survey api's

### Step 2: Create Survey

- Decoded userId from token is used to identify who created the survey
- Survey will have optional **description** and mandatory **questions** key in JSON data
- Questions is an array, having string values as question 
- Since answers can only be yes and no, these values are not represented in table along with questions

### Step 3: Get Survey

- Retrieve any created survey using surveyId
- Includes survey object along with survey questions

### Step 4: Take Survey

- All the questions/answers in a survey are sent as array in JSON data
- Answers can only be 'yes' or 'no', request fails if answer is any other values
- Decoded userId from token is used to identify who answered the survey

### Step 5: Get Survey Result

- Retrieve survey result using surveyId
- Can see survey result of all users

### Step 6: Get Thumbnail

- Select file in body's form-data
- Image is resized to 50x50 px
- Can view resized image in response body of postman

Also Included **image.html** which uses axios library to download image and display in html, created this first and realised image is visible in postman as well so not necessary.