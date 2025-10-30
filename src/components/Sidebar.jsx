import profilePic from '../assets/profile.jpg';

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 w-64 h-full bg-gray-800 flex flex-col items-center py-10">
      <img src={profilePic} alt="Dhruhil Patel" className="w-32 h-32 rounded-full border-4 border-indigo-500 mb-4"/>
      <h1 className="text-2xl font-bold text-white mb-1">Dhruhil Patel</h1>
      <p className="text-gray-300 mb-6 text-center">Data Science & AI</p>
      <nav className="flex flex-col space-y-4">
        <a href="#about" className="hover:text-indigo-400">About</a>
        <a href="#skills" className="hover:text-indigo-400">Skills</a>
        <a href="#projects" className="hover:text-indigo-400">Projects</a>
        <a href="#contact" className="hover:text-indigo-400">Contact</a>
      </nav>
    </aside>
  );
}
