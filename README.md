## API STRUCTURE

* GET / (unprotected) ==> Home route to display Bookstore home content
* POST /login (unprotected) ==> AUthenticate a new user
*  POST /logout (unprotected) ==> Logout a user


## Book API Routes

* GET /api/v1/books (unprotected) ==> Get all books route
* POST /api/v1/books (unprotected) ==> Add book to db
* DELETE /api/v1/books (protected) ==> Delete book from db
* PUT /api/v1/books/:id (unprotected) ==> Update book from db
* GET /api/vi/books/:id (protected) ==> Get books by unique ID


## Author API Routes

* GET /api/v1/authors (unprotected) ==> Get all authors route
* POST /api/v1/authors (unprotected) ==> Add author to db
* DELETE /api/v1/authors (protected) ==> Delete author from db
* PUT /api/v1/authors/:id (unprotected) ==> Update author from db
* GET /api/vi/authors/:id (protected) ==> Get author by unique ID


## Other MW
* Rate Limiting
* Security middleware
* Good Logging
* Validation 
