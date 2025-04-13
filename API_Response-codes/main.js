Success Codes
================
Code	Message	Meaning
200	    OK	Request succeeded. Most common success code.
201  	Created	Resource was successfully created (e.g., after a POST request).
202  	Accepted	Request accepted for processing, but not completed yet.
204  	No Content	Request succeeded, but no content is returned (common for DELETE).



---------------------------------------------------------------------------------------------------------


Client Error Codes (4xx)
Code	Message	Meaning
400	    Bad Request	The request is malformed or missing required parameters.
401	    Unauthorized	Missing or invalid authentication. User is not logged in.
403	    Forbidden	Authenticated but not authorized (e.g., insufficient permissions).
404	    Not Found	The requested resource doesn't exist.
405	    Method Not Allowed	HTTP method not allowed on this endpoint (e.g., using POST on a GET-only route).
422	    Unprocessable Entity	Validation error (common with form inputs, especially in APIs like Laravel).

---------------------------------------------------------------------------------------------------------


❌ Server Error Codes (5xx)
Code	Message	Meaning
500	    Internal Server Error	Generic error on the server. Something went wrong.
502	    Bad Gateway	Server received an invalid response from an upstream server.
503	    Service Unavailable	Server is temporarily down or busy.
504	    Gateway Timeout	Server didn’t receive a timely response from an upstream server.

---------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------

---------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------