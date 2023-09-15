export default function Header() {
  return (
    <>
    {/* TODO: change border color */}
    <header className="w-full h-16 border-b border-b-slate-400 p-4 flex fixed justify-between bg-slate-800">
      <img className="h-full" src="/bao_icon.png" />
      {/* TODO: change colors of button and hover states */}
      <a className="rounded-full border border-neutral-200 px-2 hover:px-3 hover:bg-indigo-200 hover:text-indigo-800 hover:text-xl hover:border-indigo-800 transition-all" href="/Virginia_Cheng_Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
    </header>
  </>
  )
}
