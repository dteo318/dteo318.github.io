import { ModeToggle } from "./ModeToggle";

const NavListItem = ({ children }: { children: React.ReactNode }) => {
  return (
    <li className="hover:text-teal-500 dark:hover:text-stone-200 duration-200 ease-in">
      {children}
    </li>
  );
};

export default function NavBar() {
  return (
    <nav className="flex items-center justify-center p-4 gap-4">
      <ul className="flex gap-6 py-4 px-6 rounded-4xl font-semibold bg-stone-50 text-zinc-800 shadow-sm dark:bg-zinc-800 dark:text-zinc-400">
        <NavListItem>
          <a href="/">Home</a>
        </NavListItem>
        <NavListItem>
          <a href="/about">About</a>
        </NavListItem>
        <NavListItem>
          <a href="/contact">Experience</a>
        </NavListItem>
        <NavListItem>
          <a href="/contact">Projects</a>
        </NavListItem>
        <NavListItem>
          <a href="/contact">Skills</a>
        </NavListItem>
        <NavListItem>
          <a href="/contact">Contact</a>
        </NavListItem>
      </ul>
      <ModeToggle />
    </nav>
  );
}
