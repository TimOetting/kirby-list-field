# List Field for Kirby CMS

This is a custom list field for [Kirby](http://getkirby.com). It lets you write and sort a simple list of text inputs.

Here is a blueprint example:

	fields:
      ...
      fruits:
        label: Give Me Fruits
        type: list
        placeholder: Add a new fruit

This will give us a section field like this:

![list field demo](https://github.com/TimOetting/kirby-list-field/blob/master/PREVIEW.gif?raw=true)

The content will be YAML-structured. Inside the template, the field has to be decooded as an array using $page->fruits()->yaml().

    ----

    Fruits: 

    - Lemons
    - Apples
    - Banana
    - Oranges

## Setup
Custom fields are located in *site/fields* inside your Kirby installation. If you can't find any *fields* folder, create one. The right place for the *list* folder is *site/fields/list*.
 