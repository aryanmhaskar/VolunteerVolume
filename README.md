# VolunteerVolume
Maintains the volunteer database and allows volunteers to log hours at the Virginia Discovery Museum that is user friendly for volunteers of all ages. 

## Front End

Login (DONE)
- Email
Register (Mani)
- First
- Last
- Email
- Birthday
Dashboard (Josh)
- View/edit shifts
- Master Schedule
- Statistics
Admin dashboard (TBD)
- Master Schedule
- View/edit shifts (admin)

## Issues

- Registering
    - Lack of input validation (could write pretty much anything)
        - Phone number, address/state, zipcode
    - Redirect doesn't go anywhere (testRedirect doesn't even link back)
    - Incorrect/could be better availiability
        - Reduduntant due to "Days" also included
- Login doesn't go anywhere (should go to dashboard)
    - Login should just be email OR just firstlast name
- Shifts
    - User not given shifts array
    - Shifts look incomplete?
        - Need an ID
        - Need a date/time
        - Need a location
        - Need approved boolean
    - Currently shifts are groupped by date
        - Will just make searching more difficult
        - Probably better to have normal array of shifts
        - Make a plain array of shifts that are ordered not grouped
- Dashboard
    - Shifts are not found/generated
        - Need to generate HTML
        - Need to then generate statistics about shifts
        - Not able to generate untill User and Shifts databases are fixed
    - Has no shift sign up
        - Need a frontend/backend
- Admin dashboard
    - Same issues for normal dashboard
    - Need a queue of pending requests
        - Probably need a new datastructure for pending shifts
            - Array of shift IDs

Summary:
- Fix login and redirect page to actually link back where they should go
- Create the shift adding functionality
- Create shift approval functionality (create shift needs to link to the page in adminShifts branch)
- Update User, Shift, and Queue datastructures in DB
- Register page input validation update -> correctly put into new User object
- User drashboard functionality (request shift/shift change-> view shifts)

TBD Later:
- Add a queue system for shifts
- GMail notifications
