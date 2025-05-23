export default function Title({ title }: { title: string }) {
  return (
    <>
      <h2 className="text-6xl font-bold text-center text-stone-300">{title}</h2>
      <hr className="w-1/6 h-1.5 bg-[#32936F] rounded-full" />
    </>
  );
}
