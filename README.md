# Hood Tag

_Add taglines to your favorite SF neighborhood_

## Todos

* Limit taglines to 140 characters.
* Regex limit character type input
* Click method to stay orange color of hood when click
* Numerical vote count to left of vote arrows
* If a tagline gets to -5 downvotes, hide it. 
* Remove insecure. Allow only logged-in users to post a tagline
* Add typed.js under the neighborhood name. Store in the array the top 10 voted taglines for that neighborhood. Select at random, no repeat.
* Add twitter icon next to each tagline to share it with one click, and concatenate " #hoodtag http://hoodtag.meteor.com". Limit characters taken to the first 107 characters.

## Meteor Gotchas

* Definitions should be placed under `lib/`. For example, I had initially defined `collections/` at the root level, but they were then getting loaded after I needed to use them. Lame.
* Look at the following code:

    ```js
    // Seems to work at first, but isn't reactive
    Template.name.helpers({
      someCollection: SomeCollection.find({ key: Session.get('value') })
    });

    // Works. Fully reactive
    Template.name.helpers({
      someCollection: function() {
        return SomeCollection.find({ key: Session.get('value') });
      }
    });
    ```

The bullet point is, reactivity _will not function_ unless the reactive data source (in this case the session & the mongo cursor) is wrapped in a function. If it is simply defined on the object we won't get reactivity. 
