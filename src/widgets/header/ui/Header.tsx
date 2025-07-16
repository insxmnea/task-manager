import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { Box, Group } from "@mantine/core";
import { ROUTES } from "@app/router";

export const Header = () => {
  return (
    <Box pb={20}>
      <header className={styles.header}>
        <Group h="100%" gap={0}>
          <Link to={ROUTES.HOMEPAGE} className={styles.link}>
            Список задач
          </Link>

          <Link to={ROUTES.CREATETASKPAGE} className={styles.link}>
            Добавить задачу
          </Link>
        </Group>
      </header>
    </Box>
  );
};
