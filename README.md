# Hudello Coding Challenge: API

### Instructions

Welcome to our API coding challenge. In this exercise, you'll create an URL-shortener API.

Given any URL input via `POST`, your API should return a JSON with the following properties:
- `short` - The shortened URL.
- `original` - The input URL.
- `count` - This is the number of times the same given URL has been sent to your API for shortening regardless of which client sent it.

It is import that all shortened URLs are globally unique; for example, `https://a.very-long.url/foo?lorem=ipsum` should:
1. Always return the same shortened URL.
2. There can never be more than 1 record of the same shortened URL in your database (or however you're tracking it.)
    - e.g. If you shortened an URL to be `https://foo.bar/aKfBeg`, then there cannot be another record of `aKfBeg` in your db.

You're free to implement the API using any database, let it be SQL, NoSQL, JSON, CSV, etc; the goal is to meet the above requirements. A frontend UI is not required.

To get started:
1. Fork or clone this repo.
2. Implement your code.
3. Send us a link to your repo for review.

Happy coding!

Hudello Engineering
#### Installation
Setup a MongoDB database:
- Go here https://www.mongodb.com/ and follow the instructions on how to connect a database with your project.
#### Clone project
```
git clone git@github.com:jolouie7/Hudello-API-challenge.gitx
```

#### Change into the project directory
```
cd Hudello-API-challenge
```

#### Open in your code editor
```
code .
```

#### Create an .ENV file
```
MONGODB_URI=YOUR_MONGODB_URI_HERE
```

#### Install dependencies
```
npm install
```

#### Run
```
npm run dev
```

Technologies Used:
- MongoDB
- Nodejs

### Improvements
- [ ] Add unit tests
- [ ] Have a dedicated routes file when the project grows
- [ ] Add validations