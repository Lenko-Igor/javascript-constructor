import { block } from "../utils"
import { TextBlock, TitleBlock, ImageBlock, ColumnsBlock } from "./blocks";

class Sidebar{
  constructor(selector, updateCallBack){
    this.$elem = document.querySelector(selector)
    this.update = updateCallBack
    this.init()
  }
  
  init(){
    this.$elem.insertAdjacentHTML('afterbegin', this.tamplate)
    this.$elem.addEventListener('submit', this.add.bind(this));
  }
  
  get tamplate(){
    return [
      block('title','Заголовок'),
      block('text','Текст абзаца'),
      block('image', 'Вставить URL картини'),
      block('columns', 'Вставить колонки с текстом'),
    ].join('') 
  }
  add(event){
    event.preventDefault()
    if(event.target.name === 'columns'){
      const value = [
        event.target.colum_1.value,
        event.target.colum_2.value,
        event.target.colum_3.value
      ]
      const styles = event.target.styles.value
      let newBlock = new ColumnsBlock(value, {styles})

      this.update(newBlock);

      event.target.colum_1.value = ''
      event.target.colum_2.value = ''
      event.target.colum_3.value = '' 
      event.target.styles.value = ''     
    } else {
      const type = event.target.name
      const value = event.target.value.value
      const styles = [
        event.target.inlineRadioOptions.value,
        'color:' + event.target.color.value,
        event.target.styles.value,
      ].join(';')
      const styleText = 'font-size:' + event.target.size.value + 'px'


      let newBlock = type === 'title'
        ? newBlock = new TitleBlock(value, {styles}, styleText)
        : newBlock = type === 'image'
        ? newBlock = new ImageBlock(value, {styles})
        : newBlock = new TextBlock(value, {styles}, styleText) 
  
      this.update(newBlock);
  
      event.target.value.value = ''
      event.target.color.value = ''
      event.target.size.value = ''
      event.target.styles.value = '' 
    }
  }
}

export default Sidebar