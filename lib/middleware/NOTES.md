General code improvements:
- Use AJV for JSON schema validation
- Setup ESLint (AirBnB config + no colons + single quotes)
- Remove semi colons! (personal preference)

- Installed Mocha and Chai as a dev dependency for unit tests

- Assumed array query param is parsed as ?keyword=hello&keyword=a
- Array query params only work if 2+ params are provided
- Array query params are always parsed as strings, can't check for integers?