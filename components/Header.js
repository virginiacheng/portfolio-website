export default function Header() {
  return (
    <>
    <header className="w-full h-16 border-b border-b-slate-400 p-4 flex fixed justify-between bg-slate-900 ">
      <img className="h-full" src="/bao_icon.png" />
      {/* TODO: change colors of button and hover states */}
      <button className="rounded-full border border-slate-400 px-2 hover:px-3 hover:bg-indigo-200 hover:text-indigo-400 transition-all">Resume</button>
    </header>
  </>
  )
}
