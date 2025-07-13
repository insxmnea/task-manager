import type { FC } from "react";
import styles from "./Footer.module.css";
import { ActionIcon, Group } from "@mantine/core";

export const Footer: FC = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.inner}>
        <Group gap="xs" wrap="nowrap">
          <a href="https://github.com/insxmnea/task-manager" target="_blank">
            <ActionIcon size="lg" variant="default" radius="xl">
              <i className="nf nf-fa-github"></i>
            </ActionIcon>
          </a>
        </Group>
      </div>
    </div>
  );
};
