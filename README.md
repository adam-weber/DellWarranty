# Dell Warranty App & Wrapper

Client-side application and wrapper to make full use of the Dell API. 

Features
=========
* Web application that makes full use of the Dell API
* Javascript wrapper to be used when building an application that utilizes the Dell API

Application
-----------
The web app includes support for desktop and mobile devices. Desktop mode allows input to be taken from the keyboard or a barcode scanner. The scanner needs to support Code39 so it can read the barcode on 2011 and newer Dells. The mobile version of the web app includes support for a camera on the mobile device. A photo can be taken of the barcode which then looks up information on the computer.

Wrapper
-------
The Javascript wrapper can be called with:

`DellApi(callType, svctag, apiKey)`

Explanation of the required wrapper information:

* **callType** - Type of API request to be sent. Choices:
  * Dispatch Request - Create and manage dispatch requests
    * *dispatch*
  * Warranty - Check warranty expiration
    * *warranty*
  * Support Case - Create support cases and receive updates
    * *support*
* **svctag** - Dell product servica tag.
  * Resources included to enter manually, with barcode scanner, or with an image.
* **apiKey** - Dell API key


