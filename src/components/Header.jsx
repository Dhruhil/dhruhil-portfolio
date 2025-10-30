export default function Header() {
  return (
    <header className="text-center py-12 bg-gradient-to-r from-purple-700 via-pink-600 to-red-500">
      <h1 className="text-5xl font-bold text-white">Dhruhil Patel</h1>
      <p className="mt-2 text-gray-200">Jönköping, Sweden | <a href="mailto:pateldhruhil2612@gmail.com">Email Me</a></p>
      <p className="mt-1">
        <a href="https://linkedin.com/in/dhruhil-patel-0a62821a2" target="_blank" className="underline hover:text-yellow-300 transition-colors duration-300">LinkedIn</a>
      </p>
    </header>
  );
}
