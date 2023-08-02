const random = () => {
  const r = Math.floor(Math.random() * 106) + 150
  const g = Math.floor(Math.random() * 106) + 150
  const b = Math.floor(Math.random() * 106) + 150
  return `rgb(${r}, ${g}, ${b})`
}