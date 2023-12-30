document.addEventListener('DOMContentLoaded', function () {
    const postForm = document.getElementById('post-form');
  
    postForm.addEventListener('submit', function (event) {
      event.preventDefault();
  
      // Get values from the form
      const title = document.getElementById('title').value;
      const content = document.getElementById('content').value;
  
      // Create a new blog post container
      const postContainer = document.createElement('div');
      postContainer.classList.add('blog-post-container');
  
      // Create a new blog post element
      const postElement = document.createElement('div');
      postElement.classList.add('blog-post');
      postElement.innerHTML = `
        <h2>${title}</h2>
        <p>${content}</p>
      `;
  
      // Append the new post to the post container
      postContainer.appendChild(postElement);
  
      // Append the post container to the blog posts section
      const blogPosts = document.getElementById('blog-posts');
      blogPosts.appendChild(postContainer);
  
      // Clear the form fields
      document.getElementById('title').value = '';
      document.getElementById('content').value = '';
    });
  });
  