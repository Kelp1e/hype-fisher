const click = new Audio("/sounds/click.mp3")
const hover = new Audio("/sounds/hover.wav")
const shine = new Audio("/sounds/shine.wav")

export const sound = (type: "click" | "hover" | "shine") => {
  const audio = {
    click: click,
    hover: hover,
    shine: shine,
  }[type]

  audio.currentTime = 0
  audio?.play()
}
