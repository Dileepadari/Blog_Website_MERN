import styles from "./menu.module.css";
import MenuPosts from "../MenuPosts/MenuPosts";
import MenuCategories from "../MenuCategories/MenuCategories";


const Menu = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>{"What's hot"}</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <MenuPosts withImage={false} type={"popular"} />
      <h2 className={styles.subtitle}>Discover by</h2>
      <h1 className={styles.title}>Categories</h1>
      <MenuCategories />
      <h2 className={styles.subtitle}>{"Chosen by the Editor"}</h2>
      <h1 className={styles.title}>Editors Choice</h1>
      <MenuPosts withImage={true} type={"edchoice"}/>

    </div>
  );
};

export default Menu;
