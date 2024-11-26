const click = new Audio("/sounds/click.mp3")

export const sound = (type: "click" | "hover") => {
  const audio = {
    click: click,
    hover: click,
  }[type]

  audio.currentTime = 0

  audio.volume = type === "click" ? 1 : 0.1

  audio.play()
}
