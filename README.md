# Dell Warranty API Wrapper

Javascript wrapper to facilitate the easy use of the Dell Warranty API.

Features
=========
* Under **1KB**, extremely lightweight.
* Client side wrapper capabale of returning a json, xml, or html object. The html object is a table containing values. 
* Demo application that makes use of the js wrapper, integrating the html object with an appendable table.
* Support for multiple dell service tags.
* **[COMING SOON]** - Support for mobile devices: i.e. photos of barcodes.

Wrapper
-------
The Javascript wrapper can be called with:

`warranty(svcTag, apiKey, dataType)`

Explanation of the required wrapper information:

* **svctag** - Dell product service tag.
  * Can accept individual tags, or multiple tags seperated by a pipe - '|'.
* **apiKey** - Dell API key
* **dataType** - Return data type.
  * **table** - Formatted HTML table containing just the warranties
  * **xml** - XML list
  * **json** - JSON list

**All attributes should be sent as strings.** 

Dependencies
------------
The wrapper was written to be very small. If you plan on returning the html table from the wrapper, you must also include the jquery dateFormat library. This is to improve readability as the date is returned as a date/time in ISO 8610 format. In the demo application it is loaded from [CloudFlare CDN](https://cdnjs.cloudflare.com/ajax/libs/jquery-dateFormat/1.0/jquery.dateFormat.min.js), I would recommend the same. 

Error Handling
---------------
There is a limited amount of error handling included with the wrapper. If there is an error, you will most likely be directed to the console to check it out for yourself. Refer to the FAQ below for more common issues.

FAQ
----
**Q. Error - 'Access-Control-Allow-Origin' header is present on the requested resource...**

**A.** If the application is running on a web server, it must be sending the Access-Control-Allow-Origin headers - *CORS*. If this is being run **locally**, consider installing the [CORS Chrome extension](http://goo.gl/oQNhwh) for an easy fix. This may open security holes[^1].

[^1]: If the site is accessible by the public and still located within an organization, an attacker could potentially send a COR to the page and copy the response. Although I do not see that as being a problem with the information being sent here. [More Information](https://code.google.com/p/html5security/wiki/CrossOriginRequestSecurity#Potential_Security_Concerns_with_COR).

