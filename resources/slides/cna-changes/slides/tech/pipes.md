## Microservices - Unix Pipes and Filters


![Pipes](slides/resources/images/pipes.png "Pipes")

`cut -d" " -f1 < access.log | sort | uniq -c | sort -rn | less`
