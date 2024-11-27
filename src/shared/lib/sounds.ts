const click = new Audio("/sounds/click.mp3")
const openChest = new Audio("/sounds/open-chest.mp3")

export const sound = (type: "click" | "hover" | "openChest") => {
  const audio = {
    click: click,
    hover: click,
    openChest: openChest,
  }[type]

  audio.currentTime = 0

  audio.volume = type === "hover" ? 0.1 : 1

  audio.play()
}
