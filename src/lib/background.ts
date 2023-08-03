const template = `
  <svg width="256" height="256" preserveAspectRatio='none' viewBox='0 0 1 1' version='1.1' xmlns='http://www.w3.org/2000/svg'>
    <defs>
      <linearGradient id='g' >
        <stop offset='0' stop-color='#fff' stop-opacity='0'/>
        <stop offset='1' stop-color='#fff' stop-opacity='1'/>
      </linearGradient>
      <mask id='m'>
        <rect x='0' y='0' width='1' height='1' fill='url(#g)'/>
      </mask>
      <linearGradient id='a' gradientTransform='rotate(90)'>
        <stop offset='0' stop-color='colorTopRight'/>
        <stop offset='1' stop-color='colorBottomRight'/>
      </linearGradient>
      <linearGradient id='b' gradientTransform='rotate(90)'>
        <stop offset='0' stop-color='colorBottomLeft'/>
        <stop offset='1' stop-color='colorTopLeft'/>
      </linearGradient>
    </defs>

    <rect x='0' y='0' width='1' height='1' fill='url(#a)' mask='url(#m)'/>
    <rect x='0' y='0' width='1' height='1' fill='url(#b)' mask='url(#m)' transform='translate(1,1) rotate(180)'/> 
  </svg>
`

const svg = (tl, tr, bl, br) => {
  return template
    .replace('width="256" height="256" ', "")
    .replace('colorTopLeft', tl)
    .replace('colorTopRight', tr)
    .replace('colorBottomLeft', bl)
    .replace('colorBottomRight', br)
    .replace(/> +/g, ">")
    .replace(/ +</g, "<")
    .replace(/>/g, "%3E")
    .replace(/</g, "%3C")
    .replace(/>/g, "%3E")
    .replace(/#/g, "%23")
    .replace(/"/g, "'")
    .replace(/ +/g, " ")
    .replace(/^ +/g, "")
    .split("\n")
    .join("");
}

const random = () => {
  const r = Math.floor(Math.random() * 106) + 150
  const g = Math.floor(Math.random() * 106) + 150
  const b = Math.floor(Math.random() * 106) + 150
  return `rgb(${r}, ${g}, ${b})`
}

const generate = (tl = random(), tr = random(), bl = random(), br = random()) => {
  const img = svg(tl, tr, bl, br)
  const css = `background-image: url("data:image/svg+xml;utf8,${img}");`
  return css
}

export default generate