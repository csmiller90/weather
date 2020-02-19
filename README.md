# WeatherApp

## Development server
Run `npm install` to install node modules.
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/` to view project.

## Further development
Given more time there are a number of features I would have liked to have implemented, my brain ran away with things so I had to reign him in a bit:

# Features
- An interactive map that can either be clicked or zooms to the area of the map that has been searched for.
- Animations to make the flow and overall experience of the user better
- Clicking on the cards for the next 5 days would reveal more information about the weather that day.
- Use geolocation to get users location without them having to search for it
- Similarly to Dark Sky app, display information in a more informative manner with more time to get into the depths of the information that is available from the API and how it can best be displayed.

# Fixes
- Would perhaps have came up with a better solution for displaying just 1 forecast per day from the 3 hourly forecasts returned by the API as the solution I went with was to filter the returned timestamp to and display the information if the time was 12pm, which worked as this would only occur once per day, but is not the most ideal solution.
- Would have created more reusable components within Angular so as each one was not specific, this is more a lack of knowledge on my part as it is not something I have really worked with before, but is something I intend to learn and implement in my work as soon as possible.
