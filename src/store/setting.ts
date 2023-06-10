import { defineStore, StoreDefinition, _UnwrapAll } from 'pinia';
import { Settings } from '@/utils/type';

const settings: StoreDefinition<
  'settings',
  _UnwrapAll<Pick<Settings, 'isChange' | 'isSwitch' | 'isRefsh'>>,
  Pick<Settings, never>,
  Pick<Settings, 'upChange' | 'upSwitch' | 'upRefsh'>
> = defineStore('settings', (): Settings => {
  return {
    isChange: false,
    isSwitch: false,
    isRefsh: false,
    upChange() {
      this.isChange = !this.isChange;
    },
    upSwitch() {
      this.isSwitch = !this.isSwitch;
    },
    upRefsh() {
      this.isRefsh = !this.isRefsh;
    },
  };
});

export default settings;
