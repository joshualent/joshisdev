---
slug: five-min-markdown
title: 5 minute guide to markdown
authors: [joshual]
tags: [programming]
---

Are you tired of `.docx` and weird text formatting in your documents? Do you need a simple format for writing notes, one that's also easy to parse? Markdown is the answer. It is a great markup language with a simple syntax. It is used everywhere from blog posts to documentation to AI and even for writing books. <!--truncate-->It's one of the few languages I think every dev should learn, and it also happens to be the easist one.

Nearly all content on this site is made with markdown or MDX, an enhanced version of markdown

The first step of markdown is having a text editor to write it in. [Visual Studio Code](https://code.visualstudio.com/) is a good editor that supports markdown, or you can download a markdown specific editor like [Obsidian](https://obsidian.md/)

<div class="alert alert--info" role="alert">
  markdown is based on HTML, and having some HTML knowledge is helpful but not neccesary. Markdown is made to be turned into HTML, and also supports HTML tags in case you feel limited by the simple syntax of markdown. 
</div>

## Headings

To create headings you use the `#` or pound sign. You can create 6 different heading sizes by using up to six pound signs.

<div class="alert alert--info" role="alert">
  Below is a heading 3
</div>
### Example

```md
# Heading 1

## Heading 2

## Heading 3

## Heading 4

##### Heading 5

###### Heading 6
```

Heading one, or `h1`, is the largest heading, and heading 6 (`h6`) is the smallest.

## Styling text

One commonly used feature in word processors like Google docs is talicizing and bolding text. This is quite simple in markdown.

surround text with one asterics for _italics_ `*italics*` and two for **bold** `**bold**`. If you want to do **_both_**, use three asterics `***bold and italics***`

## Links

The last part of markdown that I consider to be crucial is links. Links are simple to create, and have two parts.
`[part one](part_two)`

The first part is the text that you want your link to show. This cleans up the appearance instead of making the reader view the whole url. For example:

```md
[Example.com website](https://example.com)
```

[Exampe.com website](https://example.com)

## Conclusion

Markdown is extremly useful. It can be powerful when you need it to be, but these simple pieces of syntax are the most common pieces that you need to know. I still commonly look up pieces of markdown syntax and I would guess a lot of people do. This is all you need to dip your feet into markdown, but if you would like to learn more than checkout [learnxinyminutes markdown](https://learnxinyminutes.com/markdown/), [markdownguide.org](https://www.markdownguide.org/basic-syntax/), or [The Markdown Guide](https://www.markdownguide.org/book/)
