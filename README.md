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

`DellApi(svcTag, apiKey, dataType)`

Explanation of the required wrapper information:

* **svctag** - Dell product service tag.
  * Resources included to enter manually, with barcode scanner, or with an image.
* **apiKey** - Dell API key
* **dataType** - Return data type.
  * **table** - Formatted HTML table containing just the warranties
  * **xml** - XML list
  * **json** - JSON list

Images
------
In the case that manual input is not desired or a code39 capable barcode scanner is not available, I have included support for images to be used. The idea is to pass an image of the barcode to js, the image of the barcode is read and passes the information contained in the barcode to the wrapper. Acting as a mock barcode scanner.

The image may be sent as a blob, base64 image, or image object. As everything is client side, the image is not retained.

