// Sample blog posts to display on the homepage
const samplePosts = [
    { title: "My First Blog Post", content: "Welcome to my blog! This is a simple post to kick things off." },
    { title: "Blogging in the 90s", content: "Remember the early days of the internet when blogs were simple text?" },
    { title: "The Power of Nostalgia", content: "There’s something about the 90s that hits different, don't you think?" }
];

// Function to display blog posts on the homepage
function displayBlogs() {
    const blogList = document.getElementById('blog-list');
    blogList.innerHTML = '';  // Clear any existing blog posts

    samplePosts.forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');
        postDiv.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.content}</p>
        `;
        blogList.appendChild(postDiv);
    });
}

// Event listener for creating a new blog post
document.getElementById('create-post-btn').addEventListener('click', function() {
    const title = prompt("Enter the title of your blog post:");
    const content = prompt("Enter the content of your blog post:");

    if (title && content) {
        samplePosts.push({ title, content });  // Add new post to the sample posts
        displayBlogs();  // Re-render the blog posts
    } else {
        alert("Please enter both a title and content.");
    }
});

// Initial blog posts display
displayBlogs();
