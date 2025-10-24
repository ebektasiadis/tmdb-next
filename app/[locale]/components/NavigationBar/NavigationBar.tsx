import ThemeToggleButton from '@/app/[locale]/components/NavigationBar/ThemeToggleButton';

const NavigationBar = () => {
  return (
    <div className="flex h-16 w-full items-center justify-center bg-primary">
      <div className="container mx-auto flex justify-between">
        <h1 className="font-semibold text-2xl tracking-wider">TMDB</h1>
        <nav></nav>
        <ThemeToggleButton />
      </div>
    </div>
  );
};

export default NavigationBar;
