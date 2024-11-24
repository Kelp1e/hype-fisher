const click = new Audio("/sounds/click.ogg")

export const sound = (type: "click" | "hover") => {
  const audio = {
    click: click,
    hover: click,
  }[type]

  audio.currentTime = 0
  audio?.play()
}
