import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import AutoImport from 'unplugin-auto-import/vite';

export default defineConfig({
  plugins: [
    react(),
    AutoImport({
      imports: [
        'react',
        {
          'react-router-dom': ['useHistory', 'useLocation', 'Link'],
          'react-i18next': ['useTranslation'],
          'react-icons/fa6': ['FaTelegram'],
          'react-icons/ri': ['RiArrowRightDoubleLine'],
          'react-icons/md': ['MdLocalPhone'],
          'react-icons/ci': ['CiMail'],
        },
      ],
      dts: 'src/auto-imports.d.ts', // Ensure this path is correct
    }),
  ],
});
