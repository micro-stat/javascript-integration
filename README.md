# micro-stat

## Usage
- Add this package via NPM or yarn

```
yarn add micro-stat
```
- Open a connection
```
import { Connection } from 'micro-stat';

Connection.connect("YOUR_DSN");
```

- Create a counter
```
import { Counter } from 'micro-stat';

Counter.increment();

Counter.publish();
```
