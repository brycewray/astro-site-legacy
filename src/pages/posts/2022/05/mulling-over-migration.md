---
setup: |
  import Layout from '@layouts/Post.astro'
  import Box from '@components/Box.astro'
title: "Mulling over migration?"
description: "Some tips about moving your website to Astro."
author: Bryce Wray
date: 2022-05-09T11:00:00-05:00
#lastmod:
draft: true
#initTextEditor: MMDC5
discussionId: "2022-05-TITLE-TO-COME"
#featured_image: "bird-migration-4023842_3164x2108.jpg"
featured_image_width: 3164
featured_image_height: 2108
featured_image_alt: "Migratory birds flying with clouds in background"
featured_image_caption: |
  <span class="caption">Image: <a href="https://pixabay.com/users/kranich17-11197573/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=4023842">Kranich17</a>; <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=4023842">Pixabay</a></span>
---

The response I've received to my most recent posts about the [Astro](https://astro.build) [static site generator](https://jamstack.org/generators) (SSG), including my having [migrated](/posts/2022/04/winds-change/) this site to it, suggests there are a **lot** of you out there considering similar changes for your own websites. While I already gave [my own thoughts](/posts/2022/04/astro-ready-blog/) about how Astro compares to the other SSGs with which I have experience, I thought you'd also find it useful if I gave you some tips about the sorts of changes you'll face in such a move. I am speaking here mainly about moving from a site that's currently on either [Eleventy](https://11ty.dev) or [Hugo](https://gohugo.io), although you likely can extrapolate from this to migration of a site built with another SSG.

## Modifying your Markdown files

One of the first and most obvious challenges you'll face in an \[x]-to-Astro move is how you must change your site's Markdown files when you bring them over.

### The `setup` item

At the top of each file's front matter, you'll have to add a `setup` item with one or more entries.[^setup] For example, here's how it looks for the post you're reading now:

[^setup]: Well, I **say** you must add a `setup` item. I suppose if you utterly don't want to have a layout, much less add any components, you don't have to use it; Astro will still build a page from the Markdown file. However, I can't imagine you don't want at least *some* layout.

```md
---
setup: |
  import Layout from '@layouts/Post.astro'
  import Box from '@components/Box.astro'
```

The `Box` layout is for the yellow-boxed item at the bottom. Here's how I call it:

```md
<Box cssClass="yellowBox">
[Text to go in the box]
</Box>
```

In Eleventy and Hugo, I'd done this through *attributes* (built into Hugo's parser, added to Eleventy's parser through a plugin):

```md
[Text to go in the box]
{.yellowBox}
```

I have yet to find a shortcode I can't turn into an Astro component. You won't find it all that difficult.


### Shortcodes to components

If you've used shortcodes in [Eleventy](https://11ty.dev/docs/shortcodes) or [Hugo](https://gohugo.io/content-management/shortcodes/) to inject items into Markdown, you'll need to convert them to Astro components which you then will import into the Markdown. Probably the best example I can give you from my own experience is my [static tweets shortcode](/posts/2022/02/static-tweets-eleventy-hugo/), which I [turned into an Astro component](/posts/2022/04/static-tweets-astro/).

### What doesn't change

The good news it that there are plenty of things in your existing Markdown you **won't** have to change:

- In general, otherwise, Markdown still functions as always. `**This should be bold**` results in a bold-faced "**This should be bold**," `#` makes a line an `h1`, and so on.
- You won't have to change the front matter's `date` or other self-specified metadata (such as `lastmod`, which I use to indicate when I last modified a file after its initial publication). Astro either respects it or ignores it, depending on how you've designed the imported layout, but correct YAML won't cause a problem. (On the other hand, FUBARed YAML causes a problem in just about **any** SSG.)
- You can still specify `draft: true`, as in Hugo by default and most other SSGs through fairly simple configuration, to prevent a file from being built when it's not ready for publication. This is especially helpful if you have to commit the file to the site's public repository, such as [when you're using multiple devices to handle the file](/posts/2019/07/roger-copy/).

## DX suffers on larger sites

If your current site has only a few pages, you'll find Astro's development-mode refreshes the browser quickly enough to suit you. However, after your content gets up to about the 100-page level, even a fairly simple content edit will cause the refresh to take several seconds when you save the file you're changing.[^styling] (At this writing, I don't know whether this is a long-term problem or just part of Astro's youthfulness---more on that below---but I think you should be aware of it.) So, if you're used to that snappy type-it-save-it-see-it workflow you've probably become used to seeing in Eleventy or (especially) Hugo, that's not going to be there in Astro, at least for the time being. Therefore, you may want to get used to writing your content *outside of* development mode and, only then, activating the Astro dev server to check the new page's appearance.

[^styling]: However, editing CSS or SCSS doesn't seem to cause the same dragginess, so it's clearly related to Astro's Markdown-handling in particular.

## It's still beta, remember

One critical thing to remember is that there still are a few weeks to go before the planned release to GA of Astro v.1.0; so, **until then, Astro remains a beta product** and you should assume there will be glitches, fixes, changes, and the other items that typically accompany that status.

## \[Finish]

Finish

<Box cssClass="yellowBox">
**Note**: Although it's unrelated to the subject of this piece, you may be interested to know that I wrote this, at least in part, using the [v.5 beta version](https://multimarkdown.zendesk.com/hc/en-us/community/posts/4606313740051-Where-to-download-the-beta-) of the venerable [MultiMarkdown Composer](https://multimarkdown.com/). Also, it appears that the equally venerable [iA Writer](https://ia.net/writer), my most frequent daily driver for these posts, [soon will have a v.6 release](https://twitter.com/iAWriter/status/1522306304492118018). Each new major version will have been a long while coming; it was back in 2017 that MMDC reached v.4.0 and iA Writer reached v.5.0 (for iOS, with the Mac version in 2018).
</Box>
