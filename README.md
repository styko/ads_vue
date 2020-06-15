# Ads_vue

##### What is implemented
 - JWT Token authorization and authentication
 - Multi stage docker build
 - Github action for simple CI with coverage fix for lcov-reporter
 - Deployment ready for dokku/heroku 
 - Simple state management for JWT token handling
 - Use of high charts
 - Use of components
 - Stubbed REST services
 - Custom recursive interceptor to convert ISO String to Luxon objects
 - Vuetify component framework used for responsive design
 
#### Sonar cloud

[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=realestate_email_aggregator_fe_vuejs&metric=sqale_rating)](https://sonarcloud.io/dashboard?id=realestate_email_aggregator_fe_vuejs)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=realestate_email_aggregator_fe_vuejs&metric=security_rating)](https://sonarcloud.io/dashboard?id=realestate_email_aggregator_fe_vuejs)
[![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=realestate_email_aggregator_fe_vuejs&metric=sqale_index)](https://sonarcloud.io/dashboard?id=realestate_email_aggregator_fe_vuejs)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=realestate_email_aggregator_fe_vuejs&metric=code_smells)](https://sonarcloud.io/dashboard?id=realestate_email_aggregator_fe_vuejs)
[![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=realestate_email_aggregator_fe_vuejs&metric=duplicated_lines_density)](https://sonarcloud.io/dashboard?id=realestate_email_aggregator_fe_vuejs)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=realestate_email_aggregator_fe_vuejs&metric=coverage)](https://sonarcloud.io/dashboard?id=realestate_email_aggregator_fe_vuejs)

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and hot-reloads for development with stubs
```
npm run serve --stub
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Run your unit tests in watch mode
```
npm run test:unit:watch
```

### Debug your unit tests (connect to port 9229)
```
npm run debug
```

### Example configuration on debuggging unit tests for VSCODE
{
    "name": "Debug unit tests",
    "type": "node",
    "request": "launch",
    "cwd": "${workspaceFolder}",
    "webRoot": "C:/dev/workspaces/realestate_email_aggregator/realestate_email_aggregator_fe_vuejs/src",
    "breakOnLoad": true,
    "sourceMapPathOverrides": {
        "webpack:///./src/*": "C:/dev/workspaces/realestate_email_aggregator/realestate_email_aggregator_fe_vuejs/src/*"
    },
    "port": 9229
},

### Customize configuration
- create file .env.development.local to override custom configs and vue configs 
- remeber that custom configs must have prefix VUE_APP_

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
