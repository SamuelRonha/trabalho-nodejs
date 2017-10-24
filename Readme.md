# Trabalho Node Js - Pos Alfa 2017
 [Link do Trabalho](https://github.com/suissa/pos-alfa-2017)

#### Modulos:
* User(name, type, email)
* Course(name, teacher, books, students)
* Book(title, author, pages)

------------


#### Requisitos:
- [x] 1 Course deverá ter apenas 1 User do type teacher
- [x] método de pesquisa pelo name via **Query String** (com regex, **case insensitive**)
- [x]  **Criar rota:**
```
api/course/:id/populate
```
- [ ] Refatorar seu código para utilizar
Promises :anguished:
------------


##  **Rotas:**
#### USERS

###### GET/POST:
```
http://localhost:3000/api/users/
```
###### Body para POST
```
{
	"name":"Jao",
	"age":33,
	"email":"jao@email.com"
}
```

###### PUT/GET/DELETE:
```
http://localhost:3000/api/users/:id
```
###### GET findByName
```
http://localhost:3000/api/books/?&name=:title
```

------------


#### COURSES
###### POST/GET:
```
http://localhost:3000/api/courses/
```
###### Body para POST
```
{
	"name":"Node JS",
	"teacher":"Suissa",
	"students":["59ee7dbcd11d4d1fa0a42073", "59ee69b0b3f82e0714b99db7", ...],
	"books":["59ee6ba558618a289cab3b6f", ...]
}
```

###### GET para POPULATE:
```
http://localhost:3000/api/courses/:id/populate
```
###### GET findByName
```
http://localhost:3000/api/books/?&name=:name
```

###### PUT/GET/DELETE:
```
http://localhost:3000/api/courses/:id
```

------------


####  BOOKS
```
http://localhost:3000/api/books/
```
###### Body para POST
```
{
	"title":"Java Web Development"
}
```
###### PUT/GET/DELETE:
```
http://localhost:3000/api/books/:id
```
###### GET findByName
```
http://localhost:3000/api/books/?&title=:title
```

