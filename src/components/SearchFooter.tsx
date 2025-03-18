import { cn } from "@/lib/utils";

type Props = {
  isLoading: boolean;
  error: Error | null;
  totalItems: number;
};

export function SearchFooter(props: Props) {
  const { isLoading, error, totalItems } = props;

  const renderContent = () => {
    if (isLoading) {
      return "Searching...";
    }

    if (error) {
      return error.message;
    }

    if (totalItems) {
      return `${totalItems} results `;
    }

    return "No result";
  };

  return (
    <div className="px-6 py-3 border-t border-gray">
      <p className={cn("text-paragraph", error && !isLoading && "text-error")}>{renderContent()}</p>
    </div>
  );
}
