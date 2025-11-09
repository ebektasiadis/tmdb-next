import MovieCardList from '../MovieCardList/MovieCardList';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';

type SectionedMovieCardListProps = {
  defaultSection?: string;
  sections: {
    title: string;
    movieCardListProps: React.ComponentProps<typeof MovieCardList>;
  }[];
};

const SectionedMovieCardList = ({
  defaultSection,
  sections,
}: SectionedMovieCardListProps) => {
  return (
    <div>
      <Tabs defaultValue={defaultSection ?? sections[0].title}>
        <TabsList>
          {sections.map((section) => (
            <TabsTrigger key={section.title} value={section.title}>
              {section.title}
            </TabsTrigger>
          ))}
        </TabsList>
        {sections.map((section) => (
          <TabsContent key={section.title} value={section.title}>
            <MovieCardList {...section.movieCardListProps} />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default SectionedMovieCardList;
