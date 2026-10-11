import { Button } from '@/components/ui/button';
import Header from '@/components/ui/Header';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div>
      <div className="h-svh">
        <Header />
        <div className="flex items-center justify-center flex-col gap-2 py-10 h-full">
          <h1 className="text-5xl max-w-4xl text-center">
            Big Ideas Deserve Better Solutions
          </h1>
          <p className="text-xs text-gray-500 max-w-2xl text-center mt-1">
            Turn your vision into reality with innovative solutions designed to
            help you move faster, work smarter, and grow without limits.
          </p>
          <div className="flex items-center justify-center gap-4 mt-7">
            <Button className={'cursor-pointer'}>
              Get Started <ArrowRight />
            </Button>
            <Button className={'cursor-pointer'} variant={'outline'}>
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
