# micro-stat :: JavaScript SDK
- This integration is designed for NodeJS and javascript applications
- Please make sure to register an account to get your unique DSN (Data source name)
- Learn more at https://www.help.micro-stat.com

## Steps
1. Install the integration in your app with npm or yarn

```
yarn add micro-stat
```
2. Configure your connection (You must do this before publishing metrics)
```
import { Connection } from 'micro-stat';

Connection.connect("YOUR_DSN");
```

3. Publish your first metric
```
import { Counter } from 'micro-stat';

const myFirstCounter = new Counter('Count Page Hits');

myFirstCounter.increment();

myFirstCounter.publish();
```

4. Alternatively use short hand syntax
```
import { HitCounter } from 'micro-stat';

new HitCounter('Website Visited').publish();
```

5. Optionally customise your experience by providing options when connecting
```
import { Connection } from 'micro-stat';

const options = {
  captureWebVitals: false,
  disablePublication: true
}

Connection.connect("YOUR_DSN", options);
```

## Supported Options
Option | Default | Description
| ----------- | ----------- | ----------- |
captureWebVitals | true | When `true` - web vitals are automatically collected and published
disablePublication | false | When `true` - metrics are only output to the console, not published to micro-stat