export default function Title({ title }: { title: string }) {
  return (
    <>
      <h2 className="text-3xl font-bold text-center sm:text-5xl lg:text-6xl text-slate-800 dark:text-stone-300">
        {title}
      </h2>
      <hr className="w-1/4 md:w-1/6 lg:w-1/12 h-1.5 bg-[#32936F] rounded-full" />
    </>
  );
}
