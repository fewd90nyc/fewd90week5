# Homework 5 - Grade Assigner

Create a Grade Assignment app that will allow you to view your student roster and assign a curved letter grade to each student.

![Prompt](prompt.gif)


### Step 3 - Build!

Hide and show `div.roster` and `div.assign` when the user clicks on `#roster` and `#assign`. Turn the class `.selected` on and off on the `#roster` and `#assign` as appropriate.

Create an onclick event for `#clickme` that gets the value of `#name` and `#grade`.

- Decide on what grade thresholds determine what letter grade (what the "curve" is).
- Perform a series of checks to determine the person's letter grade (think Age Privilege exercise).
- Add a `<li>` to the `#reportcard` `<ul>` by adding to its `innerHTML` property.
- This will look similar to:

```javascript
someList.innerHTML = someList.innerHTML + "<li>New Item</li>";
```

Feel free to extrapolate or add any features you think are interesting. Add validation, go wild!

**CHALLENGE**: You'll notice there is an additional script in the `js` folder, `js/students.js`. In that script is an Array of student Objects. The challenge, for those of you who are feeling really confident in your JS ability, is to, in your HTML, delete what is currently in the `<div class="roster">`. Add that script to your HTML before the project.js and then, in project.js, loop through that array, and populate the roster, AS WELL AS assigning a grade in the `#reportcard` for each student. If you're feeling REALLY ambitious, think about how you would _delete_ one of the `<li>` (onclick for instance).

### Step 4 - Commit and Sync

Work on your website locally and view it in the browser by opening your index.html file. When your site looks good, Commit and Sync with the Github App.

### Step 5 - Pull Request

Send a Pull Request to submit your homework. From your fewd90week5 page on github.com (https://github.com/YOURUSERNAME/fewd90week5), click on the "New Pull Request" button and follow the prompts. 

### Step 6 - Publish with [Gitbot](http://gitbot.co/)! (optional)

Want to post your fewd90week5 project on your github.io url? Log into gitbot and click the fewd90week5 repository button and VOILA! It will (perhaps after a few minutes) be viewable online at http://YOURUSERNAME.github.io/fewd90week5

