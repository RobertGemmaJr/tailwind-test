import logo from "./logo.svg";

export default function App() {
  return (
    <div className="text-center">
      <header className="bg-[#282c34] min-h-dvh flex flex-col items-center justify-center text-c text-white">
        <img
          src={logo}
          className="h-custom pointer-events-none motion-reduce:hidden animate-spin"
          alt="logo"
        />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="text-blue-400"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </header>
    </div>
  );
}
