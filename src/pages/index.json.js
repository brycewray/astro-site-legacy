// attempt at JSON feed

// https://cdn.discordapp.com/attachments/830184175176122389/960357703807537183/unknown.png
export async function get() {
  let allPosts = await import.meta.globEager('./posts/**/*.md')
  // let sortedPosts = Object.entries(allPosts).sort().reverse()
  // function replacer(key, value) {
  //   value = value.toString().replace('B', ' ')
  //   return value
  // }
  let key, value
  let testTitle = ''

  // Object.keys(sortedPosts).forEach(function (key) {
  //   var value = sortedPosts[key][0]
  //   testTitle = testTitle + " - " + value
  // })

  // sortedPosts.map((post) => {
  //   post && (testTitle = `A` + testTitle + post)
  // })

  return {
    // body: JSON.stringify(sortedPosts, false, 2)
    body: JSON.stringify({
      version: "https://jsonfeed.org/version/1.1",
      title: "BryceWray.com",
      description: "brycewray.com — Observations, opinions, geekery",
      home_page_url: "https://www.brycewray.com/",
      feed_url: "https://www.brycewray.com/index.json",
      language: "en",
      icon: "https://www.brycewray.com/",
      favicon: "https://www.brycewray.com/",
      authors: [
        {
          name: "Bryce Wray",
          url: "https://www.brycewray.com/about/",
          avatar: "https://www.brycewray.com/",
        }
      ],
      items: [
        {
          title: `${testTitle}`,
          date_published: "date",
          id: "post permalink",
          url: "post permalink",
          authors: [
            {
              name: "Bryce Wray",
              url: "https://www.brycewray.com/about/",
              avatar: "https://www.brycewray.com/",
            }
          ]
        }
      ]
    }, false, 2)
  }
}


// export async function get() {
//   return {
//     body: JSON.stringify({
//       version: "https://jsonfeed.org/version/1.1",
//       title: "BryceWray.com",
//       description: "brycewray.com — Observations, opinions, geekery",
//       home_page_url: "https://www.brycewray.com/",
//       feed_url: "https://www.brycewray.com/index.json",
//       language: "en",
//       icon: "https://www.brycewray.com/",
//       favicon: "https://www.brycewray.com/",
//       authors: [
//         {
//           name: "Bryce Wray",
//           url: "https://www.brycewray.com/about/",
//           avatar: "https://www.brycewray.com/",
//         }
//       ],
//       items: [
//         {
//           title: "page title",
//           date_published: "date",
//           id: "post permalink",
//           url: "post permalink",
//           authors: [
//             {
//               name: "Bryce Wray",
//               url: "https://www.brycewray.com/about/",
//               avatar: "https://www.brycewray.com/",
//             }
//           ],
//           content_html: "post HTML, jsonified"
//         }
//       ]
//     })
//   }
// }


/* resulting JSON as of 2022-04-16-1534CDT
{
  "./posts/2020/06/o-say-can-you-ci-cd.md": {
    "frontmatter": {
      "setup": "import Layout from '@layouts/Post.astro'\nimport BlueBox from '@components/BlueBox.astro'\nimport YellowBox from '@components/YellowBox.astro'\nimport STweetV2 from '@components/STweetV2.astro'\nimport Disclaimer from '@components/Disclaimer.astro'\n",
      "title": "O say can you CI/CD?",
      "description": "A way around the Netlify free-tier buildÂ limit.",
      "author": "Bryce Wray",
      "date": "2020-06-28T18:45:00.000Z",
      "lastmod": "2022-03-28T18:40:00.000Z",
      "discussionId": "2020-06-o-say-can-you-ci-cd",
      "featured_image": "dominoes-4020617_4870x2672.jpg",
      "featured_image_width": 4870,
      "featured_image_height": 2672,
      "featured_image_alt": "A row of dominoes with a hand about to tip them over",
      "featured_image_caption": "<span class=\"caption\">Image: <a href=\"https://pixabay.com/users/SparrowsHome-4168069/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=4020617\">SparrowsHome</a>; <a href=\"https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=4020617\">Pixabay</a></span>\n"
    },
    "file": "/Users/thewrays/astro-site/src/pages/posts/2020/06/o-say-can-you-ci-cd.md",
    "url": "/posts/2020/06/o-say-can-you-ci-cd"
  },
  "./posts/2022/01/fetching-remote-images-eleventy.md": {
    "frontmatter": {
      "setup": "import Layout from '@layouts/Post.astro'\nimport BlueBox from '@components/BlueBox.astro'\nimport YellowBox from '@components/YellowBox.astro'\nimport STweet from '@components/STweet.astro'\nimport Disclaimer from '@components/Disclaimer.astro'\n",
      "title": "Fetching remote images withÂ Eleventy",
      "description": "Following up on last monthâ€™s article about doing this inÂ Hugo, we explain how to get there in a JavaScript-basedÂ SSG.",
      "author": "Bryce Wray",
      "date": "2022-01-25T20:45:00.000Z",
      "lastmod": "2022-01-26T15:10:00.000Z",
      "discussionId": "2022-01-fetching-remote-images-eleventy",
      "featured_image": "dog-fetching-stick-6724085_5184x3456.jpg",
      "featured_image_width": 5184,
      "featured_image_height": 3456,
      "featured_image_alt": "A dog fetching a stick",
      "featured_image_caption": "<span class=\"caption\">Image: <a href=\"https://pixabay.com/users/annapowa-17446403/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=6724085\">Anna PowaÅ‚owska</a>; <a href=\"https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=6724085\">Pixabay</a></span>\n"
    },
    "file": "/Users/thewrays/astro-site/src/pages/posts/2022/01/fetching-remote-images-eleventy.md",
    "url": "/posts/2022/01/fetching-remote-images-eleventy"
  },
  "./posts/2022/03/gems-in-rough-16.md": {
    "frontmatter": {
      "setup": "import Layout from '@layouts/Post.astro'\nimport BlueBox from '@components/BlueBox.astro'\nimport YellowBox from '@components/YellowBox.astro'\nimport STweetV2 from '@components/STweetV2.astro'\n",
      "title": "Gems in the rough #16",
      "subtitle": "Or, what else has been goingÂ on?",
      "description": "Eleventy 2.x (yes, already), trying giscus, another shameless plug.",
      "author": "Bryce Wray",
      "date": "2022-03-11T15:55:00.000Z",
      "lastmod": "2022-03-17T15:39:00.000Z",
      "discussionId": "2022-03-gems-in-rough-16",
      "featured_image": "gemstones-sung-jin-cho-0d3qxUozE-0-unsplash_7315x4881.jpg",
      "featured_image_width": 7315,
      "featured_image_height": 4881,
      "featured_image_alt": "Colorful gemstones",
      "featured_image_caption": "<span class=\"caption\">Image: <a href=\"https://unsplash.com/@mbuff?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\">Sung Jin Cho</a>; <a href=\"https://unsplash.com/s/photos/gemstones?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\">Unsplash</a></span>\n"
    },
    "file": "/Users/thewrays/astro-site/src/pages/posts/2022/03/gems-in-rough-16.md",
    "url": "/posts/2022/03/gems-in-rough-16"
  },
  "./posts/2022/03/simpler.md": {
    "frontmatter": {
      "setup": "import Layout from '@layouts/Post.astro'\nimport BlueBox from '@components/BlueBox.astro'\nimport YellowBox from '@components/YellowBox.astro'\nimport STweet from '@components/STweet.astro'\n",
      "title": "Simpler",
      "date": "2022-03-31T14:55:00.000Z",
      "description": "Making static tweets work in Astro."
    },
    "file": "/Users/thewrays/astro-site/src/pages/posts/2022/03/simpler.md",
    "url": "/posts/2022/03/simpler"
  },
  "./posts/2022/03/simplify-simplify-again.md": {
    "frontmatter": {
      "setup": "import Layout from '@layouts/Post.astro'\nimport BlueBox from '@components/BlueBox.astro'\nimport YellowBox from '@components/YellowBox.astro'\n",
      "title": "Simplify, simplify (again)",
      "subtitle": "Back to basics, toÂ coin aÂ phrase",
      "description": "As I was saying over a year ago before I was so rudely interrupted byÂ lifeÂ .Â .Â .",
      "author": "Bryce Wray",
      "date": "2022-03-22T18:24:00.000Z",
      "lastmod": "2022-03-23T14:08:00.000Z",
      "discussionId": "2021-03-simplify-simplify-again",
      "featured_image": "oxane-alexandroff-Z0ccygTNEfM-unsplash_6000x4000.jpg",
      "featured_image_width": 6000,
      "featured_image_height": 4000,
      "featured_image_alt": "Concept photo of simplicity and serenity - distant sea horizon viewed from a beach",
      "featured_image_caption": "<span class=\"caption\">Image: <a href=\"https://unsplash.com/@oxanetruth?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\">Oxane Alexandroff</a>; <a href=\"/s/photos/simplicity?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\">Unsplash</a></span>\n"
    },
    "file": "/Users/thewrays/astro-site/src/pages/posts/2022/03/simplify-simplify-again.md",
    "url": "/posts/2022/03/simplify-simplify-again"
  },
  "./posts/2022/03/using-dart-sass-hugo-sequel.md": {
    "frontmatter": {
      "setup": "import Layout from '@layouts/Post.astro'\nimport YellowBox from '@components/YellowBox.astro'\n",
      "title": "Using Dart Sass withÂ Hugoâ€”the sequel",
      "subtitle": "A solution for even Node-haters",
      "description": "Hugoâ€™s chief developer comesÂ up with aÂ way to get Embedded DartÂ Sass on theÂ host, afterÂ all.",
      "author": "Bryce Wray",
      "date": "2022-03-09T23:41:00.000Z",
      "lastmod": "2022-03-12T15:34:00.000Z",
      "discussionId": "2022-03-using-dart-sass-hugo-sequel",
      "featured_image": "sass-and-glasses_3200x1800.png",
      "featured_image_width": 3200,
      "featured_image_height": 1800,
      "featured_image_alt": "Sass logo and Sass glasses icon on gradient background",
      "featured_image_caption": "<span class=\"caption\">Image: Sass logo and Sass glasses icon, sourced from <a href=\"https://sass-lang.com\" target=\"_blank\" rel=\"noopener\">Sass website</a>; adapted in <a href=\"https://affinity.serif.com/en-us/designer/\" target=\"_blank\" rel=\"noopener\">Affinity&nbsp;Designer</a></span>\n"
    },
    "file": "/Users/thewrays/astro-site/src/pages/posts/2022/03/using-dart-sass-hugo-sequel.md",
    "url": "/posts/2022/03/using-dart-sass-hugo-sequel"
  },
  "./posts/2022/03/using-dart-sass-hugo.md": {
    "frontmatter": {
      "setup": "import Layout from '@layouts/Post.astro'\nimport YellowBox from '@components/YellowBox.astro'\nimport Disclaimer from '@components/Disclaimer.astro'\n",
      "title": "Using Dart Sass withÂ Hugo",
      "subtitle": "Thereâ€™s no reason toÂ wait forÂ the goodÂ stuff",
      "description": "Until hosts allow Embedded Dart Sass in their build processes, hereâ€™s a not-too-hacky workaround for Sass-on-HugoÂ fans.",
      "author": "Bryce Wray",
      "date": "2022-03-08T17:09:00.000Z",
      "lastmod": "2022-03-17T11:32:00.000Z",
      "discussionId": "2022-03-using-dart-sass-hugo",
      "featured_image": "sass-and-glasses_3200x1800.png",
      "featured_image_width": 3200,
      "featured_image_height": 1800,
      "featured_image_alt": "Sass logo and Sass glasses icon on gradient background",
      "featured_image_caption": "<span class=\"caption\">Image: Sass logo and Sass glasses icon, sourced from <a href=\"https://sass-lang.com\" target=\"_blank\" rel=\"noopener\">Sass website</a>; adapted in <a href=\"https://affinity.serif.com/en-us/designer/\" target=\"_blank\" rel=\"noopener\">Affinity&nbsp;Designer</a></span>\n"
    },
    "file": "/Users/thewrays/astro-site/src/pages/posts/2022/03/using-dart-sass-hugo.md",
    "url": "/posts/2022/03/using-dart-sass-hugo"
  },
  "./posts/2022/04/let-all-your-devices-see-your-site.md": {
    "frontmatter": {
      "setup": "import Layout from '@layouts/Post.astro'\nimport BlueBox from '@components/BlueBox.astro'\nimport YellowBox from '@components/YellowBox.astro'\nimport STweetV2 from '@components/STweetV2.astro'\nimport Disclaimer from '@components/Disclaimer.astro'\n",
      "title": "Let all your devices see yourÂ site",
      "description": "How to make â€œlocalhostâ€ slightly lessÂ local.",
      "author": "Bryce Wray",
      "date": "2022-04-02T16:00:00.000Z",
      "lastmod": "2022-04-16T14:15:00.000Z",
      "discussionId": "2022-04-let-all-your-devices-see-your-site",
      "featured_image": "web-dev-concept_fotis-fotopoulos-DuHKoV44prg-unsplash_2400x1600.jpg",
      "featured_image_width": 2400,
      "featured_image_height": 1600,
      "featured_image_alt": "Web development concept - blurry photo of darkened keyboard and two monitors showing computer code",
      "featured_image_caption": "<span class=\"caption\">Image: <a href=\"https://unsplash.com/@ffstop?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\">Fotis Fotopoulos</a>; <a href=\"https://unsplash.com/s/photos/web-development?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\">Unsplash</a>\n</span>\n"
    },
    "file": "/Users/thewrays/astro-site/src/pages/posts/2022/04/let-all-your-devices-see-your-site.md",
    "url": "/posts/2022/04/let-all-your-devices-see-your-site"
  },
  "./posts/2022/04/test-of-five-1.md": {
    "frontmatter": {
      "setup": "import Layout from '@layouts/Post.astro'\nimport BlueBox from '@components/BlueBox.astro'\nimport YellowBox from '@components/YellowBox.astro'\nimport STweet from '@components/STweet.astro'\n",
      "title": "Test of five #1",
      "date": "2022-04-01T14:55:00.000Z",
      "description": "Working with pagination, test #1."
    },
    "file": "/Users/thewrays/astro-site/src/pages/posts/2022/04/test-of-five-1.md",
    "url": "/posts/2022/04/test-of-five-1"
  },
  "./posts/2022/04/test-of-five-2.md": {
    "frontmatter": {
      "setup": "import Layout from '@layouts/Post.astro'\nimport BlueBox from '@components/BlueBox.astro'\nimport YellowBox from '@components/YellowBox.astro'\nimport STweet from '@components/STweet.astro'\n",
      "title": "Test of five #2",
      "date": "2022-04-02T14:55:00.000Z",
      "description": "Working with pagination, test #2."
    },
    "file": "/Users/thewrays/astro-site/src/pages/posts/2022/04/test-of-five-2.md",
    "url": "/posts/2022/04/test-of-five-2"
  },
  "./posts/2022/04/test-of-five-3.md": {
    "frontmatter": {
      "setup": "import Layout from '@layouts/Post.astro'\nimport BlueBox from '@components/BlueBox.astro'\nimport YellowBox from '@components/YellowBox.astro'\nimport STweet from '@components/STweet.astro'\n",
      "title": "Test of five #3",
      "date": "2022-04-03T14:55:00.000Z",
      "description": "Working with pagination, test #3."
    },
    "file": "/Users/thewrays/astro-site/src/pages/posts/2022/04/test-of-five-3.md",
    "url": "/posts/2022/04/test-of-five-3"
  },
  "./posts/2022/04/test-of-five-4.md": {
    "frontmatter": {
      "setup": "import Layout from '@layouts/Post.astro'\nimport BlueBox from '@components/BlueBox.astro'\nimport YellowBox from '@components/YellowBox.astro'\nimport STweet from '@components/STweet.astro'\n",
      "title": "Test of five #4",
      "date": "2022-04-04T14:55:00.000Z",
      "description": "Working with pagination, test #4."
    },
    "file": "/Users/thewrays/astro-site/src/pages/posts/2022/04/test-of-five-4.md",
    "url": "/posts/2022/04/test-of-five-4"
  },
  "./posts/2022/04/test-of-five-5.md": {
    "frontmatter": {
      "setup": "import Layout from '@layouts/Post.astro'\nimport BlueBox from '@components/BlueBox.astro'\nimport YellowBox from '@components/YellowBox.astro'\nimport STweet from '@components/STweet.astro'\n",
      "title": "Test of five #5",
      "date": "2022-04-05T14:55:00.000Z",
      "description": "Working with pagination, test #5."
    },
    "file": "/Users/thewrays/astro-site/src/pages/posts/2022/04/test-of-five-5.md",
    "url": "/posts/2022/04/test-of-five-5"
  },
  "./posts/2022/04/test-of-five-6.md": {
    "frontmatter": {
      "setup": "import Layout from '@layouts/Post.astro'\nimport BlueBox from '@components/BlueBox.astro'\nimport YellowBox from '@components/YellowBox.astro'\nimport STweet from '@components/STweet.astro'\n",
      "title": "Test of five #6",
      "date": "2022-04-06T14:55:00.000Z",
      "description": "Working with pagination, test #6."
    },
    "file": "/Users/thewrays/astro-site/src/pages/posts/2022/04/test-of-five-6.md",
    "url": "/posts/2022/04/test-of-five-6"
  }
}
*/

// === this causes it to error out ===
// console.log("allPosts = " + allPosts)
// for (const post of allPosts) {
//   console.log(post)
// }

