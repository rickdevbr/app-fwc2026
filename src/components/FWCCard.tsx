export default function Card({ text }: Readonly<{ text: string }>) {
    return (
        <div className="rounded-3xl bg-black text-white border-10 border-t-[#1A247D] border-r-[#B0EA00] border-b-[#D60000] border-l-[#B387FF] py-4 px-8 mt-6 font-stretch-condensed font-black uppercase text-center text-2xl">
            {text}
        </div>
    );
}