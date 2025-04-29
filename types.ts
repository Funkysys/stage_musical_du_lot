export type dataType =
  | {
      id: string;
      button: string;
      title: string;
      content: string;
      links?: never;
    }
  | {
      id: string;
      button: string;
      title: string;
      links: {
        name: string;
        youtube: string;
        pdf: string;
        categorie: string;
      }[];
      content?: never;
    };
