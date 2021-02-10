# In-Situ DHIS2 application compiler

To compile a "dynamic shell" platform app:

1. copy `./src/*` to `<app>/src/*`
2. Update the import in `<app>/src/bootstrap.js` to point to the correct import for this app's entrypoint
3. Run `rm -rf dist && node ../path/to/insitu-compiler/index.js` - this will watch all local files for changes
4. (if there are errors, you may need to run install some dependencies and make sure the local `./src/locales` is generated)
5. In another terminal, run `npx serve dist`
6. Visit `http://localhost:5000`, the app should be served from there.  You can see the shell modules loading in the console.
7. (optional) set the `DHIS2_SHELL_OVERRIDE` localStorage variable to an accessible `remoteEntry.js` for a Shell.  This is handy for i.e. overloading with a local shell like `http://localhost:3000/remoteEntry.js` when developing.