# Dressing Down Dress Codes

The purpose of this visual is to highlight the uncertain language used in dress codes.

This project focused on using a data set that related to the topic of uncertainty. The data used is from a [similar project](https://pudding.cool/2019/02/dress-code-sexualization/) done by The Pudding in February of 2019. The raw data can 
be found on their [github](https://github.com/the-pudding/data/tree/master/dress_codes).

All the data was processed using R, with the final data cleaning script located [here](). This included filtering the dress code data set to only include "body" items that were censored, as well
as aggregating the different items as the original was at the individual school level. The data itself contains dresscodes from 481 public schools across the US.

For the visual element, the idea was to use some sort of shape or pixelation to "censor" each area at a level that corresponded to the frequency of the censorship across the schools.
Initially, pixelation was the preferred method, as it parallels how bodies are censored in media, but this had a few shortcomings, namely that pixelation requires different colors and hues
to be visible. This led to switching to using rectangles of differing opacities. 

To highlight the dichotomy between the certain and uncertain terms, the labels were segregated on either side of the forms and the hover over feature used a different color and also on showed
a rough estimate of what the uncertain term may be referring to. 

Final Mockup:
![]()

[Live Project]()
