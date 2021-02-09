# Cinema API

This API was build to simulate the functionality of movie theather web sites.

### Made with:
**N**ode Js / **E**xpress / **M**ongoDB

## Endpoints

### Movies
#### GET /api/movies
This endpoint are responsible for return all movies registered in database.
#### Parameters
N/A
#### Responses
##### Json text with Error and Result fields. The result field can have other two arrays as Active and Inactive, that reflects in "In theaters" and "Coming soon" movies.
```

```

#### GET /api/movie
This endpoint are responsible for return all movies registered in database.
#### Parameters
None
#### Responses
##### Json text with Error and Result fields. The result field can have other two arrays as Active and Inactive, that reflects in "In theaters" and "Coming soon" movies.

```
{
  "error": [],
  "result": [
    {
      "active": []
    },
    {
      "inactive": [
        {
          "genre": [
            "Action",
            "Adventure",
            "Fantasy"
          ],
          "_id": "602304341c210242ec07f407",
          "title": "Wonder Woman 1984",
          "poster_url": "image url",
          "director": "Patty Jenkis",
          "duration": 151,
          "synopsis": "Wonder Woman 1984 accompanies Diana in 1984, during the Cold War, coming into conflict with two great enemies - media entrepreneur Maxwell Lord and enemy friend Barbara Minerva, while reuniting with her love interest Steve Trevor.",
          "state": 0,
          "trailer_url": "trailer url",
          "release_date": "2020/12/16",
          "distribuitor": "Warner Bros",
          "restriction_age": 12,
          "__v": 0
        },
        {
          "genre": [
            "Action",
            "Fantasy"
          ],
          "_id": "602305241c210242ec07f408",
          "title": "Monster Hunter",
          "poster_url": "image url",
          "director": "Paul W.S. Anderson",
          "duration": 104,
          "synopsis": "Parallel to our world, there is another: a world of powerful and dangerous monsters that control their territories with deadly ferocity. When Lieutenant Artemis (Milla Jovovich) and her elite squadron are transported through a portal that connects the two worlds, they will be faced with the most shocking experience of their lives. In her desperate attempt to return home, the brave lieutenant encounters a mysterious hunter (Tony Jaa), whose unique skills have enabled him to survive in this hostile land. Facing the monsters' tireless and terrifying attacks, the two warriors unite to fight against them and find a way to return home. Baseado no fenômeno global dos video-games, MONSTER HUNTER.",
          "state": 0,
          "trailer_url": "trailer url",
          "release_date": "2021/02/18",
          "distribuitor": "Sony",
          "restriction_age": 14,
          "__v": 0
        }
      ]
    }
  ]
}
``` 

#### POST /api/movie
This endpoint are responsible for insert a movie in database.
#### Parameters
```
{
	"title":"Wonder Woman 1984",
	"poster_url": "image url",
	"duration": 151,
	"director": "Patty Jenkis",
	"synopsis": "Wonder Woman 1984 accompanies Diana in 1984, during the Cold War, coming into conflict with two great enemies - media entrepreneur Maxwell Lord and enemy friend Barbara Minerva, while reuniting with her love interest Steve Trevor.",
	"genre": ["Action", "Adventure", "Fantasy"],
	"trailer_url": "trailer url",
	"release_date": "2020/12/16",
	"distribuitor": "Warner Bros",
	"restriction_age": 12,
	"state": 0
}
```
#### Responses
##### Json text with Error and Result fields. The result field will have the data of the movie that was created and the error fild will report the issues, like validation for example.
```
{
  "error": [
    {
      "restriction_age": {
        "msg": "Invalid restriction age!",
        "param": "restriction_age",
        "location": "body"
      }
    }
  ],
  "result": []
}
```
```
{
  "error": [],
  "result": [
    {
      "genre": [
        "Action",
        "Adventure",
        "Fantasy"
      ],
      "_id": "602304341c210242ec07f407",
      "title": "Wonder Woman 1984",
      "poster_url": "image url",
      "director": "Patty Jenkis",
      "duration": 151,
      "synopsis": "Wonder Woman 1984 accompanies Diana in 1984, during the Cold War, coming into conflict with two great enemies - media entrepreneur Maxwell Lord and enemy friend Barbara Minerva, while reuniting with her love interest Steve Trevor.",
      "state": 0,
      "trailer_url": "trailer url",
      "release_date": "2020/12/16",
      "distribuitor": "Warner Bros",
      "restriction_age": 12,
      "__v": 0
    }
  ]
}
```

#### PUT /api/movie/:\_id
This endpoint are responsible for update a specific movie in database.
#### Parameters
\_id: identifier of the data

```
    {
      "genre": ["Action","Fantasy"],
      "_id": "602305241c210242ec07f408",
      "title": "Monster Hunter",
      "poster_url": "image url",
      "director": "Paul W.S. Anderson",
      "duration": 104,
      "synopsis": "Parallel to our world, there is another: a world of powerful and dangerous monsters that control their territories with deadly ferocity. When Lieutenant Artemis (Milla Jovovich) and her elite squadron are transported through a portal that connects the two worlds, they will be faced with the most shocking experience of their lives. In her desperate attempt to return home, the brave lieutenant encounters a mysterious hunter (Tony Jaa), whose unique skills have enabled him to survive in this hostile land. Facing the monsters' tireless and terrifying attacks, the two warriors unite to fight against them and find a way to return home. Baseado no fenômeno global dos video-games, MONSTER HUNTER.",
      "state": 0,
      "trailer_url": "trailer url",
      "release_date": "2021/02/18",
      "distribuitor": "Sony",
      "restriction_age": 10
    }
```
#### Responses
##### Json text with Error and Result fields. The result field will have the data of the movie that was updated and the error fild will report the issues, like validation for example.

```
{
  "error": [],
  "result": [
    {
      "genre": [
        "Action",
        "Fantasy"
      ],
      "_id": "602305241c210242ec07f408",
      "title": "Monster Hunter",
      "poster_url": "image url",
      "director": "Paul W.S. Anderson",
      "duration": 104,
      "synopsis": "Parallel to our world, there is another: a world of powerful and dangerous monsters that control their territories with deadly ferocity. When Lieutenant Artemis (Milla Jovovich) and her elite squadron are transported through a portal that connects the two worlds, they will be faced with the most shocking experience of their lives. In her desperate attempt to return home, the brave lieutenant encounters a mysterious hunter (Tony Jaa), whose unique skills have enabled him to survive in this hostile land. Facing the monsters' tireless and terrifying attacks, the two warriors unite to fight against them and find a way to return home. Baseado no fenômeno global dos video-games, MONSTER HUNTER.",
      "state": 0,
      "trailer_url": "trailer url",
      "release_date": "2021/02/18",
      "distribuitor": "Sony",
      "restriction_age": 16,
      "__v": 0
    }
  ]
}
```

#### DELETE /api/movie/:\_id
This endpoint are responsible for delete a specific movie registered in database.
#### Parameters
\_id: identifier of the data
#### Responses
##### Json text with Error and Result fields. The result field will have the the data of the movie that was deleted.
```
{
  "error": [],
  "result": [
    {
      "genre": [
        "Action",
        "Fantasy"
      ],
      "_id": "602305241c210242ec07f408",
      "title": "Monster Hunter",
      "poster_url": "image url",
      "director": "Paul W.S. Anderson",
      "duration": 104,
      "synopsis": "Parallel to our world, there is another: a world of powerful and dangerous monsters that control their territories with deadly ferocity. When Lieutenant Artemis (Milla Jovovich) and her elite squadron are transported through a portal that connects the two worlds, they will be faced with the most shocking experience of their lives. In her desperate attempt to return home, the brave lieutenant encounters a mysterious hunter (Tony Jaa), whose unique skills have enabled him to survive in this hostile land. Facing the monsters' tireless and terrifying attacks, the two warriors unite to fight against them and find a way to return home. Baseado no fenômeno global dos video-games, MONSTER HUNTER.",
      "state": 0,
      "trailer_url": "trailer url",
      "release_date": "2021/02/18",
      "distribuitor": "Sony",
      "restriction_age": 10,
      "__v": 0
    }
  ]
}
```

#### POST /api/movies
This endpoint are responsible for search movies registered in database based on title, director, genre or distribuitor. The search will be done based on the value contained in these fields.
#### Parameters
{
	"search": "Warner"
}
#### Responses
##### Json text with Error and Result fields. The result field will have the the data of the movie that was deleted.
```
{
  {
  "error": [],
  "result": [
    [
      {
        "genre": [
          "Action",
          "Adventure",
          "Fantasy"
        ],
        "_id": "602304341c210242ec07f407",
        "title": "Wonder Woman 1984",
        "poster_url": "image url",
        "director": "Patty Jenkis",
        "duration": 151,
        "synopsis": "Wonder Woman 1984 accompanies Diana in 1984, during the Cold War, coming into conflict with two great enemies - media entrepreneur Maxwell Lord and enemy friend Barbara Minerva, while reuniting with her love interest Steve Trevor.",
        "state": 0,
        "trailer_url": "trailer url",
        "release_date": "2020/12/16",
        "distribuitor": "Warner Bros",
        "restriction_age": 12,
        "__v": 0
      }
    ]
  ]
}
```

###Sessions
#### POST /api/session
This endpoint are responsible for create a session registered in database. When a session are created the movie state are updated to 1 and when the movies are listed, all movies that are in session will be putted in active array.
#### Parameters
{
	"movie": "602304341c210242ec07f407",
	"session_date": "2022/04/15"
}
#### Responses
##### Json text with Error and Result fields. The result field will have the the data of the session that was created.
```
{
  "error": [],
  "result": [
    {
      "_id": "602308751c210242ec07f409",
      "movie": "602304341c210242ec07f407",
      "session_date": "2022-04-15T03:00:00.000Z",
      "__v": 0
    }
  ]
}
```

#### PUT /api/session/:\_id
This endpoint are responsible for update a session registered in database.
#### Parameters
\_id: identifier of the data
{
	"movie": "602304341c210242ec07f407",
	"session_date": "2021/04/16"
}
#### Responses
##### Json text with Error and Result fields. The result field will have the the data of the session that was updated.
```
{
  "error": [],
  "result": [
    {
      "_id": "602308751c210242ec07f409",
      "movie": "602304341c210242ec07f407",
      "session_date": "2021-04-16T03:00:00.000Z",
      "__v": 0
    }
  ]
}
```

#### GET /api/sessions
This endpoint are responsible for return all a sessions registered in database.
#### Parameters
None
#### Responses
##### Json text with Error and Result fields. The result field will have the the data of the requested session and movie.
```
{
  "error": [],
  "result": [
    [
      {
        "_id": "602309e01c210242ec07f40a",
        "movie": {
          "genre": [
            "Action",
            "Adventure",
            "Fantasy"
          ],
          "_id": "602304341c210242ec07f407",
          "title": "Wonder Woman 1984",
          "poster_url": "image url",
          "director": "Patty Jenkis",
          "duration": 151,
          "synopsis": "Wonder Woman 1984 accompanies Diana in 1984, during the Cold War, coming into conflict with two great enemies - media entrepreneur Maxwell Lord and enemy friend Barbara Minerva, while reuniting with her love interest Steve Trevor.",
          "state": 1,
          "trailer_url": "trailer url",
          "release_date": "2020/12/16",
          "distribuitor": "Warner Bros",
          "restriction_age": 12,
          "__v": 0
        },
        "session_date": "2022-04-15T03:00:00.000Z",
        "__v": 0
      }
    ]
  ]
}
```

#### GET /api/session/:\_id
This endpoint are responsible for return a specific session registered in database.
#### Parameters
\_id: identifier of the data
#### Responses
##### Json text with Error and Result fields. The result field will have the the data of the requested session and movie.
```
{
  "error": [],
  "result": [
    [
      {
        "_id": "602309e01c210242ec07f40a",
        "movie": {
          "genre": [
            "Action",
            "Adventure",
            "Fantasy"
          ],
          "_id": "602304341c210242ec07f407",
          "title": "Wonder Woman 1984",
          "poster_url": "image url",
          "director": "Patty Jenkis",
          "duration": 151,
          "synopsis": "Wonder Woman 1984 accompanies Diana in 1984, during the Cold War, coming into conflict with two great enemies - media entrepreneur Maxwell Lord and enemy friend Barbara Minerva, while reuniting with her love interest Steve Trevor.",
          "state": 1,
          "trailer_url": "trailer url",
          "release_date": "2020/12/16",
          "distribuitor": "Warner Bros",
          "restriction_age": 12,
          "__v": 0
        },
        "session_date": "2022-04-15T03:00:00.000Z",
        "__v": 0
      }
    ]
  ]
}
```

#### DELETE /api/session/:\_id
This endpoint are responsible for delete a specific session registered in database. When a session are deleted, the movie of the deleted session will have they state updated to 0, all movies that aren't in session will be putted in inactive array.
#### Parameters
\_id: identifier of the data
#### Responses
##### Json text with Error and Result fields. The result field will have the the data of the requested session and movie.
```
{
  "error": [],
  "result": [
    {
      "_id": "602309e01c210242ec07f40a",
      "movie": "602304341c210242ec07f407",
      "session_date": "2022-04-15T03:00:00.000Z",
      "__v": 0
    }
  ]
}
```
