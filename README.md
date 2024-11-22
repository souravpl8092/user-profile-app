<h1 align="center"> User Profile Management App </h1>

<br/>

<h2>Overview</h2>
 
### A simple React application to manage user profiles. It allows users to view, edit, delete, and like profiles. The app also includes a loading indicator and uses Redux for state management.

<br/>

<table>
<tr>
    <td>
      <h2 align="center">Large Screen View - Computer/Laptop</h2>
    </td>
  </tr>
  <tr>
    <td>
      <img src="https://i.imgur.com/large.png" alt="Large Screen">
    </td>
  </tr>
</table>

<table>
<tr>
    <td>
      <h2 align="center">Medium Screen View - Tablet</h2>
    </td>
  </tr>
  <tr>
    <td>
      <img src="https://i.imgur.com/medium.png" alt="Medium Screen">
    </td> 
  </tr>
</table>

<table>
<tr>
    <td>
      <h2 align="center">Small Screen View - Mobile</h2>
    </td>
  </tr>
  <tr>
    <td>
      <img src="https://i.imgur.com/small.png" alt="Small Screen">
    </td>
  </tr>
</table>

<br/>

<h2>Features</h2>

- Display a list of user profiles with names, email, phone, and website information.
- Add interactive features
  - Like/Unlike a user.
  - Edit user details using a modal form with validation.
  - Delete a user from the list.
- Loading spinner implemented while fetching data.
- Uses Redux for state management, ensuring a clean and scalable architecture.
- Responsive design with Ant Design (antd) components.

<br/>

<h2>Technologies Used</h2>

- React: For the user interface.
- Redux: For state management
- Ant Design (antd): For UI components like the modal and icons.
- Spinkit: For the loading spinner animation.
- DiceBear API: To generate random user avatars.
- CSS Modules: For styling individual components.

<br/>

<h2>Prerequisites</h2>

### Make sure you have the following installed:

- Node.js
- npm (Node Package Manager)

<br/>

## Installation

### 1. Clone the repository and install the dependencies:

- git clone https://github.com/yourusername/user-profile-app.git

### 2. Navigate to the project directory

- cd user-profile-app

### 3. Install dependencies

- npm install

### 4. Start the development server

- npm start

### 5. Open the app in your browser at http://localhost:3000.

<br/>

## Folder Structure

### The project follows the following folder structure:

```

├── public
│   └── index.html
│
└── src
    ├── components/
    │   ├── UserCard.js  // Component for rendering user details
    │   ├── UserCard.css // Main component to display list of profiles
    │   ├── EditModal.js // Edit user modal form
    │   └── LoadingSpinner.js // Spinner component
    |
    ├── redux/
    │   ├── actions.js // Redux action creators
    │   ├── actiontypes.js // Redux action types
    │   ├── reducers.js // User-related reducer logic
    │   └── store.js   // Redux store setup
    |
    ├── pages/
    │   └── UserProfiles.js // Main component to display list of profiles
    |
    ├── App.css // CSS files for styling
    ├── App.js  // Main app component
    ├── index.css // Index CSS files for styling
    └── index.js // App entry point


```

- The public folder contains the HTML template file and other static assets.
- The src folder contains the application source code.
- The Components folder includes reusable components used in the application.
- The Pages folder contains the main page components.
- The App.js file is the entry point of the application.
- The index.js file is the root JavaScript file that renders the application.

<br/>

## Redux Integration

The app uses Redux for state management:

- userReducer.js manages actions like:
  - Fetching users.
  - Editing user details.
  - Deleting users.
  - Toggling the "like" status of a user.
- Centralized state in store.js.

<br/>

## Key Components

UserCard

- Displays individual user information with options to like, edit, or delete.
- Uses Ant Design icons (HeartOutlined, HeartFilled, EditOutlined, DeleteFilled).

EditModal

- A modal (from Ant Design) to edit user information.
- Includes form validation for fields: Name, Email, Phone, and Website.

LoadingSpinner

- Uses Spinkit to display a loading animation while fetching user data.

## How to Use

1. The app fetches a list of user profiles when loaded.
2. Each card displays:
   - User details (name, email, phone, website).
   - An avatar fetched from DiceBear API.
3. Use the following actions

- Like: Click the heart icon to toggle between liked and unliked.
- Edit: Click the pencil icon to open a modal and update user details.
- Delete: Click the trash icon to remove the user from the list.

## Dependencies

- React: ^18.x
- Redux: ^4.x
- Redux-Thunk: ^2.x
- Ant Design: ^5.x
- Spinkit: Used for loading indicators.

<br/>

<h2 align="center">Thank You</h2>
