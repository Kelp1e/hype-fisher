import { LINK } from "~/shared/lib"
import { Link } from "~/shared/ui"

export const Footer = () => {
  return (
    <footer className="bg-black py-[60rem]">
      <div className="max-container mx-auto flex flex-col items-center gap-[40rem]">
        <div className="flex items-center gap-[20rem]">
          <Link href={LINK.TWITTER}>Twitter</Link>
          <Link href={LINK.TELEGRAM}>Telegram</Link>
        </div>
        <div className="text-center">© Hype Fisher. All Rights Reserved.</div>
      </div>
    </footer>
  )
}
