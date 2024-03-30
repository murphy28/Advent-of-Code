## Day 1: Trebuchet?!
**Total Time**: ~1 hour

**Language**: Node.js / Javascript

**Lines**: 89 lines for parts 1 and 2

I made the decision to write my submission in Javascript, specifically Node.js. This is because I am currently most comfortable in this langauge, which allowed me to create and troubleshoot my code much quicker than another langauge for me.

My first attempt simply added any integer inside of a line to a string, and from there I only took the first and last values from it, merged them into a new string, and then converted that into an integer to be added separately. I do recognize that there may be better ways to go about this process, it may be more beneficial to use a regular expression to create my new string for code readability, or perhaps skipping this entirely and iterating forwards and backwards through the string until a number is hit.

My second attempt reworked the entire process in order to account for number strings in english instead of integers. The method I took to accomplish this essentially loops through all possible digits, finds the first index of the integer and string versions, takes the lowest of the two (when an index is found), and then updates the total index accordingly until our numbers are found. These are then added together as strings, and then turned back into an integer. This part is definitely more overengineered than the first, and could very well be simplified. I chose to write out the new parts how I did simply to keep it relitively clean to work with on my end.

This code can be ran on any machine with Node.js installed (I'm running v21.4.0), and you can run it in a terminal under this directory with the command ``node .``