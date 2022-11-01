# Jetpack React Workshop

This project is an introduction to react for non-frontend developers

## `Start the app`

First, makes sure Docker is running  
Run `docker-compose up` in the current directory  
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see errors in the console (CMD + SHIFT + I)

## `Goals`

At the end of this workshop you'll be able to

1. Understand the basics of React
2. Makes the UI interact with an API
3. Do a bit of dataviz with ObservableHQ

Your goal in this project will be to make an interface for users to create simulations.  
Once the user created a simulation, data are processed and the user should be able to vizualize it.

The app specifications could be split in 3 tickets:

1. As a user, I should be able to create a new simulation.
2. As a user, I should be able to list the created simulations.
3. As a user, I should be able to select a simulation and view data related to it

## `API`

You'll need 3 api call for this project  
The api is running on `localhost:3001`  
The logic in the API is very simple and data are mostly faked

### `1. List (GET /simulations)`

```
axios.get("http://localhost:3001/simulations")
```

```
[
  {
    "id": 1,
    "name": "Hello World",
    "description": "This is a simulation"
  },
  {
    "id": 2,
    "name": "Hello World 2",
    "description": "This is a simulation"
  }
]
```

### `2. Get (GET /simulation/:id)`

```
axios.get("http://localhost:3001/simulation/1")
```

```
{
  "id": 1,
  "name": "Hello World",
  "description": "This is a simulation",
  "data": [
    {"time":"2022-10-31 00:00:00","value":0.0776657077625572},
    {"time":"2022-10-31 00:15:00","value":0.0607786027397261},
    ...
  ]
}
```

### `3. create (POST /simulation)`

```
axios.post("http://localhost:3001/simulation", {
  "name": "Hello World",
  "description": "This is a simulation"
})
```

```
{
  "id": 1,
  "name": "Hello World",
  "description": "This is a simulation"
}
```

## `Some Ressource`

- [React hooks](https://reactjs.org/docs/hooks-overview.html)
- [Array Functions](https://www.w3schools.com/jsref/jsref_map.asp)
- [Make requests to the API](https://blog.openreplay.com/fetching-and-updating-data-with-react-query/)
