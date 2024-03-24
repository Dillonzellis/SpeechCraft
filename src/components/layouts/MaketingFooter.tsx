import Image from "next/image";
import { Button } from "../ui/button";

export const MarketingFooter = () => {
  return (
    <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
      <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="/French.svg"
            alt="French Flag"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          French
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="/Spain.svg"
            alt="Spanish Flag"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          Spanish
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="/KR.svg"
            alt="Korean Flag"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          Korean
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="/US.svg"
            alt="American Flag"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          English
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="/China.svg"
            alt="Chinese Flag"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          Chinese
        </Button>
      </div>
    </footer>
  );
};
