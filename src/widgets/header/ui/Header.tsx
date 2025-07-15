import type { FC } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { Box, Group } from "@mantine/core";
import { ROUTES } from "@app/router";

export const Header: FC = () => {
  return (
    <Box pb={20}>
      <header className={styles.header}>
        <Group h="100%" gap={0}>
          <Link to={ROUTES.HOMEPAGE} className={styles.link}>
            Список задач
          </Link>
        </Group>
      </header>
    </Box>
  );
};
