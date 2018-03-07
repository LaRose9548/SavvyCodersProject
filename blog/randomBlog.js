// w3schools how to use google.translate.TranslateElement
function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    {pageLanguage: 'en'},
    'google_translate_element'
  );
}

// Creating a single blog entry
const createBlogEntry = (post) => {
  let blogStr = '<div class="container entryContent">';
  blogStr += '<h3>Post ' + post.id + ': ' + post.title + '</h3>';
  blogStr += '<p>' + post.body + '</p>';
  blogStr += '</div>';

  $( '#blogContent' ).append ( blogStr );
};

let getPosts = $.ajax( "https://jsonplaceholder.typicode.com/posts" );

getPosts.then( ( posts ) => posts.forEach( createBlogEntry ) );
