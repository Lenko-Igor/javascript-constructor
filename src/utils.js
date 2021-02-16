export function row(cont, style){
  return `<div class="row" style="${style}">${cont}</div>`
} 

export function col(cont, style){
  return `<div class="col-sm" style="${style}">${cont}</div>`
}

export function css(styles = {}){
  if(typeof styles === 'string') return styles

  const toString = key => `${key}:${styles[key]}`
  return Object.keys(styles).map(toString).join(';')
}

export function block(type, title){
  if(type === 'columns'){
    return `
    <form name="${type}">
      <h5>${title}</h5>
      <div class="form-group">
        <input class="form-control form-control-sm" name="colum_1" placeholder="текст первой колонки">
      </div>
      <div class="form-group">
        <input class="form-control form-control-sm" name="colum_2" placeholder="текст второй колонки">
      </div>
      <div class="form-group">
        <input class="form-control form-control-sm" name="colum_3" placeholder="текст третьей колонки">
      </div>
      <div class="form-group">
        <input class="form-control form-control-sm" name="styles" placeholder="styles">
      </div>
      <button type="submit" class="btn btn-primary btn-sm">Добавить</button>
    </form>
    <hr />
  `
  } else {
    return `
    <form name="${type}">
      <h5>${title}</h5>
      <div class="form-group">
        <input class="form-control form-control-sm" name="value" placeholder="${title}">
      </div>
      ${getRadioBox('left', 'center', 'right')}
      ${getColor()}
      ${getSize()}
      <div class="form-group">
        <input class="form-control form-control-sm" name="styles" placeholder="styles">
      </div>
      <button type="submit" class="btn btn-primary btn-sm">Добавить</button>
    </form>
    <hr />
  `
  }
}

function getRadioBox(...args){
  return [...args].map((e, i )=>{
    return `
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="radio" name="inlineRadioOptions" value="text-align: ${e}" ${(i === 0) && "checked"}>
      <label class="form-check-label">${e}</label>
    </div>
    `
  }).join('')
}

function getColor(){
  const styles = {
    width: '150px',
    display: 'inline-block',
    'margin-left': '10px',
  }
  return `
  <div class="form-group">
    <p style="display:inline-block">цвет шрифта:</p>
    <input style="${css(styles)}" class="form-control form-control-sm" name="color" 
    placeholder="цвет">
  </div>
  `
}

function getSize(){
  const styles = {
    width: '120px',
    display: 'inline-block',
    'margin-left': '18px',
  }
  return `
  <div class="form-group">
    <p style="display:inline-block">размер шрифта:</p>
    <input style="${css(styles)}" class="form-control form-control-sm" name="size" 
    placeholder="размер в px">
  </div>
  `
}

