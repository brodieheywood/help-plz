# README

## Description

Find topic-domain experts on Stack Overflow.

## Stack

React Native + Redux (to store search query and API response data).

## Notes

Currently, only the tags available on the Stack Exchange API are valid search queries (for example, "JavaScript" and "PostgreSQL"). Otherwise, the app gracefully handles empty/whitespace search queries (by not making a call to the API), as well as non-empty queries that return no results from the API. The app also avoids making redundant calls to the API by comparing the current state of the search query to the previous state.

## Future Additions/Changes

- Expand available search queries/resolve synonymous or misspelled queries into valid tags.
- Add logic for handling API 400 errors (currently, the application only checks for an empty `users` field in the response).
