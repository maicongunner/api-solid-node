# App

GymPass clone API.

# FRs (Functional requirements)

- [x] Should be able to registration;
- [x] Should be able to authenticate;
- [x] Should be able get the profile of a logged user;
- [x] Should be able get the number of check-ins performed by the logged in user;
- [x] Should be able the user gets their check-in history;
- [x] Should be able the user can search for nearby gyms (up to 10km);
- [x] Should be able the user searches for a gym by name;
- [x] Should be able the user checks in at a gym;
- [x] Should be able validate a user's check-in;
- [x] Should be able to register a gym;

# BRs (Business rules)

- [x] User must not be able to register with a duplicate email;
- [x] User can not do two check-ins on the same day;
- [x] User can not check in if they are not close (100m) to the gym;
- [x] Check-in can only be validated up to 20 minutes after it is created;
- [x] Check-in can only be validated by administrators;
- [x] Gym can only be registered by administrators;

# NFRs (Non-functional requirements)

- [x] User password must be encrypted;
- [x] Application data must be persisted in a PostgreSQL database;
- [x] All data lists must be paginated with 20 items per page;
- [x] User must be identified by a JWT(Json Web Token);
