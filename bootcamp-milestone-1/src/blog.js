/**
 * Defines a new type named `Blog` with six properties.
 *
 * @property {string} title - The title of the blog post.
 * @property {string} date - The date when the blog post was published.
 * @property {string} description - A brief description of the blog post.
 * @property {string} image - A URL or path to an image associated with the blog post.
 * @property {string} imageAlt -  Alternative text for the image, used for accessibility.
 * @property {string} slug - A URL name used to redirect to a specific page
 */
var Blogs = [
    {
        title: "this is blog 1",
        date: "10/18/2025",
        description: "this is description 1",
        image: "blog1image.jpg",
        imageAlt: "happy man with thumbs up",
        slug: "blog1",
    },
    {
        title: "this is blog 2",
        date: "10/19/2025",
        description: "this is description 2",
        image: "blog2image.jpg",
        imageAlt: "four happy jumping business people",
        slug: "blog2",
    },
];
var blogContainer = document.getElementById("blog-container");
Blogs.forEach(function (blog) {
    var createEl = document.createElement("div");
    var title = document.createElement("h2");
    title.textContent = blog.title;
    var blogImage = document.createElement("img");
    blogImage.src = blog.image;
    blogImage.alt = blog.imageAlt;
    var description = document.createElement("p");
    description.textContent = blog.description;
    var link = document.createElement("a");
    link.href = "blogs/".concat(blog.slug, ".html");
    link.textContent = "Read more";
    link.addEventListener("click", function (e) {
        e.preventDefault();
        openNewBlog(blog);
    });
    createEl.appendChild(title);
    createEl.appendChild(blogImage);
    createEl.appendChild(description);
    createEl.appendChild(link);
    if (blogContainer) {
        blogContainer.appendChild(createEl);
    }
});
function openNewBlog(blog) {
    if (!blogContainer)
        return;
    blogContainer.innerHTML = "\n    <h1> ".concat(blog.title, " </h1>\n    <h2> ").concat(blog.date, " </h2>\n    <img src=\"").concat(blog.image, "\" alt=\"").concat(blog.imageAlt, "\" />\n    <p> ").concat(blog.description, " </p>");
}
