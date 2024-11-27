const click = new Audio("/sounds/click.mp3")
const openChest = new Audio("/sounds/open-chest.mp3")
const coin = new Audio("/sounds/coin.mp3")

export const sound = (type: "click" | "hover" | "openChest" | "coin") => {
  const audio = {
    click: click,
    hover: click,
    openChest: openChest,
    coin: coin,
  }[type]

  const volume = {
    click: 1,
    hover: 0.1,
    openChest: 0.5,
    coin: 1,
  }[type]

  audio.currentTime = 0

  audio.volume = volume

  audio.play()
}
