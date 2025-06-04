import { version } from '../package.json';

export function getManifest() {
  const manifest: chrome.runtime.Manifest = {
    manifest_version: 3,

    name: 'AI Assistant Extension',
    description: 'AI问答助手插件',
    version,

    icons: {
      16: 'icon.png',
      32: 'icon.png',
      48: 'icon.png',
      128: 'icon.png',
    },

    options_ui: {
      page: 'src/options/index.html',
      open_in_tab: true,
    },

    action: {
      default_icon: 'icon.png',
      default_popup: 'src/popup/index.html',
    },

    content_scripts: [
      {
        matches: ['<all_urls>'],
        all_frames: true,
        match_about_blank: true,
        js: ['src/content_script/index.tsx'],
      },
    ],

    // background: {
    //   service_worker: 'background/service-worker.ts',
    // },

    permissions: ['storage', 'contextMenus', 'webRequest'],
  };

  return manifest;
}
