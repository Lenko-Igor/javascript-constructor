class Site{
  constructor(selector){
    this.$elem = document.querySelector(selector)
  }
  render(model){
    this.$elem.innerHTML = ''
    model.forEach(elem => {
        this.$elem.insertAdjacentHTML('beforeend', elem.toHTML())
    })
  }
}

export default Site