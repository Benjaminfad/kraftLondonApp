const blogData = [
    {
      imageSrc: 'image/team.avif',
      title: 'Tech startups now making an impact',
      content: 'Kickstarter man braid godard coloring book...',
      fullContent: 'This is the full content of the first blog post. It goes into more detail about the topic...',
      link: 'blog1.html',
      date: '13/01'
    },
    {
      imageSrc: 'image/appl.webp',
      title: 'How to Install iOS 17 Public Beta on iPhone',
      content: 'Adventurous iPhone users may be interested in joining the iOS 17 public beta to get an early look and feel of what the upcoming iOS 17 system software version is like on their own iPhone.',
      link: 'blog2.html',
      date: '13/01'
    },
    
    // Add more objects with similar structure for other blog posts
  ];

  const blogContainer = document.getElementById('blog-container');

  // Iterate through the blog data and create blog boxes
  blogData.forEach((blog,index)=> {
    const blogBox = document.createElement('div');
    blogBox.className = 'blog-box';

    blogBox.innerHTML = `
    <div class="blog-img">
      <img src="${blog.imageSrc}" alt="Blog Image">
    </div>
    <div class="blog-details">
      <h4>${blog.title}</h4>
      <p>${blog.content}</p>
      <a href="${blog.link}?id=${index}">CONTINUE READING</a> <!-- Pass index as a query parameter -->
    </div>
    <h1>${blog.date}</h1>
    `;

    blogContainer.appendChild(blogBox);
  });

 