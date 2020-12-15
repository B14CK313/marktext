import { CLASS_OR_ID } from '../../../config'

export default function color (h, cursor, block, token, outerClass) {
  const className = this.getClassName(outerClass, block, token, cursor)

  const { start, end } = token.range

  const firstBracket = this.highlight(h, block, start, start + 1, token)
  const colorContent = this.highlight(h, block, start + 1, start + 1 + token.content.length, token)
  const lastBracket = this.highlight(h, block, start + 1 + token.content.length, end, token)

  return [
    h(`span.${className}.${CLASS_OR_ID.AG_REMOVE}`, firstBracket),
    h('span', { style: { color: token.attrs.color } }, colorContent),
    h(`span.${className}.${CLASS_OR_ID.AG_REMOVE}`, lastBracket)
  ]
}
