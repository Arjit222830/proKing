# login-react-hooks-context
This is an example of login using react hooks, context api and an alternative of global storage without redux.

### To run project

To run:
* npm i
* npm start

### How it works

The magic is in Store file, we create a redux store like, with Context API: 
[Store file](./src/Store.js)

And here's how to use it with React hooks:

```javascript
import { Store } from '../../Store';

function Home() {
	const { state, dispatch } = useContext(Store);
	const { name } = state.session;
  return name;
}
```

### Pendings ⚠

As you see, on Store file we have a global reducer function, the idea here is to replace the redux function combineReducers with an equivalent.
