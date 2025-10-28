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

type Blog = {
  title: string;
  date: string;
  description: string;
  image: string;
  imageAlt: string;
  slug: string;
};

const Blogs: Blog[] = [
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

const blogContainer = document.getElementById("blog-container");

Blogs.forEach((blog) => {
  const createEl = document.createElement("div");

  const title = document.createElement("h2");
  title.textContent = blog.title;

  const blogImage = document.createElement("img");
  blogImage.src = blog.image;
  blogImage.alt = blog.imageAlt;

  const description = document.createElement("p");
  description.textContent = blog.description;

  const link = document.createElement("a");
  link.href = `blogs/${blog.slug}.html`;
  link.textContent = "Read more";

  link.addEventListener("click", (e) => {
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

function openNewBlog(blog: Blog) {
  if (!blogContainer) return;

  blogContainer.innerHTML = `
    <h1> ${blog.title} </h1>
    <h2> ${blog.date} </h2>
    <img src="${blog.image}" alt="${blog.imageAlt}" />
    <p> ${blog.description} </p>`;
}
