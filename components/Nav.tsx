import React from "react";

function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-2 m-auto my-4 bg-white/10 backdrop-blur-xl flex justify-center gap-4 w-fit h-fit rounded-xl shadow-xl">
      <ul>
        <li>
          <button className="font-semibold text-lg">Rohit-Pujari</button>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
