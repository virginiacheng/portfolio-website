export default function Header() {
  return (
    <>
    <header className="w-full h-16 border-b border-b-gray-200 p-4 flex fixed justify-between">
      <img className="h-full" src="/bao_icon.png" />
      <button className="rounded-full border border-black px-2 hover:px-3 hover:bg-gray-200 transition-all">Resume</button>
    </header>
  </>
  )
}
