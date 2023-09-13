export default function Header() {
  return (
    <>
    <header className="w-full h-16 border-b border-b-slate-400 p-4 flex fixed justify-between bg-slate-900 ">
      <img className="h-full" src="/bao_icon.png" />
      {/* TODO: change colors of button and hover states */}
      <a className="rounded-full border border-slate-400 px-2 hover:px-3 hover:bg-indigo-600 hover:text-indigo-200 hover:text-xl transition-all" href="/Virginia_Cheng_Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
    </header>
  </>
  )
}
