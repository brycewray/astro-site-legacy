// attempt at JSON feed

import { Feed } from "feed"

let testTitle = ''

let socialImg = "https://res.cloudinary.com/brycewray-com/image/upload/c_fill,w_1024,h_512,q_auto,f_auto,x_0,z_1/"

// https://cdn.discordapp.com/attachments/830184175176122389/960357703807537183/unknown.png
export async function get() {
  const feed = new Feed({
    title: "BryceWray.com",
    description: "brycewray.com - Observations, opinions, geekery",
    id: "https://www.brycewray.com/",
    link: "https://www.brycewray.com/index.json",
    language: "en",
    image: "https://www.brycewray.com/assets/icons/apple-icon-120x120.png",
    favicon: "https://www.brycewray.com/assets/icons/apple-icon-120x120.png",
    copyright: "Textual content copyright 2018-2022 Bryce Wray except where otherwise noted",
    feedLinks: {
      json: "https://www.brycewray.com/index.json",
      rss: "https://www.brycewray.com/index.xml"
    },
    author: {
      name: "Bryce Wray",
      email: "bw@brycewray.com",
      link: "https://www.brycewray.com/about/",
    }
  })
  let allPosts = await import.meta.globEager('./posts/**/*.md')
  console.log(allPosts)
  Object.entries(allPosts).forEach(post => {
    console.log(post[1].Content)
    feed.addItem({
      title: (post[1].frontmatter.title).replace(/\u00A0/g, " ").replace(/\u2014/g, "---"),
      id: `https://www.brycewray.com/${post[1].url}/`,
      link: `https://www.brycewray.com/${post[1].url}/`,
      description: (post[1].frontmatter.description).replace(/\u00A0/g, " ").replace(/[\u2018\u2019]/g, "'").replace(/\u2014/g, "---"),
      // content: post[1].Content,
      author: [
        {
          name: "Bryce Wray",
          email: "bw@brycewray.com",
          link: "https://www.brycewray.com/about/"
        }
      ],
      date: post[1].date,
      image: `${socialImg + post[1].frontmatter.featured_image}`
    })
  })
  return { body: feed.json1()}
}
