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
    title: "Winter 2024: San Francisco",
    date: "10/18/2025",
    description: "Last winter I went to San Francisco!",
    image: "sanfran.jpg",
    imageAlt:
      "me in front of a lion dance wall mural in chinatown san francisco",
    slug: "san-francisco-winter-2024",
  },
  {
    title: "Summer 2024: New York",
    date: "10/19/2025",
    description: "Last summer I went to New York!",
    image: "newyork.jpg",
    imageAlt: "me sitting on a rock in central park new york",
    slug: "new-york-summer-2024",
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
