# posts-project
<img width="724" alt="2023-03-22 (3)" src="https://user-images.githubusercontent.com/47628748/226884833-0ce0b710-653d-4ef6-8333-924e3533ac00.png">


This web app shows all Posts and Posts Details with Vue 3 in Vite.

It deployed on Netlify: https://cheerful-raindrop-81f9a1.netlify.app/posts

**It includes:**

○ Screen to list all the posts.

○ Screen to list all the user posts.

○ Screen to show post details:
- Title, body, comments, author name, phone, and company name.
- Users can comment on the post.

○ Search and filter in the list.

○ List pagination if greater than 21 items.

The APIs used: http://jsonplaceholder.typicode.com/




## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
json-server data.json
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm install
npm run test
```

### Start it out

```sh
npm run test
json-server data.json  //for managing comments
npm run dev
npm run test
```


### Important Guides:

- You must create an account to comment on posts (data will be saved in the local storage).
- Users and Posts images are selected randomly from hard-coded images for better visual design (the APIs don't have images)

### Enhancements
 Due to the time limit, I couldn't do that, but I still can do the following:
- Add functionality to filter the results after searching on the posts page.
- Write more test cases to cover the state management files (VueX files)
