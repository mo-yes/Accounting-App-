import Image from "next/image";

export default function ActionCard({ title, image }) {
  return (
    <div className="relative bg-white rounded-2xl p-4 shadow-md flex flex-col items-center gap-3">
      {/* <span className="absolute top-3 left-3 bg-green-600 text-white w-6 h-6 rounded-md flex items-center justify-center">
        +
      </span> */}

      <Image src={image} width={64} height={64} alt={title} />

      <span className="font-semibold text-green-700">
        {title}
      </span>
    </div>
  );
}
