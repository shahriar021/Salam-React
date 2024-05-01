# what is jsx?

jsx is html or xml like syntex.it helps us to write html in js without createElement and append child.

# ● Superpowers of JSX

jsx is easy to debug and maintain.it gives the power to write markup and also write some logic

# Role of type attribute in script tag? What options can I use there?

actually type in tag says what type of content <script></script> there will be.
the defualt of <script> is text/javascript

text/javascript - it says the content is javascript
text/module - it says now it is module.it can be imported or exported from other files
text/babel - it says it requires it is babel type and requires bable to transpile it
text/typescript: As the name suggest the script is written in TypeScript.

# {TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>} in JSX.

first one is like a variable.
second one says it is component
<TitleComponent></TitleComponent> : <TitleComponent /> and <TitleComponent></TitleComponent> are equivalent only when < TitleComponent /> has no child components. The opening and closing tags are created to include the child components.
