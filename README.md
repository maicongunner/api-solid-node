# App

GymPass clone API

# Functional Requirements (FRs)

[x] User registration should be possible.
[x] User authentication should be possible.
[x] Retrieving the profile of a logged-in user should be possible.
[x] Retrieving the number of check-ins made by the logged-in user should be possible.
[x] The user should be able to view their check-in history.
[x] The user should be able to search for nearby gyms (up to 10km).
[x] The user should be able to search for gyms by name.
[x] The user should be able to check in to a gym.
[x] Validating a user's check-in should be possible.
[x] Gym registration should be possible.

# Business Rules (BRs)

[x] Users should not be able to register with a duplicate email address.
[x] Users cannot make 2 check-ins on the same day.
[x] Users cannot check in if they are not within 100 meters of the gym.
[x] Check-ins can only be validated up to 20 minutes after they are created.
[x] Check-ins can only be validated by administrators.
[x] Gyms can only be registered by administrators.

# Non-Functional Requirements (NFRs)

[x] User passwords must be encrypted.
[x] Application data must be persisted in a PostgreSQL database.
[x] All data lists must be paginated with 20 items per page.
[x] The user should be identified by a JWT (Jason Web Token).
