## Fault Isolation

Limit the scope of components that can be impacted by a failure.

Monoliths often bring down the entire app if one component is failing.

Does Amazon stop you from checking out if recommendations are down (think µservices)?

![Amazon](slides/resources/images/amazon_logo_RGB.jpg "Amazon") <!-- .element: style="max-width:60%;height:auto;" -->

Note:

Fault Isolation is a key benefit to cloud native architectures.

If we think back to the rate at which most enterprises deliver software (weeks to months) a major contributing reason is because the applications are architected as monoliths.  Meaning that the application is is typically delivered as one artifact and all the dependencies are tightly coupled.  This impacts the rate of speed that the application can be delivered, because of the coordination of all the dependencies and teams involved.  But it can have another major drawback in the sense if there is problem with any part of the system the entire application is taken down.

An alternative is architectural style is to use micro-services, which you can think of as many smaller distributed applications making up one larger app with each app handling a specific domain.  Microservices are loosely coupled and because of that there is more emphasis put on error handling.  Typically, one problem microservice won't bring down the entire app.  As is the case with Amazon, when recommendations are down it doesn't stop you from checking out.
