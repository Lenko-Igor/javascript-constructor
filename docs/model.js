import {ColumnsBlock, ImageBlock, TextBlock, TitleBlock} from './classes/blocks'
import img from './img/image.jpg'

const text = 'Данное приложение носит демонстрационный характер и при желании, можно расширить функционал. С помощю левой колонки, мы можем добавлять необходимые нам блоки: заголовок, обычный абзац, вставить картинку с URL ссылки и вывести текст колонками. Контенту, который мы добавили, можно придать собственные стили.'


export const model = [
  new TitleBlock('Конструктор на читсом JavaScript',{
    tag: 'h1',
    styles : {
      'text-align': 'center',
      padding: '15px',
      background: 'linear-gradient(to bottom, #00defc, #fff)'
    }
  } ),
  new ImageBlock(img, {
    styles: {
      display: 'block', 
      margin: '15px auto',
      width: '15%',
    },
    alt: 'develop-site',
  }),
  new TextBlock(text, {
    styles: {
      'text-align': 'center',
      'font-size': '18px',
      padding: '0 25px',
      'font-weight': 'bold',
      color: 'red',
    }
  }),
  new ColumnsBlock([
    `1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, delectus.`,
    `2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, delectus.`,
    `3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, delectus.`,
  ], {
    styles: {
      padding: '15px',
      background: 'linear-gradient(to top, #00defc, #fff)',
      'font-weight': 'bold',
    }
  }),
]