# realestate_email_aggregator_fe_vuejs

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
