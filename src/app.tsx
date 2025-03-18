import Error from "@/assets/images/error.png";
import Loader from "@/assets/images/loader.png";
import NoResult from "@/assets/images/no-result.png";
import SearchBar from "@/components/SearchBar";
import { SearchFooter } from "@/components/SearchFooter";
import SearchItem from "@/components/SearchItem";
import SearchTagItem from "@/components/SearchTagItem";
import tagsData from "@/data/tags.json";
import { HomeLayout } from "@/layouts/HomeLayout";
import { getProgrammingLanguages } from "@/services/programming-language";
import { ProgrammingLanguage } from "@/types/programming-language";
import { Tag } from "@/types/tag";
import { useQuery } from "@tanstack/react-query";
import { useCallback, useState } from "preact/hooks";
import { cn } from "@/lib/utils";
import { debounce } from "@/lib/debounce";

export function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [tags, setTags] = useState<Tag[]>(tagsData.map((tag) => ({ isActive: false, name: tag })));

  const {
    data: programmingLanguages,
    error,
    isFetching,
  } = useQuery({
    queryKey: ["programmingLanguages", debouncedQuery],
    queryFn: () => getProgrammingLanguages(debouncedQuery, false),
    enabled: Boolean(debouncedQuery),
    retry: 0,
  });

  const debouncedSetQuery = useCallback(
    debounce((query: string) => {
      setDebouncedQuery(query);
    }, 300),
    []
  );

  const handleChangeTag = (tag: Tag) => {
    setTags((prevTags) =>
      prevTags.map((t) => (t.name === tag.name ? { ...t, isActive: !t.isActive } : { ...t, isActive: false }))
    );
    const newSearchQuery = tags.some((t) => t.name === tag.name && t.isActive) ? "" : tag.name;
    setSearchQuery(newSearchQuery);
    setDebouncedQuery(newSearchQuery);
  };

  const handleClickSearchItem = (url: ProgrammingLanguage["url"]) => {
    window.open(url, "_blank");
  };

  const renderContent = () => {
    if (error) {
      return <img src={Error} className="w-[247px] h-[200px]" alt="error" />;
    }

    if (!programmingLanguages || programmingLanguages?.length === 0) {
      return <img src={NoResult} className="w-[247px] h-[200px]" alt="no-result" />;
    }

    return (
      <div className={cn("flex flex-col gap-[10px]")}>
        {programmingLanguages?.map((programmingLanguage) => (
          <SearchItem
            key={programmingLanguage.title}
            programmingLanguage={programmingLanguage}
            onClick={() => handleClickSearchItem(programmingLanguage.url)}
          />
        ))}
      </div>
    );
  };

  return (
    <HomeLayout>
      <div className="bg-white shadow-2xl rounded-[20px] w-[690px] flex flex-col overflow-hidden">
        <div className="flex-1 flex flex-col gap-5">
          <div className="flex flex-col gap-5 px-6 pt-6">
            <SearchBar
              value={searchQuery}
              placeholder="Search what technologies we are using at DC..."
              onSearch={(value) => {
                setSearchQuery(value);
                debouncedSetQuery(value);
              }}
              isError={Boolean(error)}
              tabIndex={1}
            />
            <div className="flex gap-4">
              {tags.map((tag, index) => (
                <SearchTagItem key={tag.name} tag={tag} onClick={handleChangeTag} tabIndex={index + 2} />
              ))}
            </div>
          </div>
          <div
            className={cn(
              "flex-1 min-h-[400px] max-h-[400px] overflow-y-auto px-6 relative",
              (!programmingLanguages || programmingLanguages?.length === 0 || error) &&
                "flex items-center justify-center"
            )}
          >
            {isFetching && (
              <div
                className={cn(
                  "absolute flex top-0 left-0 right-0 bottom-0 justify-center items-center z-10",
                  "bg-white/60"
                )}
              >
                <img src={Loader} alt="loader" className="animate-spin" />
              </div>
            )}
            {renderContent()}
          </div>
          <SearchFooter isLoading={isFetching} error={error} totalItems={(programmingLanguages || []).length} />
        </div>
      </div>
    </HomeLayout>
  );
}
