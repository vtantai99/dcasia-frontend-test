import SearchIcon from "@/assets/images/search.png";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

type Props = {
  value: string;
  placeholder?: string;
  isError: boolean;
  onSearch: (value: string) => void;
  tabIndex?: number; // Add tabIndex prop
};

export default function SearchBar(props: Props) {
  const { value, placeholder = "Type something...", isError = false, onSearch, tabIndex } = props;

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target as HTMLInputElement;
    onSearch(value);
  };

  return (
    <Input
      value={value}
      startIcon={<img src={SearchIcon} alt="search" />}
      placeholder={placeholder}
      onChange={handleInputChange}
      className={cn(
        "leading-[26px] transition-all duration-300 ease-in-out",
        !isError && "focus:border-primary-default focus:ring-2 focus:ring-primary-default focus:ring-offset-2 focus:outline-none"
      )}
      variant={isError ? "error" : "default"}
      tabIndex={tabIndex} // Pass tabIndex to Input
    />
  );
}