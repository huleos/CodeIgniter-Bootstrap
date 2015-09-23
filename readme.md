# I'm Medical Tourist

### Prerequisites
***
You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)

### Server Requirements
***
PHP version 5.4 or newer is recommended.

It should work on 5.2.4 as well, but we strongly advise you NOT to run
such old versions of PHP, because of potential security and performance
issues, as well as missing features.

### Installation Instructions
***
* `git clone <repository-url>` this repository.
* `npm install`
* Open the `application/config/development and production/config.php` file with a text editor and set your base URL. If you intend to use encryption or sessions, set your encryption key.
* If you intend to use a database, open the `application/config/development and production/database.php` file with a text editor and set your database settings.
* You will need to enter your mail server details into `application/config/development and production/email.php`

### Gulp Tasks
***

* `gulp` Default tasks clean files and task build
* `gulp serve` Default tasks server http://localhost:3000 configure **gulpfile.js** line `proxy: 'my_local_server'`
* `gulp styles` Compile file scss and create style.css
* `gulp scripts` Compile all files js and create file all.js
* `gulp image` Compress images
* `gulp watch` Watch tasks **styles** and **scripts**
* `gulp build` Run tasks **styles**, **scripts** and **image**
* `gulp clean` Delete files **.sass-cache**, **all.js** and **style.css**


