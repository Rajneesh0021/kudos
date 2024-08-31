# kudos

YourHR is a job search service that helps job seekers find suitable job roles based on their qualifications and preferences. This web application allows users to sign up, upload their resumes, and view the list of job seekers along with their resumes.

### Features
Job seekers can sign up and upload their resumes.
Job seekers' information, including name, email, occupation, and resume, is stored securely.
View a list of job seekers with options to download or view their resumes directly in the browser.

### Tech Stack
Frontend: React.js
Backend: Node.js, Express.js
Database: MongoDB
File Upload: Multer (for handling resume uploads)

### Prerequisites
Before running the application, ensure that you have the following installed on your system:

Node.js (version 14 or above)
npm (version 6 or above)
MongoDB (Ensure MongoDB is running locally or provide a MongoDB Atlas connection string)
Getting Started
Follow the steps below to run the application locally:

1. Clone the Repository
```
git clone https://github.com/Rajneesh0021/kudos.git
```

2. Setup Backend
Navigate to the project:

```
cd kudos
```

### Install dependencies:
```
npm install
```

Create an .env file in the folder and add the following configuration:

```
MONGO=mongodb://localhost:27017/yourhr
Replace mongodb://localhost:27017/yourhr with your MongoDB connection string if you're using MongoDB Atlas or any remote database.
```

3. Setup Frontend
Open a new terminal and navigate to the frontend folder:
```
cd frontend
```
Install dependencies:

```
npm install
```

Navigate to the kudos folder and build the project :
```
npm run build
```
Run the backend server:

```
npm start
The backend server should now be running on http://localhost:5000.
```


### File Uploads
Resumes are uploaded and saved in the backend/uploads directory.
Ensure that the uploads folder exists in the backend directory or it will be created automatically.

### API Endpoints

1. POST /api/jobseekers/register
Description: Register a new job seeker and upload their resume.
Request Body:
name: String
email: String
occupation: String
resume: File (PDF, DOC, DOCX)
Response: Success or error message.

2. GET /api/jobseekers
Description: Fetch the list of all registered job seekers.
Response: Array of job seekers with their names, email, occupation, and resume download/view links.
Usage
Frontend:

Users can sign up, upload resumes, and view the list of other job seekers.
You can navigate between the sign-up form and the job seekers list using the navigation bar.
Backend:

Handles authentication, file uploads, and serves job seekers data.
API endpoints are exposed for managing job seeker information.
Running Tests
To run tests (if applicable):

```
npm test
```
Troubleshooting
Common Issues:
MongoDB Connection Error:

Ensure MongoDB is running on your local machine or that the MONGO_URI in the .env file points to the correct remote database.
Check that your MongoDB credentials (if using a remote database) are correct.
File Upload Errors:

Make sure the uploads directory is writable.
If you encounter errors related to file type or size, check the multer configuration in the backend (upload.js).


### Notes
Ensure that your MongoDB instance is running locally or update the connection string to a remote database if necessary.
Customize the frontend design if needed for better UI/UX.
