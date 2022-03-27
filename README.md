# books-api

## Routes that are defined:

| Method | Path         | Purpose                              |
| ------ | ------------ | ------------------------------------ |
| GET    | `/`          | "Hello World"                        |
| GET    | `/books`     | Books index page, list all books     |
| POST   | `/books`     | Create a new book                    |
| GET    | `/books/:id` | Details about a particular book      |
| PUT    | `/books/:id` | Update a particular book             |
| DELETE | `/books/:id` | Delete a particular place            |
| GET    | `*`          | 404 page (not currently implemented) |
