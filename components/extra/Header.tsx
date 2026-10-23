import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

function Header() {
  return (
    <nav className="flex w-full flex-row items-center justify-between px-5 py-5">
      <h2 className="m-0 shrink-0 font-bold text-xl">BackVorax</h2>

      <ul className="m-0 flex list-none items-center gap-6  p-0">
        <li className="flex items-center justify-center cursor-pointer">
          Products <ChevronDown size={'14'} />
        </li>
        <li>Pricing</li>
        <li className="flex items-center justify-center cursor-pointer">
          Resources <ChevronDown size={'14'} />
        </li>
        <li>FAQ&apos;s</li>
        <li>About us</li>
      </ul>

      <div className="m-0 flex shrink-0 items-center gap-4 ">
        <Button>Login</Button>
        <Button>Sign Up</Button>
      </div>
    </nav>
  );
}

export default Header;
