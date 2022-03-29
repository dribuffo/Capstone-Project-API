# PROJECT 4 OVERVIEW

---

This full stack application will make use of a heroku hosted database to display my guild's collection of collectables by person.

## USER STORIES

---

As someone who is used to hosting in-game events to hunt for collectables and nik-nacks it would be nice to have a searchable database to store this information, rather than having to defer to a multipaged spreadsheet.

## PROJECT DESCRIPTION

---

This full stack application will have a REACT front end, utilizing bootstrap to display information from a database that is filterable by expansion pack (and thus specific set of collectables) and with the ability to display a character's collection in it's entirety.

The back end database will be (placeholder) based and will have a main "player" that will reference each set of collectables and store what each player has.

## PROJECT SCHEDULE

---

| Day |                      Deliverable                       |   Status   |
| :-: | :----------------------------------------------------: | :--------: |
|  F  |                   Project Worksheet                    | approved!  |
|  M  |            Back End: models and start CRUD             | complete |
|  T  | Back End: Finish CRUD and start Front End Basic Design | incomplete |
|  W  |          Front End: Basic Design and display           | incomplete |
|  R  |       Front End: Finish display and start filter       | incomplete |
|  F  | Front End: Finish filter and start Responsiveness/CSS  | incomplete |
|  M  |                   Finish and Deploy                    | incomplete |
|  T  |                   Presentation day!                    | incomplete |

## WIREFRAMES

---
- [Schemas](https://drive.google.com/file/d/1qx1lkxA-HW3QdKGKiwC09tfXzD4eTeeG/view?usp=sharing)

## FLOWCHARTS

---

#### MVP

##### Back End

- Create Models
  - Player
  - Each set of collections
- Create appropriate CRUD routes
  - Test as I go in Postman
- Configure User Authentication
  - Log In / Out
  - Make sure that CUD are locked behind being logged in
- Deploy and seed data

|          Component           | Priority | Estimated Time | Actual Time |
| :--------------------------: | :------: | :------------: | :---------: |
|        Create Models         |    H     |    2 hours     |      1 hr      |
|       CRUD Operations        |    H     |    3 hours     |      3 hrs      |
|         CRUD Testing         |    H     |    3 hours     |      1 hrs      |
|          User Auth           |    H     |    3 hours     |      1 hr      |
| Adjusting CRUD for User Auth |    H     |    2 hours     |      N/A      |
|          Deploying           |    H     |    2 hours     |      ?      |
|        Editing README        |    M     |     1 hour     |      ?      |
|            Total             |          |     16 hrs     |      ?      |

#### POST MVP

##### Back End

- Add multiple sets of collectables
  - one for each expansion
  - one for raids
  - one for misc. other stuff

|                       Component                        | Priority | Estimated Time | Actual Time |
| :----------------------------------------------------: | :------: | :------------: | :---------: |
|               Add more collectable sets                |    H     |    1 hours     |      ?      |

|                         Total                          |          |     1 hrs      |      ?      |

## ROUTES

#### ROUTING TABLE

|  Verb  |          URL          |                                      Action                                       |
| :----: | :-------------------: | :-------------------------------------------------------------------------------: |
|  GET   |        /player        |                       returns with all players in database                        |
|  POST  |    /player/create     |                         Add a new player to the database                          |
|  GET   |      /player/:id      |                              returns a single player                              |
| DELETE |      /player/:id      |                        Deletes character from the database                        |
| PATCH  |      /player/:id      |                   Updates a Character's collection information                    |
|  GET   |         /blus         |                      returns all players who are blue mages                       |
|  GET   |       /blu/:id        |                   returns a specific player who is a blue mage                    |
|  PUT   |  /blu/:id/spell/:id   | adds a blue magic spell to a player's spell list from an already established list |
|  GET   |     /player/horse     |            displays all players and what collectable horses they have             |
| PATCH  | /player/:id/horse/:id |              updates a specific player to show new collectable horse              |

## WORKING SCREENSHOT

---

## TECHNOBABBLE

---

## CODE SNIPPET

---

## LIBRARIES & ADDITIONAL DEPENDENCIES
jsonwebtoken , joi , joi-password-completixty, bcrypt
---

## CREDITED CODE BLOCKS
---
[User Auth](https://www.youtube.com/watch?v=HGgyd1bYWsE)
I followed his step by step video on making a user auth for the front and back end of my project.

## SURMOUNTABLES

---