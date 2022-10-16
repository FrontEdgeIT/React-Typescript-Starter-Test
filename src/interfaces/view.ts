export interface View {
  remove: (event: React.MouseEvent<HTMLButtonElement>) => void;
  loadData: () => void;
}
