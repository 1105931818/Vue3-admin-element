import { defineStore, StoreDefinition, _UnwrapAll } from 'pinia';
import { Settings } from '@/utils/type';

const settings: StoreDefinition<
  'settings',
  _UnwrapAll<Pick<Settings, 'isChange'>>,
  Pick<Settings, never>,
  Pick<Settings, 'upChange'>
> = defineStore('settings', (): Settings => {
  let isChange: boolean;
  return {
    isChange: false,
    upChange() {
      this.isChange = !this.isChange;
    },
  };
});

export default settings;
