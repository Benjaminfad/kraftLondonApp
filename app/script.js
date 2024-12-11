const blogData = [
    {
      imageSrc: 'image/team.avif',
      title: 'Tech startups now making an impact',
      content: 'Kickstarter man braid godard coloring book...',
      fullContent: 'This is the full content of the first blog post. It goes into more detail about the topic...',
      link: 'blog1.html',
      name: 'Toyosi Agbaje',
      date: '13/JAN/2023.'
    },
    {
      imageSrc: 'image/appl.webp',
      title: 'How to Install iOS 17 Public Beta on iPhone',
      content: 'Adventurous iPhone users may be interested in joining the iOS 17 public beta to get an early look and feel of what the upcoming iOS 17 system software version is like on their own iPhone.',
      link: 'blog2.html',
      name: 'Benjamin Fadipe',
      date: '13/JULY/2023.'
    },
    {
      imageSrc: 'image/apple.webp',
      title: 'Say hello to Magic Port.',
      content: 'USB-C support is coming to iPhone 15 and iPhone 15 Pro — in a  whole new way, enabled by Dynamic Island.',
      link: 'blog3.html',
      date: '13/01'
    },
     {
      imageSrc: 'image/appl.webp',
      title: 'How to Install iOS 17 Public Beta on iPhone',
      content: 'Adventurous iPhone users may be interested in joining the iOS 17 public beta to get an early look and feel of what the upcoming iOS 17 system software version is like on their own iPhone.',
      link: 'blog4.html',
      date: '13/01'
    },
    {
      imageSrc: 'image/apple.webp',
      title: 'Say hello to Magic Port.',
      content: 'USB-C support is coming to iPhone 15 and iPhone 15 Pro — in a  whole new way, enabled by Dynamic Island.',
      link: 'blog5.html',
      date: '13/01'
    },
     {
      imageSrc: 'image/appl.webp',
      title: 'How to Install iOS 17 Public Beta on iPhone',
      content: 'Adventurous iPhone users may be interested in joining the iOS 17 public beta to get an early look and feel of what the upcoming iOS 17 system software version is like on their own iPhone.',
      link: 'blog6.html',
      date: '13/01'
    },
    {
      imageSrc: 'image/team.avif',
      title: 'Tech startups now making an impact',
      content: 'Kickstarter man braid godard coloring book...',
      fullContent: 'This is the full content of the first blog post. It goes into more detail about the topic...',
      link: 'blog1.html',
      name: 'Toyosi Agbaje',
      date: '13/JAN/2023.'
    },
    {
      imageSrc: 'image/appl.webp',
      title: 'How to Install iOS 17 Public Beta on iPhone',
      content: 'Adventurous iPhone users may be interested in joining the iOS 17 public beta to get an early look and feel of what the upcoming iOS 17 system software version is like on their own iPhone.',
      link: 'blog2.html',
      name: 'Benjamin Fadipe',
      date: '13/JULY/2023.'
    },
    {
      imageSrc: 'image/apple.webp',
      title: 'Say hello to Magic Port.',
      content: 'USB-C support is coming to iPhone 15 and iPhone 15 Pro — in a  whole new way, enabled by Dynamic Island.',
      link: 'blog3.html',
      date: '13/01'
    },
     {
      imageSrc: 'image/appl.webp',
      title: 'How to Install iOS 17 Public Beta on iPhone',
      content: 'Adventurous iPhone users may be interested in joining the iOS 17 public beta to get an early look and feel of what the upcoming iOS 17 system software version is like on their own iPhone.',
      link: 'blog4.html',
      date: '13/01'
    },
    {
      imageSrc: 'image/apple.webp',
      title: 'Say hello to Magic Port.',
      content: 'USB-C support is coming to iPhone 15 and iPhone 15 Pro — in a  whole new way, enabled by Dynamic Island.',
      link: 'blog5.html',
      date: '13/01'
    },
     {
      imageSrc: 'image/appl.webp',
      title: 'How to Install iOS 17 Public Beta on iPhone',
      content: 'Adventurous iPhone users may be interested in joining the iOS 17 public beta to get an early look and feel of what the upcoming iOS 17 system software version is like on their own iPhone.',
      link: 'blog6.html',
      date: '13/01'
    },
    
    // Add more objects with similar structure for other blog posts
  ];

  
const itemsPerPage = 5; // Number of blog posts per page
let currentPage = 1; // Initial page

const blogContainer = document.getElementById('blog-container');
const paginationLinks = document.querySelectorAll('#pagination a');

function displayBlogPosts(page) {
  blogContainer.innerHTML = ''; // Clear the container

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  for (let i = startIndex; i < endIndex && i < blogData.length; i++) {
    const blog = blogData[i];
    const blogBox = document.createElement('div');
    blogBox.className = 'blog-box';

    blogBox.innerHTML = `
      <div class="blog-img">
        <img src="${blog.imageSrc}" alt="Blog Image">
      </div>
      <div class="blog-details">
        <h4>${blog.title}</h4>
        <p>${blog.content}</p>
        <a href="${blog.link}?id=${i}">CONTINUE READING</a>
        <h1>${blog.date}</h1> <h5>${blog.name}</h5>
      </div>
    `;

    blogContainer.appendChild(blogBox);
  }
}

function setActivePage(page) {
  paginationLinks.forEach((link) => {
    const pageNumber = parseInt(link.getAttribute('data-page'));
    if (pageNumber === page) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

paginationLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const page = parseInt(link.getAttribute('data-page'));
    currentPage = page;
    displayBlogPosts(currentPage);
    setActivePage(currentPage);
  });
});

// Display the initial page
displayBlogPosts(currentPage);
setActivePage(currentPage);