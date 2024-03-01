import Link from "next/link";
import Image from "next/image";

interface ButtonProps {
  link: string;
  text: string;
  additionalClasses?: string;
}
interface ButtonData {
  text: string;
  link: string;
}

interface ItemData {
  id: number;
  color: string;
  title: string;
  desc: string;
  img: string;
  primaryButton: ButtonData;
  secondaryButton: ButtonData;
  additionalButton?: ButtonData;
}

interface ShowcaseItemProps {
  item: ItemData;
}

const Button = ({ link, text, additionalClasses = "" }: ButtonProps) => (
  <Link href={link}>
    <button
      className={`p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg font-semibold m-4 rounded ${additionalClasses}`}>
      {text}
    </button>
  </Link>
);

export const ShowcaseItem = ({ item }: ShowcaseItemProps) => (
  <div
    key={item.id}
    className={`w-screen h-screen bg-gradient-to-r ${item.color} flex items-center justify-center`}>
    <div className="flex flex-col gap-8 text-black items-center">
      <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">
        {item.title}
      </h1>
      <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
        <Image
          src={item.img}
          alt={item.title}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]">
        {item.desc}
      </p>
      <div className="flex justify-between">
        <Button
          link={item.secondaryButton.link}
          text={item.secondaryButton.text}
          additionalClasses="ring-1"
        />
        {item.additionalButton && (
          <Button
            link={item.additionalButton.link}
            text={item.additionalButton.text}
            additionalClasses="ring-1"
          />
        )}
        <Button
          link={item.primaryButton.link}
          text={item.primaryButton.text}
          additionalClasses="bg-black text-stone-200"
        />
      </div>
    </div>
  </div>
);
