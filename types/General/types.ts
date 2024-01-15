export type SearchActionsProps = {
  title: string;
  label: string;
  id: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  addAction: () => void;
};

export interface DividerPropsInterface {
  letter: string;
}
