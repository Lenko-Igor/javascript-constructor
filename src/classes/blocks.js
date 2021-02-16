import {row, col, css} from '../utils.js'

class Block {
  constructor(value, options){
    this.value = value
    this.options = options
  }
  toHTML(){
    throw new Error('Необходимо реализовать метод toHTML')
  }
}

export class TitleBlock extends Block {
  constructor(value, options, styleText){
    super(value, options)
    this.styleText = styleText
  }
  toHTML(){
    const {tag = 'h2', styles} = this.options
    return row(col(`<${tag} style="${css(this.styleText)}">${this.value}</${tag}>`), css(styles))
  }
}

export class ImageBlock extends Block {
  constructor(value, options){
    super(value, options)
  }
  toHTML(){
    const {styles, alt} = this.options
    return row(col(`<img style='${css(styles)}' src='${this.value}' alt='${alt}'>`))
  }
}

export class TextBlock extends Block {
  constructor(value, options, styleText){
    super(value, options)
    this.styleText = styleText
  }
  toHTML(){
    const {styles} = this.options
    return row(col(`<p style="${css(this.styleText)}">${this.value}</p>`), css(styles))
  }
}

export class ColumnsBlock extends Block {
  constructor(value, options){
    super(value, options)
  }
  toHTML(){
    const {styles} = this.options
    const html = this.value.map(e => col(e, css(styles))).join('')
    return row(html)
  }
}