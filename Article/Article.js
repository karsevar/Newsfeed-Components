// Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(articleElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = articleElement;
    // create a reference to the ".expandButton" class. 
    this.expandButton = articleElement.querySelector('.expandButton');
    // console.log(this.expandButton) 
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.textContent = 'EXPAND';

    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener('click', this.expandArticle.bind(this));

    // Stretch problem #2 remove button:
    // The following implementation works but still it is very memory 
    // inefficient. Will need to think of a better way.
    const deleteButton = document.createElement('span');
    deleteButton.className = 'remove';
    deleteButton.textContent = 'read';
    this.domElement.prepend(deleteButton);

    this.removeButton = this.domElement.querySelector('.remove');
    // Setting a click handler for removeButton:
    this.removeButton.addEventListener('click', this.removeArticle.bind(this));
  }

  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    this.domElement.classList.toggle('article-open');
  }

  // Following code is for stretch problem 2:
  removeArticle() {
    this.domElement.style.display = 'none';
  }
}

// stretch article markup with DOM and class component:

class ArticleMarkup {
  constructor(articleContents) {
    this.domElement = articleContents.domElement;
    this.header = articleContents.header;
    this.date = articleContents.date;
    this.paragraph = articleContents.paragraph;
    this.printMarkup(this);
  }

  printMarkup() {

    // Creating the div layer <div class='article'>
    const container = document.createElement('div');
    container.className = 'article';

    // Creating the h2 element 
    const headerElement = document.createElement('h2');
    headerElement.textContent = this.header;

    // Creating the p element <p class='date'>
    const dateElement = document.createElement('p');
    dateElement.className = 'date';
    dateElement.textContent = this.date;

    // Creating the p element for article story
    const paragraph = document.createElement('p');
    paragraph.textContent = this.paragraph;

    // Creating the span element for the expand button <span class='expandButton'>
    const spanButton = document.createElement('span');
    spanButton.className = 'expandButton'; 

    /* 
    Creating the following node tree 
    <div class='article'>
      <span class='remove'></span> //add on for stretch #2
      <h2></h2>
      <p class='date'></p>
      <p></p>
      <span class='expandButton'></span>
    </div>
    */

    // container.appendChild(deleteButton);
    container.appendChild(headerElement);
    container.appendChild(dateElement);
    container.appendChild(paragraph);
    container.appendChild(spanButton);

    // Appends the new <div class='article'> to the parent <div class='articles'>
    this.domElement.appendChild(container);
  }
}

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the Article class.

*/

// Nice the following ArticleMarkup class works perfectly it populates 
// the html page with new .article markup. Will need to refactor this 
// with the Article class if possible.

const articleObject1 = {
  'domElement': document.querySelector('.articles'),
  'header': 'Lambda School Students: "We\'re the best!"',
  'date': 'Nov 5th, 2017',
  'paragraph': 'Grievous fett calamari anakin skywalker hutt. Alderaan darth kenobi darth r2-d2 windu mothma. Sidious darth calamari moff. Wampa mothma sith wedge solo mara. Darth gonk maul sith moff chewbacca palpatine mace amidala. C-3po solo skywalker anakin yoda leia. Maul wampa bespin watto jade ewok darth jabba. Lando dantooine moff k-3po dantooine luke. Fisto mandalore darth wedge c-3p0 ahsoka. Secura moff palpatine fett. Anakin sith darth darth. Moff solo leia ben ponda jade. Binks jango aayla skywalker skywalker cade. Mustafar darth ventress anakin watto. Yavin jawa sebulba owen jinn tatooine sith organa.'
}

new ArticleMarkup(articleObject1);

let articles = document.querySelectorAll('.article');
console.log(articles);


articles.forEach((articleElement) => {
  return new Article(articleElement)
})


