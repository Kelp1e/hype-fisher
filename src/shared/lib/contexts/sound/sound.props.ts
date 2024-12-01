export type SoundProps = {
  isEnabled: boolean

  enable: () => void
  disable: () => void
  toggle: () => void

  play: (type: "click" | "hover" | "openChest") => void
}
