// attempt at JSON feed

// import readdirGlob from 'readdir-glob'
// import fs from 'fs'

// let allPosts
// let postsDir = './posts'

// https://coderrocketfuel.com/article/recursively-list-all-the-files-in-a-directory-using-node-js
// const getAllFiles = function(dirPath, arrayOfFiles) {
//   files = fs.readdirSync(dirPath)
//   arrayOfFiles = arrayOfFiles || []
//   files.forEach(function(file) {
//     if (fs.statSync(dirPath + "/" + file).isDirectory()) {
//       arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles)
//     } else {
//       arrayOfFiles.push(path.join(__dirname, dirPath, "/", file))
//     }
//   })
//   return arrayOfFiles
// }

// const allPosts = getAllFiles(postsDir)

// allPosts.on('match', match => {
//   console.log ("I have a match")
// })

// https://cdn.discordapp.com/attachments/830184175176122389/960357703807537183/unknown.png
export async function get() {
  let allPosts = await import.meta.globEager('./posts/**/*.md')
  return {
    body: JSON.stringify(allPosts, false, 2)
  }
}

// console.log("allPosts = " + allPosts)
// for (const post of allPosts) {
//   console.log(post)
// }


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
