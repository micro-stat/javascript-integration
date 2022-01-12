# micro-stat - javascript-integration
- This integration is designed for javascript based applications, like your modern SPA or Node API

## Usage
> If you have an account with micro stat, try out our tutorial - https://www.portal.micro-stat.com/tutorial

### Instructions
1. Install the integration into your app with npm or yarn

```
yarn add micro-stat
```
2. Open a connection
```
import { Connection } from 'micro-stat';

Connection.connect("YOUR_DSN");
```

3. Publish a new metric
```
import { Counter } from 'micro-stat';

const myCounter = new Counter('Count Page Hits');

myCounter.increment();

myCounter.publish();
```

## Web Vitals
- Web vitals are automatically recorded when using this integration package
