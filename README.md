# The Ionic Super Starter 🎮

_Note: the Ionic Super Starter requires Ionic CLI 3._

<img src="assets/img/contact.JPG" width="400" />


### Api

The `Api` provider is a simple CRUD frontend to an API. Simply put the root of your API url in the Api class and call get/post/put/patch/delete

## i18n

Ionic Super Starter comes with internationalization (i18n) out of the box with [ngx-translate](https://github.com/ngx-translate/core). This makes it easy to change the text used in the app by modifying only one file.

### Adding Languages

To add new languages, add new files to the `src/assets/i18n` directory, following the pattern of LANGCODE.json where LANGCODE is the language/locale code (ex: en/gb/de/es/etc.).

### Changing the Language

To change the language of the app, edit `src/app/app.component.ts` and modify `translate.use('en')` to use the LANGCODE from `src/assets/i18n/`

CodePage - is the page for Incidents,
UserUpdates - Is the Page for Traffic Updates,
StartPage - is the home/first page with maps
