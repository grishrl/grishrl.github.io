# Units updater

This script is a crawler that outputs a file with the latests AoE2:DE units costs table.

## Updating the constants file

The following commands will crawl the website, write the constants file, and replace it in the source code of the previous folder.

```
npm install
npm run start
```

## Warning

To update other parts of the constants file, you should modify the constats-crawl-template.js file and regenerate the constants file with the commands above.

## Future improvements

- Separate the table of units from the rest of the constant file
- add a gitlab ci stage to update the constant file regularly
