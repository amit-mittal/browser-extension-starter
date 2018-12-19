# Browser Extension Boilerplate

:zap: Browser Extension starter code in typescript which can run across different browsers like Chromium, Firefox, Opera, Safari and Edge but, as a proof of concept, we are covering Mozilla Firefox and Google Chrome

## Goal

- Project can act as a starter sample code for any browser extension
- Avoid duplicate code across different browsers so, that business logic is at one place
- Testable code
- Collect metrics and errors
- Less surprises in production
- Main focus has been on extension running in background

## Features

- Uses inversify for dependency injection which makes the code testable
- Different webpack config for dev and prod
- For writing tests, jest is being used
- Basic APIs implemented: Logger, LocalStorage
- Sample backend API service implemented: ApiService
- TSLint and Prettier has been added
- Watch mode so that automatically builds in case of changes
- Explore if extension can get refreshed automatically in the browser
- Added global error handling and integrated Sentry

## TODO

- Setup webpack for generating chrome, firefox extensions
- Add injectable services which are not specific to chrome, firefox
- Write tests for the code
- Jenkins job which pushes new code with new version to webstore
- Steps to setup analytics, A/B testing, metrics collection
- For extension popup, explore what should be done
- Configure notifier which tells when project has been built or extension reloaded
- Add proper documentation
