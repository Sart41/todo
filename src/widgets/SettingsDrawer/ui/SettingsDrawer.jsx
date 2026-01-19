import {useState} from 'react';
import {Drawer} from '@/shared/ui/Drawer';
import {SettingsPanel} from "@/widgets/settings-panel";
import {Button} from "@/shared/ui/Button";

import styles from './SettingsDrawer.module.scss';

export const SettingsDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        className={styles.triggerBtn}
        variant="ghost"
        onClick={() => setIsOpen(true)}
        title="Открыть настройки"
      >
        ⚙️
      </Button>

      <Drawer
        title="Настройки приложения"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <SettingsPanel />
      </Drawer>
    </>
  );
};