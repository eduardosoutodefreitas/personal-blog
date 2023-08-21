import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'
import readingTime from 'reading-time';

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
    slug: {
        type: 'string',
        resolve: (doc) => `/${doc._raw.flattenedPath}`
    },
    readingTime: { type: 'json', resolve: (doc) => readingTime(doc.body.raw) },
    slugAsParams: {
        type: 'string',
        resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/")
    }
}

export const Post = defineDocumentType(() => ({
    name: "Post",
    filePathPattern: `posts/**/*.mdx`,
    contentType: "mdx",
    fields: {
        title: {
            type: 'string',
            required: true
        },
        description: {
            type: "string",
        },
        date: { type: 'date', required: true },
        tags: { type: 'list', of: { type: 'string' } },
        image: {
            type: "string",
            required: true,
        },
    },
    computedFields
}))

export default makeSource({
    contentDirPath: "src/content",
    documentTypes: [Post],
    mdx: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
            rehypeSlug,
            [
                rehypeAutolinkHeadings,
                {
                    theme: 'github-dark',
                    onVisitLine(node) {
                        // Prevent lines from collapsing in `display: grid` mode, and allow empty
                        // lines to be copy/pasted
                        if (node.children.length === 0) {
                            node.children = [{ type: "text", value: " " }]
                        }
                    },
                    onVisitHighlightedLine(node) {
                        node.properties.className.push("line--highlighted")
                    },
                    onVisitHighlightedWord(node) {
                        node.properties.className = ["word--highlighted"]
                    },
                },
            ],
            [
                rehypeAutolinkHeadings,
                {
                    properties: {
                        className: ["subheading-anchor"],
                        ariaLabel: "Link to section",
                    },
                },
            ],
        ]
    }
})