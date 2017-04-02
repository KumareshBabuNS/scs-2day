
## Config in a Spring Context

_Configuration_ in a Spring context can _usually_ be described as values that wire up Spring beans.

Spring has provided several approaches to setting config, including externalizing (via Command Line argumments, Env Variables, etc.)

Still, gaps exist:

* Changes to config require restarts
* No audit trail
* Config is de-centralized
* No support for sensitive information (no encryption capabilities)
