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

![Kirby builder Screenshot](https://raw.githubusercontent.com/TimOetting/kirby-builder/master/kirby-builder-panel.png)

The content will be YAML-structured. Inside the template, the field has to be decooded as an array using $page->fruits()->yaml().

	----

    Fruits: 

    - 
      text: >
        Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Ipsa, rerum quam
        similique numquam doloremque, quidem
        sequi placeat quibusdam aspernatur
        doloribus tempore, obcaecati eligendi
        odio eaque repellendus accusamus veniam
        blanditiis impedit.
      _fieldset: bodytext
    - 
      image: forrest.jpg
      url: www.getkirby.com
      _fieldset: linkedImage
    - 
      text: >
        Power is of two kinds. One is obtained
        by the fear of punishment and the other
        by acts of love. Power based on love is
        a thousand times more effective and
        permanent then the one derived from fear
        of punishment.
      citation: Mahadma Gandhi
      _fieldset: quote

## Setup
The plugin comes in two pieces:
* The content of the **fields** folder has to be copied into **site/fields** inside your Kirby installation
* The content of the **plugins** folder has to be copied into **site/plugins** inside your Kirby installation
 