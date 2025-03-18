import { cn } from "@/lib/utils";
import { ProgrammingLanguage } from "@/types/programming-language";
import LinkIcon from "@/assets/images/link.png";

type Props = {
  programmingLanguage: ProgrammingLanguage;
  className?: string;
  onClick?: () => void;
};

export default function SearchItem(props: Props) {
  const {
    programmingLanguage: { image, title, description },
    className,
    onClick,
  } = props;

  return (
    <div
      className={cn(
        "px-5 py-3 rounded-xl flex items-center gap-5 bg-transparent hover:bg-gray group",
        "transition-all duration-300 ease-in-out", // Animate background and other properties
        onClick ? "cursor-pointer" : "cursor-default",
        className
      )}
      onClick={onClick}
    >
      <img
        className={cn(
          "rounded-[10px] w-[76px] h-[76px] bg-white",
          "transition-transform duration-300 ease-in-out group-hover:scale-105" // Scale on hover
        )}
        src={image}
        alt={title}
      />
      <div className="flex-1 flex flex-col min-w-0">
        <p
          className={cn(
            "text-title text-xl font-medium",
            "transition-colors duration-300 ease-in-out group-hover:text-primary-default" // Color change on hover
          )}
        >
          {title}
        </p>
        <p className="text-paragraph text-base font-normal truncate">{description}</p>
      </div>
      <img
        className={cn(
          "w-[26px] h-[26px]",
          "opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
        )}
        src={LinkIcon}
        alt="link"
      />
    </div>
  );
}
