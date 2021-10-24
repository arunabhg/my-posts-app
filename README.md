# Introduction to the My-Posts-App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

It includes data fetching through axios using an API and showing the data as posts in a responsive UI using React.

The current version of the project caches the data using `react-redux` and does not store it in any database.

In future versions as the dataset size increase or the complexity increases, data may be stored in a database.

## Available operations

Currently, the project supports all CRUD operations

### `Reading`

User can `read` all posts by scrolling through.\
Initial post data is fetched using a fake API.
Each post includes a random image generated using Picsum (https://picsum.photos)

### `Creation`

User can create new posts by clicking on `Create Post` button.\
A modal form is used in submitting the new post title and description to the already created posts.

### `Updation`

User can click on the `Edit` button below a post to update it.\
A modal form pops up and user can edit the post title and description using it.

### `Deletion`

**Note: this is a one-way operation. Once you `delete`, you can’t go back!**

Pressing the `delete` button below a post opens a modal dialog confirming the deletion of a post. If the user confirms, the post is deleted.

## App versions

`v1.0`: Included basic fetching of data using fetch API and presenting it in a responsive design.

`v2.0`: Data fetching done using axios and full CRUD implemented.

`v3.0`: Added routing using React-router, implementation of Custom hook for button toggle,\
and a higher order order component to switch between light and dark themes.
