
Reproduction repo for : https://github.com/callstack/reassure/issues/578

After runing `npm i` just run : `npm run reassure` and you will see an error : `"Unable to import '@testing-library/react-native' dependency"` 

Downgrading the `testing-library/react-native` to `v12` will fix this issue.