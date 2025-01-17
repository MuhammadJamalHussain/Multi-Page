import Image from "next/image";
import Link from "next/link";
import "./style.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <h1><Link href="/">Basic Website</Link></h1>
        <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/components/About">About</Link></li>
            <li><Link href="/components/Contact">Contact</Link></li>
        </ul>
      <h2><Link href="/components/Login">Login</Link></h2>
    </div>
  );
}