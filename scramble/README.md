# Scramblies checker
Purpose of this small web SPA written in Clojure/Script with usage of Fulcro is to check if second input string can be 
created using only letters from the first input string. Main function looks like this:

`(scramble? str1 str2)`

## Dependencies

All Clojure/Script dependencies are listed in the `deps.edn` file. Other than that, you will need to install
`shadow-cljs` and `npm` with `npx` in your local environment. Possibly, you would need to add your github ssh key to
your ssh agent, in case you have not done so previously.

App requires Clojure 1.10.1 or higher.

We also need to install node dependencies by running `npm install` or `yarn install` from our app root.

## Running the app

The application consists of a server and a client. All commands are to be run from the app root
directory. Server and client need to be started from different terminal windows and the windows need to stay open during
operation.

### Server

For starting the server, we run the following command from a unix-like terminal:

`clj -Adev` or `clj -A:dev`

Once Clojure has started, we invoke a function for starting the server:

`(start)`

Now server should be up and running at `http://localhost:3000/api`.


### Client

We start the client `main` build using `npx`:

`npx shadow-cljs watch main`.


Now that both client and server are started, we should be able to use our app at `http://localhost:3000/index.html`.


## Running tests

Our core function is covered with 36 tests which can be run from a terminal in the app root using alias `test` like this:

`clj -Atest`


