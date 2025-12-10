1. Run `npm install && npx patch-package`
2. Run
    ```
    npm run bundle -- --entry-file ./index.js && cat build/generated/ios/index.bundle | grep "sernik"
    ```
