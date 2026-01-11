import {useContext} from "react";
import {SettingsContext} from "@/entities/settings/model/SettingsContext";
import {SegmentedControl} from "@/shared/ui/SegmentedControl";
import {SETTINGS_CONFIG} from "@/entities/settings/model/config";

import styles from './SettingsPanel.module.scss'

export const SettingsPanel = (props) => {
  const {
    children
  } = props

  const allSettings = SETTINGS_CONFIG

  const {settings, updateSettings} = useContext(SettingsContext);


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