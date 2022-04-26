// generate feed (JSON or RSS)
// https://www.readonlychild.com/blog/astro-md-content/ (2022-04-26)
// h/t Ernesto Lopez

let feedExt = 'json' // 'json' or 'xml'

import { Feed } from "feed"

let socialImg = "https://res.cloudinary.com/brycewray-com/image/upload/c_fill,w_1024,h_512,q_auto,f_auto,x_0,z_1/"

// https://cdn.discordapp.com/attachments/830184175176122389/960357703807537183/unknown.png
export async function get() {
  const feed = new Feed({
    title: "BryceWray.com",
    description: "brycewray.com - Observations, opinions, geekery",
    id: "https://www.brycewray.com/",
    link: `https://www.brycewray.com/index.${feedExt}`,
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
  // let postsArray = []
  let sanitizedDate = ''

  // https://stackoverflow.com/questions/31649362/json-stringify-and-unicode-characters
  // https://www.dropbox.com/developers/reference/json-encoding
  var charsToEncode = /[\u007f-\uffff]/g;
  function jsonSafe (v) {
    return v.replace(charsToEncode,
      function (c) {
        return '\\u'+('000'+c.charCodeAt(0).toString(16)).slice(-4)
      }
    )
  }

  for (let postkey in allPosts) {
    if (allPosts[postkey].frontmatter.date && allPosts[postkey].frontmatter.title) {
      let post = allPosts[postkey]
      let awaitedPost = await post.default()
      let featImg = ''
      sanitizedDate = new Date(post.frontmatter.date)
      let theContent = ''
      if (post.frontmatter.featured_image) {
        featImg = socialImg + post.frontmatter.featured_image
      }
      theContent = awaitedPost.metadata.source
      if (feedExt == 'json') {
        theContent = jsonSafe(theContent)
      }
      feed.addItem({
        // title: jsonSafe(post[1].frontmatter.title),
        title:post.frontmatter.title,
        id: `https://www.brycewray.com/${post.url}/`,
        link: `https://www.brycewray.com/${post.url}/`,
        description: post.frontmatter.description,
        content: theContent,
        author: [
          {
            name: "Bryce Wray",
            email: "bw@brycewray.com",
            link: "https://www.brycewray.com/about/"
          }
        ],
        date: sanitizedDate,
        image: featImg
      })
    }
  }
  feed.items.sort((a,b) => b.date - a.date)
  if(feedExt == 'json') {
    return { body: feed.json1() }
  } else {
    return { body: feed.rss2() }
  }
}
