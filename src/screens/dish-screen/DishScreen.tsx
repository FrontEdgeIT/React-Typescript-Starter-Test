import { Card } from "../../../src/components/layout/card/Card";
import styles from './DishScreen.module.css'

interface Props {}

export const DishScreen: React.FC<Props> = () => {
  return (
    <div className={"container " + styles.page}>
      <Card list='dishes' />
    </div>
  );
};
