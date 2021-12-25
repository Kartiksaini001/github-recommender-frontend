# Collab Hub - Github Recommender System

## Introduction

This is a recommendation tool that will make recommendations to contributors according to their interests and past works and to project owners to find suitable contributors whose skills align with the project’s requirements. Source Code available at:

- Frontend: https://github.com/Kartiksaini001/github-recommender-frontend
- Backend: https://github.com/Kartiksaini001/github-recommender-backend

Live Preview is available at: <HostingLink>

## Implementation Details

### Frontend

- Github Username is taken by the user
- Then the user is given 2 options
  - To find projects to collaborate on
  - To find collaborators for a particular project
- As per the user selection, an API call is made to the backend and the response is displayed
- The errors are handled accordingly

### Backend

- **Dataset**: A set of random users were selected from the github website and the created/forked repos by these users were saved by their url in users and repos list. This part was only required before the model creation, since we employed KNN based approach and so the model was effectively saving any related information in itself.

- **Task 1**: To recommend good collaborators given the url link of a repo.

- **Model**: A KNN based approach was employed where K closest repos from the repos list were obtained, giving them weight equal to the cosine similiarity between it and the query repo.
  A User Behavior matrix was calculated, which is essentially a matrix of shape `no_of_users * no_of_repos` respectively in the database. If user **i** created/forked/starred a repo **j** ,then **User_matrix[i][j] = 10,5,2** respectively.
  The thought was that from the given query repo, we find the K-nearest repos from our database. The intuition was that the user who created/forked/starred a repo closest to the query repo is most fit for the collaboration purpose because he already had experience required for the contribution.

A score was calculated for each of the user on the above based logic as:
`score_vector = User_matrix * K_nearest_repo_vector`
where, K_nearest_repo_vector is theoretically a column vector of size of repos list in the database, where repo_i has a weight equal to cosine similarity between itself and the given query repo if and only if it is one of the K-nearest repo to the given query repo.

For performance purposes, **sklearn.neighbor.NearestNeighbor** with sparse_matrices were used, which effectively saves space maintaining its form in ball-tree/kd-tree, which optimizes both space complexity and the time complexity of the algorithm, so the implemention is different from the above mentioned method but effectively the results are same theoretically.

From the score_vector, users with top_score were displayed, with some advantage given to them if they have significant activity in the past period.

- **Task 2**: To recommend good projects to users given the url of user in the github database.

- **Model**: The same KNN-model created in the above task was utilized for this task.
  From the recent 30 [fitted as hyperparameters] repos created/forked/watched by the user, a score was calculated for each of such repo, which is essentially a linear combination of various features of the repos[ time of creation,time of last update, no. of stars, no. of forks, etc.] which were fast to query from the Github Api. From this score, top 2-to-5 repos was choosen for recommendation purpose.
  Here, similarly we found the K-nearest repos for those selected repos from the user's repo bundle, and based on the same above method, a score was assigned to each of the K-nearest repos and the best repos were displayed.

Feature Extraction: For each of the repo in our database, we extracted word corpus for the text files and source files, so that, now each repo was associated with a text_file_corpus and source_file_corpus. This was done with the help of Github Api.
Feature Preprocessing: For each repo in our database, we used Hashing trick and Tf-Idf for preprocessing. For Hashing, we used Mod space of size 10007. After hashing each word of the text_file_corpus and source_file_corpus independently, we observed that at max 1000 unique hashed values were present for a given repo, so sparse_matrices were employed to store the tf-idf values of these hashed words.
After this step, we effectively had each repo associated with tf-idf processed source word vector of length 10007 and tf-idf processed text_files word vector of length 10007.

For text_file vectors and source_file vectors, two different KNN-tress were computed.

- **Similarity measure**: For the KNN-tree, we used cosine similarity between the feature vectors,so that,

```
Similarity(repo_i,repo_j) = lambda * Cosine(repo_i[text_file_vector],repo_j[text_file_vector]) + ( 1 - lambda ) * Cosine(repo_i[source_file_vector],repo_j[source_file_vector]) where lambda was found as 0.2
```

For recommendation of repositories on the basis of user activity, scores are assigned to user repositories based on formula:

```
Score :- (alpha * Star_Count + beta * Watch_Count + gamma * Fork_count) * 100000000 + maximum(updation time,creation time,push time)
```

Repos with maximum values are selected and the repos being watched by the user is also collected and recommendations are performed similar to the first task based on these repos.

## Tools & Technology

The project is divided into 2 parts, the Frontend and the Backend.

| **Agent name/ Feature** | **Tech Stack** | **Description**                                                         |
| ----------------------- | -------------- | ----------------------------------------------------------------------- |
| Frontend                | ReactJs        | Using ReactJs and Tailwind CSS to make fast, complex, and responsive UI |
| Backend                 | Python         | Built a Flask API which runs the ML algorithm and gives the response    |

## Project Setup

- Clone the repositories ([frontend](https://github.com/Kartiksaini001/github-recommender-frontend) and [backend](https://github.com/Kartiksaini001/github-recommender-backend)) on your local machine
- Open a command/terminal window in the root folder of the project
- For Frontend
  - Run `npm install` to install all the dependencies
- For Backend
  - Run `pip install -r requirements.txt` to install all the dependencies

## Run Frontend on local machine

- Open a command/terminal window in the root folder of the project
- Run `npm start` in the command/terminal window to start the server
- The server will start on PORT 3000
- Open the url `http://localhost:3000/` in a browser to see the frontend

## Run Backend on local machine

- Open a command/terminal window in the root folder of the project
- Activate the virtual environment by looking up the [docs](https://docs.python.org/3/tutorial/venv.html#creating-virtual-environments)
- Run `python app.py` to start the backend server
- The server will start on PORT 5000 and the url is `http://localhost:5000/`

## Working Demo
