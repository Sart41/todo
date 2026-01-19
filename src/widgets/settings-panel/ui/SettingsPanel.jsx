import {useContext} from "react";
import {SettingsContexts} from "@/entities/settings/model/SettingsContexts";
import {SegmentedControl} from "@/shared/ui/SegmentedControl";
import {SETTINGS_CONFIG} from "@/entities/settings/model/config";

import styles from './SettingsPanel.module.scss'

export const SettingsPanel = (props) => {

  const allSettings = SETTINGS_CONFIG

  const {settings, updateSettings} = useContext(SettingsContexts);


  return (
    <section className={styles.root}>
      <ul>

        {allSettings.map((setting) => (
          <li key={setting.id}>
            <span className={styles.settingLabel}>{setting.label}</span>
            <SegmentedControl
              value={settings[setting.id]}
              options={setting.options}
              onChange={(value) => updateSettings(setting.id, value)}
            />
          </li>
        ))}
      </ul>
    </section>
  )
}