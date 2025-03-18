import TagPurple from "@/assets/images/tag-purple.png";
import TagWhite from "@/assets/images/tag-white.png";
import { cn } from "@/lib/utils";
import { Tag } from "@/types/tag";
import { Button } from "./ui/button";
import { JSX } from "preact/jsx-runtime";

type Props = {
  tag: Tag;
  onClick: (tag: Tag) => void;
  tabIndex?: number;
};

export default function SearchTagItem(props: Props) {
  const { tag, onClick, tabIndex } = props;

  const icon = tag.isActive ? TagWhite : TagPurple;

  const handleClick = () => {
    onClick(tag);
  };

  const handleKeyDown = (e: JSX.TargetedKeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleClick();
    }
  };

  return (
    <Button
      className={cn(
        "p-0 rounded-[40px] px-4 py-[6px] transition-all duration-300 ease-in-out group",
        tag.isActive ? "bg-secondary hover:bg-secondary text-white" : "bg-gray hover:bg-gray text-primary-default",
        "focus:scale-110 focus:text-white focus:ring-2 focus:ring-primary-default focus:ring-offset-2 focus:outline-none"
      )}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={tabIndex}
    >
      <div className="flex gap-2 items-center">
        <img
          src={icon}
          alt="tag"
          className={cn("transition-opacity duration-300 ease-in-out", tag.isActive ? "opacity-100" : "opacity-70")}
        />
        <span
          className={cn(
            "text-sm font-medium transition-colors duration-300 ease-in-out",
            tag.isActive ? "text-white" : "text-primary-default"
          )}
        >
          {tag.name}
        </span>
      </div>
    </Button>
  );
}
