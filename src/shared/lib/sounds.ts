const click = new Audio("/sounds/click.mp3")

export const sound = (type: "click") => {
  const audio = {
    click: click,
  }[type]

  audio.currentTime = 0
  audio?.play()
}
