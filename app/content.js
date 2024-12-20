const blogData = [
    {
        imageSrc: 'image/team.avif',
      fullContent: 'In this blog post, we dive deep into the profound impact that innovative tech startups are making across a diverse range of industries, ushering in a wave of transformative change. As the technological landscape evolves at an unprecedented pace, these pioneering startups emerge as the catalysts of disruption and innovation, leaving their mark on sectors spanning healthcare, finance, education, and beyond.Through the utilization of cutting-edge technologies like artificial intelligence, blockchain, and augmented reality, these startups are not merely addressing existing challenges, but also uncovering uncharted opportunities that were once beyond imagination. Their ability to swiftly adapt and embrace agility reshapes the dynamics of the market, fostering healthy competition and prompting industry titans to reimagine their strategies.Fuelled by a collaborative spirit, often seen through partnerships with established corporations and academia, these startups cultivate a culture of knowledge sharing and cross-pollination, intensifying the tempo of innovation. As these startups thrive and attract investments, they wield their transformative power to not only reshape industries but also contribute to job creation, economic growth, and the flourishing of innovation ecosystems.Guided by unique problem-solving approaches and a commitment to user-centric design, these startups engineer breakthrough products and services that redefine human interaction with technology. From personalized healthcare solutions to sustainable energy breakthroughs, tech startups champion causes that align with evolving societal needs, placing purpose at the core of their ventures.In a world of perpetual change, tech startups stand at the forefront of progress, steering the Fourth Industrial Revolution, and forging pathways to solutions that hold the potential to reshape our future in ways beyond imagination.'
     
    }
  
    
    // Add more objects with similar structure for other blog posts
  ];

 
    // Retrieve the 'id' parameter from the query string
const queryParams = new URLSearchParams(window.location.search);
const id = queryParams.get('id');

// Display the full content of the corresponding blog post
const fullContentContainer = document.getElementById('full-content');
fullContentContainer.innerHTML = blogData[id].fullContent;


// Set the image source for the blog post image
const blogImage = document.getElementById('blog-image');
blogImage.src = blogData[id].imageSrc;