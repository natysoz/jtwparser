# jwtextract

fast extract your jwt from your authorization header

## Usage

1. Install with
    ```bash
    $ npm i jwtextract
    ```
   
   or
    ```bash
    $ yarn add jwtextract
    ```

### HOW TO :

 ```js
import jwtextract from 'jwtextract'
```

 ```js
export const authenticateUser = async (req, res, next) => {
  
   // sent in the req and expect to get string jwt as return value
   const accessToken = jwtextract(req)
  
   if (!accessToken) {
      // response with some error
      return responseWithError(res, error(FORBIDDEN_MSG, FORBIDDEN))
   }
   else{
     // do your magic code...
   }
}
```
