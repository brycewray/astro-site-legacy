// generate feed (JSON or RSS)

let feedExt = 'xml' // 'json' or 'xml'

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

  // https://stackoverflow.com/questions/31649362/json-stringify-and-unicode-characters
  // https://www.dropbox.com/developers/reference/json-encoding
  var charsToEncode = /[\u007f-\uffff]/g;
  function jsonSafe (v) {
    return JSON.stringify(v).replace(charsToEncode,
      function (c) {
        return '\\u'+('000'+c.charCodeAt(0).toString(16)).slice(-4)
      }
    )
  }

  Object.entries(allPosts).forEach(post => {
    let sanitizedDate = new Date(post[1].frontmatter.date)
    let contentType = "<p>This is a <em>simulation</em> of the stuff we might see in real, typographically “nasty” HTML."
    let featImg = ''
    if (post[1].frontmatter.featured_image) {
      featImg = `${socialImg + post[1].frontmatter.featured_image}`
    }
    contentType = jsonSafe(contentType)
    feed.addItem({
      title: jsonSafe(post[1].frontmatter.title),
      id: `https://www.brycewray.com/${post[1].url}/`,
      link: `https://www.brycewray.com/${post[1].url}/`,
      description: jsonSafe(post[1].frontmatter.description),
      content: contentType,
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
  })
  feed.items.sort((a,b) => b.date - a.date)
  if(feedExt == 'xml') {
    return { body: feed.rss2() }
  } else {
    return { body: feed.json1() }
  }
}
